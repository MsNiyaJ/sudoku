import { useEffect } from 'react';
import Box from './Box';
import boards from '../boards';
import { getRandomArrOfNums } from '../helper/randomize';

// A two-dimensional array made up of Box components. 9x9 by default.
const rows: JSX.Element[][] = [];
for (let i = 0; i < 9; i++) {
  rows.push([]);
  for (let j = 0; j < 9; j++) {
    rows[i].push(<Box key={j} />);
  }
}

// Reset the board to its original state
const resetBoard = () => {
  const boxes = Array.from(document.querySelectorAll('.box'));

  // For each box, set the value to empty string, remove the blue text class, and set content editable to false
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = '';
    boxes[i].classList.remove('blue-text');
    boxes[i].setAttribute('contenteditable', 'false');
  }
};

// Populate the board with numbers
const populateBoard = () => {
  const rows = Array.from(document.querySelectorAll('.row'));
  // loop through each row
  for (let i = 0; i < rows.length; i++) {
    // loop through each box in the row
    const boxes = Array.from(rows[i].querySelectorAll('.box'));
    for (let j = 0; j < boxes.length; j++) {
      // set the value of the box
      boxes[j].innerHTML = `${boards[0][i][j]}`;
    }
  }
};

// Remove numbers from the board based on the board's difficulty
const removeNumbers = (difficulty: string) => {
  // Select all boxes on the board
  const boxes = Array.from(document.querySelectorAll('.box'));

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

  // For each box, remove number, make the text blue, and make content editable
  for (let i = 0; i < boxesToClear.length; i++) {
    const j = boxesToClear[i];
    boxes[j].innerHTML = '';
    boxes[j].setAttribute('contenteditable', 'true');
    boxes[j].classList.add('blue-text');
  }
};
const Board = ({ difficulty = 'Easy' }: { difficulty: string }) => {
  // When the component is mounted, set up the board
  useEffect(() => {
    resetBoard();
    populateBoard();
    removeNumbers(difficulty);
  }, [difficulty]);

  return (
    <div className="board-container">
      <div className="board">
        {/* Each row should display 9 boxes (9x9) */}
        {rows.map((row: any, i: number) => {
          return (
            <div key={i} className="row">
              {row.map((box: any) => box)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Board;
