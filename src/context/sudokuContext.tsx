import React, { ReactNode, useState } from 'react';
import { SudokuContextType } from '../types';

export const SudokuContext = React.createContext<SudokuContextType | null>(
  null
);

const SudokuProvider = ({ children }: { children: ReactNode }) => {
  const [difficulty, setDifficulty] = useState<string>('Easy');
  const [board, setBoard] = useState<(string | number)[][]>(
    Array(9).fill(Array(9).fill(''))
  );

  // Set the difficulty to the value of the difficulty passed in
  const changeDifficulty = (difficulty: string) => {
    setDifficulty(difficulty);
  };

  // Set the board to the value of the board passed in
  const updateBoard = (board: (string | number)[][]) => {
    setBoard(board);
  };

  return (
    <SudokuContext.Provider
      value={{ board, updateBoard, difficulty, changeDifficulty }}
    >
      {children}
    </SudokuContext.Provider>
  );
};

export default SudokuProvider;
