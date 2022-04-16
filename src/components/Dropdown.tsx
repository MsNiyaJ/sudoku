import React, { Dispatch, SetStateAction, useState } from 'react';
import { DifficultyListProps } from '../DifficultyList';

export interface DropdownProps {
  label: string;
  options: DifficultyListProps[];
  setDifficulty: Dispatch<SetStateAction<string>>;
}

const Dropdown = ({ ...props }: DropdownProps) => {
  const { label, options, setDifficulty } = props;

  const [value, setValue] = useState(options[0].name);
  const handleChange = (e: any) => {
    e.preventDefault();
    setValue(e.target.value);
    setDifficulty(e.target.value);
  };

  return (
    <div className="dropdown-container">
      <p>{label}: </p>
      <select
        id="difficulty-select"
        value={value}
        className="dropdown-menu blue-text"
        onChange={handleChange}
      >
        {options.map((option: DifficultyListProps) => {
          return <option key={option.id}>{option.name}</option>;
        })}
      </select>
    </div>
  );
};

export default Dropdown;
