import React, { useState } from 'react';
import Square from './Square';
import { calculateWinner } from './win';
import History from './History';
import StateInfo from './StateInfo';

const newBoard = [{ board: Array(9).fill(null), isNext: false }];

const Board = () => {
  const [history, setHistory] = useState(newBoard);
  const [currentMove, setcurrentMove] = useState(0);

  const current = history[currentMove];
  // const [isNextPlayer, setNextPayer] = useState(false);
  const { winner, winningSquares } = calculateWinner(current.board);

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
    const iswinningSquare = winningSquares.includes(position);
    //console.log(iswinningSquare);
    return (
      <Square
        value={current.board[position]}
        onClick={() => {
          squareClkHandler(position);
        }}
        iswinningSquare={iswinningSquare}
      />
    );
  };

  const moveTo = move => {
    setcurrentMove(move);
  };
  // const noMoveLeft = current.board.some(el => {
  //   el !== null;
  // });

  const newGame = () => {
    setHistory(newBoard);
    setcurrentMove(0);
  };
  return (
    <div className="app">
      <div className="app">
        <h1>
          TIC <span className="text-green">TAC</span> TOE
        </h1>
        <StateInfo
          winner={winner}
          current={current}
          currentMove={currentMove}
        />
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
        <button
          onClick={newGame}
          className={`btn-reset ${winner ? 'active' : ''}`}
        >
          Start New Game
        </button>

        <History history={history} moveTo={moveTo} currentMove={currentMove} />
      </div>
    </div>
  );
};

export default Board;
