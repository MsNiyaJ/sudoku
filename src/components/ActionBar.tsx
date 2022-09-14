import { useContext } from 'react';
import Dropdown from './Dropdown';
import { SudokuContext } from '../context/sudokuContext';
import { randomBoard } from '../helper/board-generator';

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
