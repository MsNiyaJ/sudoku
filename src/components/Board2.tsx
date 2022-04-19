import { useEffect, useState } from 'react';
import Row from './Row';
import Box from './Box';
import boards from '../boards';
import { getRandomNum, getRandomArrOfNums } from '../helper/randomize';

interface BoardProps {
  difficulty: string;
}

const removeNumbers = (
  board: (string | number)[][],
  difficulty: string = 'Easy'
): (string | number)[][] => {
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

  return newBoard;
};

// Make a 9x9 board
const createBoard = (difficulty: string): (string | number)[][] => {
  // Randomly select a board from the boards array
  const randomBoardIndex = getRandomNum(0, boards.length - 1);
  const boardToUse = [...boards[randomBoardIndex]];
  console.log('Board to use: ', boardToUse);

  // Remove numbers from the board
  const boardWithRemovedNumbers = removeNumbers(boardToUse, difficulty);

  return boardWithRemovedNumbers;
};

const Board2: React.FC<BoardProps> = ({ difficulty = 'Easy' }) => {
  const [board, setBoard] = useState(Array(9).fill(Array(9).fill('')));

  useEffect(() => {
    const newBoard = createBoard(difficulty);
    console.log('newBoard', newBoard);

    setBoard(createBoard(difficulty));
  }, [difficulty]);

  // console.log('board', board);

  return (
    <div className="board-container">
      <div className="board">
        {board.map((row: (string | number)[], i: number) => (
          <Row key={i}>
            {row.map((value: number | string, j: number) => (
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

export default Board2;
