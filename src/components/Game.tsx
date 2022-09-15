/* eslint-disable no-restricted-globals */
import Row from './Row';
import Box from './Box';
import { useContext, useEffect, useState } from 'react';
import { SudokuContext } from '../context/sudokuContext';
import { createBoard } from '../helper/board-generator';
import WinnerScreen from './WinnerScreen';

const Game = () => {
  const { difficulty, winningBoard } = useContext(SudokuContext);
  const [board, setBoard] = useState(createBoard(difficulty, winningBoard));
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const board = createBoard(difficulty, winningBoard);
    setBoard(board);
  }, [difficulty, winningBoard]);

  const checkForWin = () => {
    const boxes: HTMLInputElement[] = Array.from(
      document.querySelectorAll('.box')
    );

    const answers = winningBoard.join().split(',').toString();
    const usersBoard = boxes.map((box) => box.value).toString();

    if (answers === usersBoard) setOpen(true);
  };

  return (
    <div className="board-container">
      {open && <WinnerScreen open={open} setOpen={setOpen} />}
      <div className="board">
        {board.map((row, rowIndex) => (
          <Row key={rowIndex}>
            {row.map((box, boxIndex) => (
              <Box
                key={boxIndex}
                value={box}
                answer={winningBoard[rowIndex][boxIndex]}
                disabled={box === '' ? false : true}
                checkForWin={checkForWin}
              />
            ))}
          </Row>
        ))}
      </div>
    </div>
  );
};

export default Game;
