import React, { Dispatch, SetStateAction } from 'react';
import { DifficultyList } from './DifficultyList';
import Dropdown from './Dropdown';

export interface ActionBarProps {
  setDifficulty: Dispatch<SetStateAction<string>>;
}

const ActionBar = ({ setDifficulty }: ActionBarProps) => {
  return (
    <div className="action-bar">
      <Dropdown setDifficulty={setDifficulty} label="Difficulty" options={DifficultyList} />
      <p className="timer">00:00</p>
    </div>
  );
};

export default ActionBar;
