import React from 'react';

const StateInfo = ({ winner, current, currentMove }) => {
  //const noMoveLeft = current.board.every(el => el !== null);
  return (
    <div className="status-message">
      {winner && (
        <>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      )}

      {!winner && currentMove !== 9 && (
        <>
          Next Player{' '}
          <span className={current.isNext ? 'text-orange' : 'text-green'}>
            {current.isNext ? 'O' : 'X'}
          </span>
        </>
      )}
      {!winner && currentMove === 9 && (
        <>
          <span className="text-green">X </span>and
          <span className="text-orange"> O </span>Tied
        </>
      )}
    </div>
  );
};

export default StateInfo;
