import React from 'react';
import Box from './Box';

// A two-dimensional array made up of Box components. 9x9 by default.
const boxes: any = [];
for (let i = 0; i < 9; i++) {
  boxes.push([]);
  for (let j = 0; j < 9; j++) {
    boxes[i].push(<Box />);
  }
}

console.log(boxes);

const Board = () => {
  return (
    <div className="board-container">
      <div className="board">
        {boxes.map((row: any, i: number) => {
          return (
            <div className="row" key={i}>
              {row.map((box: any, j: number) => {
                return (
                  <div className="box" key={j}>
                    {box}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Board;
