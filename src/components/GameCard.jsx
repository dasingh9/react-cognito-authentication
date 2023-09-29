export default function GameCard(props) {
    return (
        <>
            <div className="card" style={{width: '18rem', height:"28rem", margin: "2rem"}}>
                <CardImage src={props.game.thumbnail}></CardImage>
                <div className="card-body">
                    <h3>{props.game.title}</h3>
                    <p className="card-text">
                        {props.game.short_description}
                    </p>
                </div>
                <div>
                    <button className="btn btn-success">Play Game</button>
                </div>
            </div>
        </>
    )
}

function CardImage({src}) {
    return (
        <img className="card-img-top"
            src={src}
            alt="Card image cap" />
    );
}

/*
function CardBody() {
    return (
        <div className="card-body">
            <h3>Game header</h3>
            <p className="card-text">Short summary of the game</p>
        </div>
    );
}

function PlayGameButton() {
    return (
        <div>
            <button className="btn btn-success">Play Game</button>
        </div>
    )
}*/