import { useState, useEffect, useContext } from 'react';
import { SudokuContext } from '../context/sudokuContext';
export interface BoxProps {
  value?: string | number;
  disabled?: boolean; // true if value is an empty string
  answer: string | number;
}

const Box = ({ value = '', disabled = false, answer }: BoxProps) => {
  const [boxValue, setBoxValue] = useState<string | number>(value);
  const [boxError, setBoxError] = useState(false);
  const { difficulty, winningBoard } = useContext(SudokuContext);

  const onChange = (e: any) => {
    setBoxError(false);
    const value: number | string = Number(e.target.value);

    if (value.toString() === answer.toString()) {
    } else if (value !== 0) {
      setBoxError(true);
    } else {
      setBoxError(false);
    }

    if (value === 0) setBoxValue('');
    else if (!isNaN(value)) setBoxValue(value);
  };

  useEffect(() => {
    setBoxError(false);
    setBoxValue('');
    setBoxValue(value);
  }, [value, difficulty, winningBoard]);

  return (
    <input
      type="text"
      className={`box ${boxError ? 'boxError' : ''}`}
      disabled={disabled}
      onChange={onChange}
      value={boxValue}
      maxLength={1}
    />
  );
};

export default Box;
