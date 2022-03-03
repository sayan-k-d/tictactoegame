import React from 'react';

const StateInfo = ({ winner, current, currentMove }) => {
  console.log(currentMove);
  console.log(current.board);
  //const noMoveLeft = current.board.every(el => el !== null);
  return (
    <div>
      <h2>
        {winner && `Winner Is ${winner}`}
        {!winner &&
          currentMove !== 9 &&
          `Next Player ${current.isNext ? 'O' : 'X'}`}
        {!winner && currentMove === 9 && 'X and O Tied'}
      </h2>
    </div>
  );
};

export default StateInfo;
