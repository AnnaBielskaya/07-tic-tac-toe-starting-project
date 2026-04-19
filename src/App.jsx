import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";

import { INITIAL_PLAYERS } from "./constants/players";
import { checkWinner, deriveActivePlayer, getBoard } from "./utils/gamelogic";
import GameOver from "./components/GameOver";

function App() {
  const [players, setPlayers] = useState(INITIAL_PLAYERS);

  const [gameTurns, setGameTurns] = useState([]);
  const currentPlayer = deriveActivePlayer(gameTurns);
  const board = getBoard(gameTurns);
  const winner = players[checkWinner(board)];
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

  const handleRestart = () => {
    setGameTurns([]);
  };

  const handlePlaerNameChange = (symbol, name) => {
    setPlayers((prevState) => {
      return { ...prevState, [symbol]: name };
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
            onChangeName={handlePlaerNameChange}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={currentPlayer === "O"}
            onChangeName={handlePlaerNameChange}
          />
        </ol>
        {winner && <GameOver winner={winner} onRestart={handleRestart} />}
        {draw && <GameOver winner={"No one"} onRestart={handleRestart} />}
        <GameBoard onsSelectSquare={handleSelectSquare} board={board} />
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;
