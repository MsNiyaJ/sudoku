import React, { useEffect } from 'react';
import Box from './Box';
import boards from './boards';

// A two-dimensional array made up of Box components. 9x9 by default.
const rows: any = [];
for (let i = 0; i < 9; i++) {
  rows.push([]);
  for (let j = 0; j < 9; j++) {
    rows[i].push(<Box key={j} />);
  }
}

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

const Board = () => {
  // if the component is mounted, populate the board with the correct values
  useEffect(() => {
    populateBoard();
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
