import React, { useEffect } from 'react';
import Box from './Box';
import boards from './boards';
import { randomNumList } from './helper/randomize';

// A two-dimensional array made up of Box components. 9x9 by default.
const rows: any = [];
for (let i = 0; i < 9; i++) {
  rows.push([]);
  for (let j = 0; j < 9; j++) {
    rows[i].push(<Box key={j} />);
  }
}

const setupBoard = () => {
  populateBoard();
  removeNumbers();
};

const populateBoard = () => {
  const rows = Array.from(document.querySelectorAll('.row'));

  // loop through each row
  for (let i = 0; i < rows.length; i++) {
    // loop through each box in the row
    const boxes = Array.from(rows[i].querySelectorAll('.box'));
    for (let j = 0; j < boxes.length; j++) {
      // set the value of the box
      boxes[j].innerHTML = `${boards[0].board1[i][j]}`;
    }
  }
};

// Remove numbers from the board based on the board's difficulty
const removeNumbers = () => {
  // Select all boxes on the board
  const boxes = Array.from(document.querySelectorAll('.box'));

  // Get the difficulty of the game
  const select = document.getElementById(
    'difficulty-select'
  ) as HTMLSelectElement;
  let difficulty = select.options[select.selectedIndex].value;

  let boxToClear: string | any[] = [];
  // If the difficulty is easy, remove 25 numbers
  if (difficulty === 'Easy') {
    boxToClear = randomNumList(25, 0, 80);
  }
  // If the difficulty is Medium, remove 40 numbers
  if (difficulty === 'Medium') {
    boxToClear = randomNumList(40, 0, 80);
  }
  // If the difficulty is Hard, remove 50 numbers
  if (difficulty === 'Hard') {
    boxToClear = randomNumList(50, 0, 80);
  }

  // For each box, remove number, make the text blue, and make content editable
  for (let i = 0; i < boxToClear.length; i++) {
    const j = boxToClear[i];
    boxes[j].innerHTML = '';
    boxes[j].setAttribute('contenteditable', 'true');
    boxes[j].classList.add('blue-text');
  }
};

const Board = () => {
  // if the component is mounted, populate the board with the correct values
  useEffect(() => {
    setupBoard();
  }, []);

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
