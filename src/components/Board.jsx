import React, { useState } from 'react';
import Square from './Square';
import { calculateWinner } from './win';
const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  console.log(board);
  const [isNextPlayer, setNextPayer] = useState(false);
  const winner = calculateWinner(board);
  const message = winner
    ? `Winner Is ${winner}`
    : `Next Player ${isNextPlayer ? 'O' : 'X'}`;
  const squareClkHandler = position => {
    if (board[position] || winner) {
      return;
    }

    setBoard(prev => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isNextPlayer ? 'O' : 'X';
        }
        return square;
      });
    });
    setNextPayer(prev => !prev);
  };

  const renderSquare = position => {
    return (
      <Square
        value={board[position]}
        onClick={() => {
          squareClkHandler(position);
        }}
      />
    );
  };

  return (
    <div className="board">
      <div className="app">
        <h1>TIC TAC TOE</h1>
        <h2>{message}</h2>
      </div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
