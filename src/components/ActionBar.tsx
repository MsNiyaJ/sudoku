import React from 'react';
import Dropdown from './Dropdown';

const ActionBar = () => {
  return (
    <div className="action-bar">
      <Dropdown />
      <p className="timer">00:00</p>
    </div>
  );
};

export default ActionBar;
