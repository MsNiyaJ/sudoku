import { useContext, useEffect } from 'react';
import Row from './Row';
import Box from './Box';
import { Board, Difficulty, SudokuContextType } from '../types';
import { SudokuContext } from '../context/sudokuContext';
import { getRandomArrOfNums, getRandomNum } from '../helper/randomize';
import boards from '../boards';

class GameBoard {
  board: Board;
  difficulty: Difficulty;

  constructor() {
    this.board = Array(9).fill(Array(9).fill(''));
    this.difficulty = 'Easy';
  }

  newBoard(difficulty: Difficulty) {
    const randomBoard = boards[getRandomNum(0, boards.length - 1)];
    this.setDifficulty(difficulty);
    this.clearBoard();
    this.board = randomBoard.map((row) => [...row]);
    this.removeNumbers();

    return this.board;
  }
  private setDifficulty(difficulty: string) {
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

const Game = () => {
  const { board, difficulty, setBoard } = useContext(
    SudokuContext
  ) as SudokuContextType;

  useEffect(() => {
    setBoard(new GameBoard().newBoard(difficulty));
  }, [difficulty, setBoard]);

  return (
    <div className="board-container">
      <div className="board">
        {board.map((row, rowIndex) => (
          <Row key={rowIndex}>
            {row.map((box, boxIndex) => (
              <Box
                key={boxIndex}
                value={box}
                disabled={box === '' ? false : true}
              />
            ))}
          </Row>
        ))}
      </div>
    </div>
  );
};

export default Game;
