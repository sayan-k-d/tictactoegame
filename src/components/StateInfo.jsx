import React from 'react';

const StateInfo = ({ winner, current, currentMove }) => {
  //const noMoveLeft = current.board.every(el => el !== null);
  return (
    <div>
      <h2>
        <p
          style={{
            fontSize: 35,
            fontFamily: 'Times New Roman',
            fontWeight: 'bolder',
          }}
        >
          {winner && `Winner Is ${winner}`}
        </p>
        {!winner &&
          currentMove !== 9 &&
          `Next Player ${current.isNext ? 'O' : 'X'}`}
        {!winner && currentMove === 9 && 'X and O Tied'}
      </h2>
    </div>
  );
};

export default StateInfo;
