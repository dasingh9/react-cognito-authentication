import { useState } from "react";
import GameCard from "./GameCard";

function GamesList (props) {
    const originalGamesArray = props.games;
    const [games, setGames] = useState([...originalGamesArray]);

    let gamesJsx = games.map(game => (
        <div className="col-lg-3" key={game.id}>
            <GameCard game = {game}></GameCard>
        </div>
        )
    );

    const filterGameByTitle = function (title) {
        if(title.length >=3) {
            let filteredGames = originalGamesArray.filter(game => game.title.toLowerCase().includes(title.toLowerCase()));
            setGames(filteredGames);
        }
        else
            setGames(originalGamesArray);
    }


    const filterGameByGenre = function (genre) {
        let filteredGames = originalGamesArray.filter(game => game.genre.toLowerCase().includes(genre.toLowerCase()));
        setGames(filteredGames);
    }

    return (
        <>
        <GamesFilter onTitleChange={filterGameByTitle}></GamesFilter>

        <div className="row">
            {gamesJsx}
         </div>  
        </>
    );
}

function GamesFilter({onTitleChange, onGenreChange}) {
    const [title, setTitle] = useState("");

    function handleTitleSearch(e) {
        const titleText = e.target.value;
        setTitle(titleText);
        onTitleChange(titleText);
    }

    function handleGenreSearch(e) {
        const genreText = e.target.value;
        setTitle(genreText);
        onGenreChange(genreText);
    }

    return (
        <>
            <input type="text" value={title} onChange={(e)=> {handleTitleSearch(e)}} placeholder="Enter a title"></input>
            <button onClick={()=>{handleTitleSearch();}}>Search</button>
            {title}
        </>
    );
}

export default GamesList;