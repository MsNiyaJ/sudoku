import React, { useState } from 'react';

const Dropdown = ({ ...props }) => {
  const { label, options } = props;

  const [value, setValue] = useState(options[0].name);
  const handleChange = (e: any) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  return (
    <div className="dropdown-container">
      <p>{label}: </p>
      <select
        id="difficulty-select"
        value={value}
        className="dropdown-menu gray-text"
        onChange={handleChange}
      >
        {options.map((option: { id: number; name: string }) => {
          return <option key={option.id}>{option.name}</option>;
        })}
      </select>
    </div>
  );
};

export default Dropdown;
