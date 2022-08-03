import React, { ReactNode, useState } from 'react';
import boards from '../boards';
import { getRandomNum } from '../helper/randomize';
import { Board, Difficulty, SudokuContextType } from '../types';

export const SudokuContext = React.createContext<SudokuContextType | {}>({});

const SudokuProvider = ({ children }: { children: ReactNode }) => {
  const [difficulty, setDifficulty] = useState<Difficulty>('Easy');
  const [board, setBoard] = useState<(string | number)[][]>(
    Array(9).fill(Array(9).fill(''))
  );

  const getRandomBoard = (): number[][] => {
    return boards[getRandomNum(0, boards.length - 1)];
  };

  const newGame = () => {
    // resetBoard();
    const randomBoard = getRandomBoard();

    // Copy the board to prevent altering the original
    const newBoard: Board = randomBoard.map((row) => [...row]);
    setBoard(newBoard);
  };

  // Set the difficulty to the value of the difficulty passed in
  const changeDifficulty = (difficulty: Difficulty) => {
    setDifficulty(difficulty);
    newGame();
  };

  return (
    <SudokuContext.Provider
      value={{ board, difficulty, setBoard, changeDifficulty, newGame }}
    >
      {children}
    </SudokuContext.Provider>
  );
};

export default SudokuProvider;
