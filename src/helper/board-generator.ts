import { Difficulty, Board } from '../types';
import { getRandomNum, getRandomArrOfNums } from './randomize';
import boards from '../boards';

const getBoxesToRemove = (difficulty: Difficulty) => {
  enum boxesToClear {
    Easy = 20,
    Medium = 40,
    Hard = 50,
  }

  // Clear a certain set of boxes based on the difficulty
  const boxesToRemove = boxesToClear[difficulty];
  return getRandomArrOfNums(boxesToRemove, 0, 80);
};

const removeNumbers = (difficulty: Difficulty, board: Board) => {
  let counter: number = 0;

  const boxesToClear = getBoxesToRemove(difficulty);

  // Find the box we want to clear and set the value to empty string
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (boxesToClear.includes(counter)) {
        board[i][j] = '';
      }
      counter++;
    }
  }
};

export const randomBoard = () => {
  return boards[getRandomNum(0, boards.length - 1)];
};

export const createBoard = (difficulty: Difficulty, randomBoard: Board) => {
  const board: Board = randomBoard.map((row) => [...row]);
  removeNumbers(difficulty, board);
  return board;
};
