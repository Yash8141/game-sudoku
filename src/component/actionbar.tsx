import { useContext } from 'react';
import Dropdown from './dropdown';
import { SudokuContext } from './helper/context/sudokucontext';
import { randomBoard } from './helper/board-generator';
import React from 'react';

const ActionBar = () => {
  const { setWinningBoard } = useContext(SudokuContext);

  const handleNewGame = () => {
    setWinningBoard(randomBoard());
  };

  return (
    <div className="action-bar">
      <Dropdown />
      <button onClick={handleNewGame} className="new-game-button">
        New Game
      </button>
    </div>
  );
};

export default ActionBar;