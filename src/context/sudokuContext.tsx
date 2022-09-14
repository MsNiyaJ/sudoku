import React, { ReactNode, createContext, useState } from 'react';
import boards from '../boards';
import { getRandomNum } from '../helper/randomize';
import { Board, Difficulty, SudokuContextType } from '../types';

export const SudokuContext = createContext<SudokuContextType>({
  difficulty: 'Easy',
  setDifficulty: () => {},
  winningBoard: Array(9).fill(Array(9).fill('')),
  setWinningBoard: () => {},
});

const SudokuProvider = ({ children }: { children: ReactNode }) => {
  const [difficulty, setDifficulty] = useState<Difficulty>('Easy');
  const [winningBoard, setWinningBoard] = useState<Board>(
    boards[getRandomNum(0, boards.length - 1)]
  );

  return (
    <SudokuContext.Provider
      value={{
        difficulty,
        setDifficulty,
        winningBoard,
        setWinningBoard,
      }}
    >
      {children}
    </SudokuContext.Provider>
  );
};

export default SudokuProvider;
