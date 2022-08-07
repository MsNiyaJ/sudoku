import React, { ReactNode } from 'react';
import boards from '../boards';
import { getRandomArrOfNums, getRandomNum } from '../helper/randomize';
import { Board, Difficulty, SudokuContextType } from '../types';

export class GameClass {
  board: Board;
  difficulty: Difficulty;

  constructor() {
    this.board = this.newBoard('Easy');
    this.difficulty = 'Easy';
  }

  newBoard(difficulty: Difficulty) {
    this.clearBoard();
    this.setDifficulty(difficulty);

    const randomBoard = boards[getRandomNum(0, boards.length - 1)];
    this.board = randomBoard.map((row) => [...row]);
    this.removeNumbers();

    return this.board;
  }

  setDifficulty(difficulty: string) {
    this.difficulty = difficulty as Difficulty;
  }

  private clearBoard() {
    this.board = Array(9).fill(Array(9).fill(''));
  }

  private getBoxesToRemove = () => {
    enum boxesToClear {
      Easy = 20,
      Medium = 40,
      Hard = 50,
    }

    // Clear a certain set of boxes based on the difficulty
    const boxesToRemove = boxesToClear[this.difficulty];
    return getRandomArrOfNums(boxesToRemove, 0, 80);
  };

  private removeNumbers() {
    let counter: number = 0;

    const boxesToClear = this.getBoxesToRemove();

    // Find the box we want to clear and set the value to empty string
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        if (boxesToClear.includes(counter)) {
          this.board[i][j] = '';
        }
        counter++;
      }
    }
  }
}

const intialState = { game: new GameClass() };
export const SudokuContext =
  React.createContext<SudokuContextType>(intialState);

const SudokuProvider = ({ children }: { children: ReactNode }) => {
  return (
    <SudokuContext.Provider value={{ game: new GameClass() }}>
      {children}
    </SudokuContext.Provider>
  );
};

export default SudokuProvider;
