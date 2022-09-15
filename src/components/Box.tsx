import { useState, useEffect, useContext } from 'react';
import { SudokuContext } from '../context/sudokuContext';
import { Board } from '../types';
export interface BoxProps {
  value?: string | number;
  disabled?: boolean; // true if value is an empty string
  answer: string | number;
  checkForWin: Function;
}

const Box = ({
  value = '',
  disabled = false,
  answer,
  checkForWin,
}: BoxProps) => {
  const [boxValue, setBoxValue] = useState<string | number>(value);
  const [boxError, setBoxError] = useState(false);
  const { difficulty, winningBoard } = useContext(SudokuContext);

  const onChange = (e: any) => {
    setBoxError(false);
    const value: number | string = Number(e.target.value);
    const foundAnswer = value.toString() === answer.toString();

    if (value !== 0 && !foundAnswer) {
      setBoxError(true);
    } else {
      setBoxError(false);
      checkForWin();
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
