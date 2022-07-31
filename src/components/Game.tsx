import { useContext } from 'react';
import Row from './Row';
import Box from './Box';
import boards from '../boards';
import { getRandomNum, getRandomArrOfNums } from '../helper/randomize';
import { SudokuContextType } from '../types';
import { SudokuContext } from '../context/sudokuContext';

class Board {
  board: (string | number)[][];
  timer: number;

  constructor(difficulty: string) {
    this.board = this.createBoard(difficulty);
    this.timer = 0;
  }

  createBoard = (difficulty: string) => {
    const randomBoard = this.getRandomBoard();

    // Copy the board to prevent altering the original
    const newBoard: (string | number)[][] = randomBoard.map((row) => [...row]);
    this.removeNumbers(newBoard, difficulty);

    return newBoard;
  };

  private getRandomBoard = (): number[][] => {
    return boards[getRandomNum(0, boards.length - 1)];
  };

  private removeNumbers = (
    board: (string | number)[][],
    difficulty: string = 'Easy'
  ) => {
    const newBoard: (string | number)[][] = [...board];

    let boxesToClear: number[] = [];
    // If the difficulty is easy, remove 25 numbers
    if (difficulty === 'Easy') {
      boxesToClear = getRandomArrOfNums(25, 0, 80);
    }
    // If the difficulty is Medium, remove 40 numbers
    if (difficulty === 'Medium') {
      boxesToClear = getRandomArrOfNums(40, 0, 80);
    }
    // If the difficulty is Hard, remove 50 numbers
    if (difficulty === 'Hard') {
      boxesToClear = getRandomArrOfNums(50, 0, 80);
    }

    // A counter to keep track of what index we are on
    let counter: number = 0;

    // Find the box we want to clear and set the value to empty string
    for (let i = 0; i < newBoard.length; i++) {
      for (let j = 0; j < newBoard[i].length; j++) {
        if (boxesToClear.includes(counter)) {
          newBoard[i][j] = '';
        }
        counter++;
      }
    }
  };
}

const Game = () => {
  const { difficulty } = useContext(SudokuContext) as SudokuContextType;

  const newBoard = new Board(difficulty);
  const { board } = newBoard;

  return (
    <div className="board-container">
      <div className="board">
        {board.map((row, i) => (
          <Row key={i}>
            {row.map((value, j) => (
              <Box
                key={j}
                value={value}
                disabled={value === '' ? false : true}
              />
            ))}
          </Row>
        ))}
      </div>
    </div>
  );
};

export default Game;
