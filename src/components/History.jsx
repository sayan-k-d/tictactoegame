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
                fontSize: move === currentMove ? 16 : 12,
              }}
              onClick={() => {
                moveTo(move);
              }}
            >
              {move === 0 ? 'Make a Move' : `Next Move #${move}`}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default History;
