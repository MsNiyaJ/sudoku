import { useState } from 'react';
import { toNumber } from '../helper/toNumber';
export interface BoxProps {
  value?: string | number;
  disabled: boolean; // true if value is an empty string
}

const Box = ({ value = '', disabled = false }: BoxProps) => {
  const [boxValue, setValue] = useState<string | number>(value);

  const onChange = (e: any) => {
    const value: number | string = toNumber(e.target.value);

    if (value === 0) setValue('');
    else if (!isNaN(value)) setValue(value);
  };

  return (
    <div>
      <input
        disabled={disabled}
        type="text"
        className="box"
        onChange={onChange}
        value={boxValue}
        maxLength={1}
      />
    </div>
  );
};

export default Box;
