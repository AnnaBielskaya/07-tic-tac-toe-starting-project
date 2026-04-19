import React, { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({ onsSelectSquare, symbol }) => {
  const [gameboard, setGameboard] = useState(initialGameBoard);

  const handleSelectSquare = (rowIndex, colIndex) => {
    if (gameboard[rowIndex][colIndex] === null) {
      const updatedBoard = [...gameboard.map((innerArray) => [...innerArray])];
      updatedBoard[rowIndex][colIndex] = symbol;
      setGameboard(updatedBoard);
      onsSelectSquare();
    }
  };

  return (
    <div id="game-board">
      {gameboard.map((row, rowIndex) => (
        <div key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => {
              return (
                <li key={colIndex}>
                  <button
                    onClick={() => handleSelectSquare(rowIndex, colIndex)}
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
