import React, { ReactNode, createContext, useState } from 'react';
import { Difficulty, SudokuContextType } from '../types';

export const SudokuContext = createContext<SudokuContextType>({
  difficulty: 'Easy',
  setDifficulty: () => {},
});

const SudokuProvider = ({ children }: { children: ReactNode }) => {
  const [difficulty, setDifficulty] = useState<Difficulty>('Easy');

  return (
    <SudokuContext.Provider value={{ difficulty, setDifficulty }}>
      {children}
    </SudokuContext.Provider>
  );
};

export default SudokuProvider;
