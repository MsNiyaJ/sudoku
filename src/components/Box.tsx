import { useState, useEffect } from 'react';
export interface BoxProps {
  value?: string | number;
  disabled?: boolean; // true if value is an empty string
}

const Box = ({ value = '', disabled = false }: BoxProps) => {
  const [boxValue, setValue] = useState<string | number>(value);

  const onChange = (e: any) => {
    const value: number | string = Number(e.target.value);

    if (value === 0) setValue('');
    else if (!isNaN(value)) setValue(value);
  };

  useEffect(() => {
    setValue(value);
  }, [value]);

  return (
    <input
      disabled={disabled}
      type="text"
      className="box"
      onChange={onChange}
      value={boxValue}
      maxLength={1}
    />
  );
};

export default Box;
