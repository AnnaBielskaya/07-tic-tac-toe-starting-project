const GameOver = ({ winner, onRestart }) => {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      <p>{winner ? winner : "No one"} won!</p>
      <button onClick={onRestart}>Rematch!</button>
    </div>
  );
};

export default GameOver;
