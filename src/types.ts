export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export type DifficultyListType = {
  id: number;
  name: Difficulty;
};

export type SudokuContextType = {
  difficulty: Difficulty;
  setDifficulty: (newDifficulty: Difficulty) => void;
  winningBoard: Board;
  setWinningBoard: (board: Board) => void;
};

export type Board = (string | number)[][];
