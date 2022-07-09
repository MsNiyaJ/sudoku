export type DifficultyListType = {
  id: number;
  name: string;
};

export type SudokuContextType = {
  board: (string | number)[][];
  difficulty: string;
  changeDifficulty: (difficulty: string) => void;
  updateBoard: (board: (string | number)[][]) => void;
};
