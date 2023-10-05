import { Auth } from 'aws-amplify';
import { useState, useEffect } from 'react';
import { GamesService } from '../services/games-service.js'
import GamesList from '../components/GamesList.jsx';
import ProtectedLayout from '../components/layouts/ProtectedLayout.jsx';

const gamesService = new GamesService();
const games = gamesService.getAllGames();

export default function HomePage() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {

        Auth.currentSession()
        .then(session => {
            const token = session.getAccessToken().getJwtToken();

        const apiUrl = 'http://localhost:8080/api/games';
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            // Add any other headers you may need
        };

        // Make the API call using fetch
        fetch(apiUrl, { headers })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error);
                setIsLoading(false);
            });
        })
        .catch(error => {
            console.log('Error getting authentication token:', error);
        });

        setIsLoading(true);
    }, []); // Empty dependency array to run the effect only once on component mount

    /*if (isLoading) {
        return <div>Loading...</div>;
    }*/

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <ProtectedLayout>
            {data && (
                <GamesList games={data}></GamesList>
            )}
        </ProtectedLayout>
    )
}