import { GamesService } from '../services/games-service.js'
import GamesList from '../components/GamesList.jsx';
import ProtectedLayout from '../components/layouts/ProtectedLayout.jsx';

const gamesService = new GamesService();
const games = gamesService.getAllGames();

export default function HomePage() {
    return (
        <ProtectedLayout>
            <GamesList games={games}></GamesList>
        </ProtectedLayout>
    )
}