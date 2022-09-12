import Row from './Row';
import Box from './Box';
import boards from '../boards';
import { Board, Difficulty } from '../types';
import { getRandomNum, getRandomArrOfNums } from '../helper/randomize';
import { useContext, useEffect, useState } from 'react';
import { SudokuContext } from '../context/sudokuContext';

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

const newBoard = (difficulty: Difficulty, randomBoard: Board) => {
  const board: Board = randomBoard.map((row) => [...row]);
  removeNumbers(difficulty, board);
  return board;
};

const Game = () => {
  const [winningBoard, setWinningBoard] = useState<Board>(
    Array(9).fill(Array(9).fill(''))
  );
  const [board, setBoard] = useState<Board>(Array(9).fill(Array(9).fill('')));
  const { difficulty } = useContext(SudokuContext);

  useEffect(() => {
    const randomBoard = boards[getRandomNum(0, boards.length - 1)];
    setWinningBoard(randomBoard);
    const board = newBoard(difficulty, randomBoard);
    setBoard(board);
  }, [difficulty]);

  return (
    <div className="board-container">
      <div className="board">
        {board.map((row, rowIndex) => (
          <Row key={rowIndex}>
            {row.map((box, boxIndex) => (
              <Box
                key={boxIndex}
                value={box}
                answer={winningBoard[rowIndex][boxIndex]}
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
