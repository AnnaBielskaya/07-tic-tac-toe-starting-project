import React from "react";

const Log = ({ gameTurns }) => {
  return (
    <ol id="log">
      {gameTurns.map((turn) => {
        return (
          <p key={`${turn.player}-${turn.square.row}-${turn.square.col}`}>
            {turn.player}-{turn.square.row}-{turn.square.col}
          </p>
        );
      })}
    </ol>
  );
};

export default Log;
