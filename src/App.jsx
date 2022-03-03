import React from 'react';
import Board from './components/Board';
import './styles/root.scss';

const App = () => {
  return (
    <div className="app">
      <Board />
      <div className="bg-balls" />
    </div>
  );
};

export default App;
