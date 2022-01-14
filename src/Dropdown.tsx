import React from 'react';

const Dropdown = ({ ...props }) => {
  const { label, options } = props;

  return (
    <div className="dropdown-container">
      <p>{label}: </p>
      <select className="dropdown-menu gray-text">
        {options.map((option: { id: number; name: string }) => {
          return <option key={option.id}>{option.name}</option>;
        })}
      </select>
    </div>
  );
};

export default Dropdown;
