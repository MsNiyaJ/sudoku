import { useState } from 'react';
export interface BoxProps {
  value?: string | number;
  disabled?: boolean; // true if value is an empty string
}

const Box = ({ value = '', disabled = false }: BoxProps) => {
  const [boxValue, setValue] = useState(value);

  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input
        type="number"
        className="box"
        onChange={onChange}
        value={value}
        maxLength={1}
        disabled={disabled}
      />
    </div>
  );
};

export default Box;
