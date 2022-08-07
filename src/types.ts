import { GameClass } from './context/sudokuContext';

export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export type DifficultyListType = {
  id: number;
  name: Difficulty;
};

export type SudokuContextType = {
  game: GameClass;
};

export type Board = (string | number)[][];
