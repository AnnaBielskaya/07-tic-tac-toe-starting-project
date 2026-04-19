const GameOver = ({ winner }) => {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      <p>{winner} won!</p>
      <button>Rematch!</button>
    </div>
  );
};

export default GameOver;
