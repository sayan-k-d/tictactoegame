import React, { useState } from 'react';
import Square from './Square';
import { calculateWinner } from './win';
import History from './History';

const Board = () => {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isNext: false },
  ]);
  const [currentMove, setcurrentMove] = useState(0);

  const current = history[currentMove];
  // const [isNextPlayer, setNextPayer] = useState(false);
  const winner = calculateWinner(current.board);
  const message = winner
    ? `Winner Is ${winner}`
    : `Next Player ${current.isNext ? 'O' : 'X'}`;

  const squareClkHandler = position => {
    if (current.board[position] || winner) {
      return;
    }

    setHistory(prev => {
      const lastMove = prev[prev.length - 1];

      const newBoard = lastMove.board.map((square, pos) => {
        if (pos === position) {
          return lastMove.isNext ? 'O' : 'X';
        }
        return square;
      });
      return prev.concat({ board: newBoard, isNext: !lastMove.isNext });
    });
    setcurrentMove(currentMove + 1);
  };

  const renderSquare = position => {
    return (
      <Square
        value={current.board[position]}
        onClick={() => {
          squareClkHandler(position);
        }}
      />
    );
  };

  const moveTo = move => {
    setcurrentMove(move);
  };

  return (
    <div>
      <div className="app">
        <h1>TIC TAC TOE</h1>
        <h2>{message}</h2>
      </div>
      <div className="board">
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
      <div className="app">
        <History history={history} moveTo={moveTo} currentMove={currentMove} />
      </div>
    </div>
  );
};

export default Board;
