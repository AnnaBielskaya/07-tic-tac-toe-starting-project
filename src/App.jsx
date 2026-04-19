import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";

import { deriveActivePlayer, getBoard } from "./utils/gamelogic";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  //const [winner, setWinner] = useState(null);
  const currentPlayer = deriveActivePlayer(gameTurns);
  const board = getBoard(gameTurns);

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
        <GameBoard onsSelectSquare={handleSelectSquare} board={board} />
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;
