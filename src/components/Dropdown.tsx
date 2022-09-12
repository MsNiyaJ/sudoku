import React, { useContext } from 'react';
import { Difficulty, DifficultyListType } from '../types';
import { SudokuContext } from '../context/sudokuContext';

const difficultyList: DifficultyListType[] = [
  {
    id: 1,
    name: 'Easy',
  },
  {
    id: 2,
    name: 'Medium',
  },
  {
    id: 3,
    name: 'Hard',
  },
];

const Dropdown: React.FC = () => {
  // Get the context
  const { difficulty, setDifficulty } = useContext(SudokuContext);

  // Handle the change of difficulty
  const handleChange = (e: { target: { value: string } }) => {
    const newDifficulty = e.target.value as Difficulty;
    setDifficulty(newDifficulty); // update the local state
  };

  return (
    <div className="dropdown-container">
      <p>Difficulty: </p>
      <select
        id="difficulty-select"
        value={difficulty}
        className="dropdown-menu blue-text"
        onChange={handleChange}
      >
        {difficultyList.map((option) => {
          return <option key={option.id}>{option.name}</option>;
        })}
      </select>
    </div>
  );
};

export default Dropdown;
