export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export type DifficultyListType = {
  id: number;
  name: Difficulty;
};

export type SudokuContextType = {
  board: Board;
  difficulty: Difficulty;
  newGame: () => void;
  changeDifficulty: (difficulty: Difficulty) => void;
  setBoard: (board: Board) => void;
};

export type Board = (string | number)[][];
