export default function GameOver({winner, onRematch}){

    return <div id="game-over">
        <h1>Game Over!</h1>
        {winner && <p>{winner} Won!</p>}
        {!winner && <p>It&apos;s a draw!</p>}
        <button onClick={onRematch}>Rematch!</button>
    </div>

}