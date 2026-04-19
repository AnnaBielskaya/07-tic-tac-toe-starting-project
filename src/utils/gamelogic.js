import { WINNING_COMBINATIONS } from "../constants/winningcombinations";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export const deriveActivePlayer = (gameTurns) => {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") currentPlayer = "O";
  return currentPlayer;
};

export const getBoard = (turns) => {
  let gameBoard = [...initialGameBoard.map((array) => [...array])];

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return gameBoard;
};

export const checkWinner = (board) => {
  for (const combination of WINNING_COMBINATIONS) {
    const firstWinningSymbol = board[combination[0].row][combination[0].column];
    const secondWinningSymbol =
      board[combination[1].row][combination[1].column];
    const thirdWinningSymbol = board[combination[2].row][combination[2].column];

    if (
      firstWinningSymbol !== null &&
      firstWinningSymbol === secondWinningSymbol &&
      firstWinningSymbol === thirdWinningSymbol
    )
      return firstWinningSymbol;
  }

  return null;
};
