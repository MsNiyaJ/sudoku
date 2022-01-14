import React from 'react';
import { DifficultyList } from './DifficultyList';
import Dropdown from './Dropdown';

const ActionBar = () => {
  return (
    <div className="action-bar">
      <Dropdown label="Difficulty" options={DifficultyList} />
      <p className="timer">00:00</p>
    </div>
  );
};

export default ActionBar;
