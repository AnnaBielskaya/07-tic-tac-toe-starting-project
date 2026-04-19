const GameBoard = ({ onsSelectSquare, board }) => {
  return (
    <div id="game-board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => {
              return (
                <li key={colIndex}>
                  <button
                    disabled={col !== null}
                    onClick={() => onsSelectSquare(rowIndex, colIndex)}
                  >
                    {col}
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
