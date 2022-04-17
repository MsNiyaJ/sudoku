import React, { useEffect } from 'react';
import Row from './Row';
import Box from './Box';
import boards from '../boards';
import { getRandomArrOfNums } from '../helper/randomize';

interface BoardProps {
  difficulty: string;
}

const Board2 = ({ difficulty = 'Easy' }: BoardProps) => {
  // Make a 9x9 board
  const createBoard = (): JSX.Element[][] => {
    const board: JSX.Element[][] = [];

    // Adding nine rows to the board
    for (let i = 0; i < 9; i++) {
      let j = 0;
      board.push([
        <Row key={i}>
          {/* Adding nine boxes to each row */}
          {Array(9)
            .fill(undefined)
            .map(() => {
              return (
                <Box key={j} value={boards[0].board1[i][j++].toString()} />
              );
            })}
        </Row>,
      ]);
    }

    return board;
  };

  return (
    <div className="board-container">
      <div className="board">{createBoard()}</div>
    </div>
  );
};

export default Board2;
