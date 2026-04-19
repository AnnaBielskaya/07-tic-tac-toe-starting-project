const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({ onsSelectSquare, turns }) => {
  let gameBoard = [...initialGameBoard.map((array) => [...array])];

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return (
    <div id="game-board">
      {gameBoard.map((row, rowIndex) => (
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
