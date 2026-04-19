import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";

import { checkWinner, deriveActivePlayer, getBoard } from "./utils/gamelogic";
import GameOver from "./components/GameOver";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const currentPlayer = deriveActivePlayer(gameTurns);
  const board = getBoard(gameTurns);
  const winner = checkWinner(board);
  const draw = gameTurns.length === 9 && !winner;

  const handleSelectSquare = (row, col) => {
    setGameTurns((prevTurns) => {
      let currentPlayer = "X";

      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      }

      const updatedTurns = [
        { square: { row: row, col: col }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol className="highlight-player" id="players">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={currentPlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={currentPlayer === "O"}
          />
        </ol>
        {winner && <GameOver winner={winner} />}
        {draw && <GameOver winner={"No one"} />}
        <GameBoard onsSelectSquare={handleSelectSquare} board={board} />
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;
