import { useEffect, useState } from "react";
import GamesFilter from "./GamesFilter";
import GameCard from "./GameCard"
import "./games.css"

export default function GamesList({games}) {
    const [filteredGames, setFilteredGames] = useState([...games]);
    const [allGames, setAllGames] = useState([...games]);
    const [genres, setGenres] = useState(getUniqueGenresList(allGames));
    const [platforms, setPlatforms] = useState(getUniquePlatformsList(allGames));
    const [errorMessage, setErrorMessage] = useState(null);

    /*useEffect(()=>{
        gamesService.getGames()
        .then(gamesJsonData=>{
            setFilteredGames(gamesJsonData);
            setAllGames(gamesJsonData);
            setGenres(getUniqueGenresList(gamesJsonData));
            setPlatforms(getUniquePlatformsList(gamesJsonData));
            setErrorMessage(null);
        })
        .catch(error=>{
            setErrorMessage("Sorry, unable to connect to server. Please try again later!");
        })
    }, 
    []);*/

    function getUniqueGenresList(gamesArray) {
        const allGenresList = gamesArray.map(game=>game.genre); 
        const uniqueGenresList = [...new Set(allGenresList)];
        return uniqueGenresList;
    }

    function getUniquePlatformsList(gamesArray) {
        const allPlatformsList = gamesArray.map(game=>game.platform); 
        const uniquePlatformsList = [...new Set(allPlatformsList)];
        return uniquePlatformsList;
    }

    function applyFilters(title, genre, platform) {
        console.log('apply filters', title, genre);
        let filteredGamesArray = allGames.filter(game => 
            (title == "" || game.title.toLowerCase().includes(title.toLowerCase())) &&
            (genre == "" || game.genre.includes(genre)) &&
            (platform == "" || game.platform.includes(platform))
        );
        //console.log(filteredGamesArray);
        setFilteredGames(filteredGamesArray);
    }

    return (
    <>
        {errorMessage && <h3>{errorMessage}</h3>}
        {!errorMessage && 
            <GamesFilter 
                genres = {genres}
                platforms={platforms}
                onFilterChange={applyFilters}
            >
            </GamesFilter>
        }
        <div className="games-list-container">
            {filteredGames.map(game => <GameCard key={game.id} game={game}/>)}
        </div>
    </>
    );
}