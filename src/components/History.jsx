import React from 'react';

const History = ({ history, moveTo, currentMove }) => {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((_, move) => {
          return (
            <li key={move}>
              <button
                className={`btn-move ${move === currentMove ? 'active' : ''}`}
                // style={{
                //   fontWeight: move === currentMove ? 'bold' : 'normal',
                //   fontSize: move === currentMove ? 16 : 12,
                // }}
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
    </div>
  );
};

export default History;
