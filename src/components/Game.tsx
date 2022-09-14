import Row from './Row';
import Box from './Box';
import { useContext, useEffect, useState } from 'react';
import { SudokuContext } from '../context/sudokuContext';
import { createBoard } from '../helper/board-generator';

const Game = () => {
  const { difficulty, winningBoard } = useContext(SudokuContext);
  const [board, setBoard] = useState(createBoard(difficulty, winningBoard));

  useEffect(() => {
    const board = createBoard(difficulty, winningBoard);
    setBoard(board);
  }, [difficulty, winningBoard]);

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
