import React from 'react';

const Square = ({ value, onClick, iswinningSquare }) => {
  console.log(iswinningSquare);
  return (
    <button
      className="square"
      onClick={onClick}
      style={{
        fontWeight: iswinningSquare ? 'bolder' : 'normal',
        fontFamily: iswinningSquare ? 'Lucida Console' : 'serif',
        fontSize: iswinningSquare ? 50 : 40,
      }}
    >
      {value}
    </button>
  );
};

export default Square;
