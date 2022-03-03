import React from 'react';

const History = ({ history, moveTo, currentMove }) => {
  return (
    <ul>
      {history.map((_, move) => {
        return (
          <li key={move}>
            <button
              style={{
                fontWeight: move === currentMove ? 'bold' : 'normal',
                fontSize: move === currentMove ? 20 : 16,
              }}
              onClick={() => {
                moveTo(move);
              }}
            >
              {move === 0 ? 'Start The Game' : `Next Move #${move}`}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default History;
