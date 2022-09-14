import React from 'react';
import Modal from './Modal';

interface IGameInstructions {
  onClick: () => void;
}

const GameInstructions = ({ onClick }: IGameInstructions) => {
  return (
    <Modal>
      <h1 className="instructions-title blue-text">How to Play!</h1>
      <ol className="game-instructions">
        <li>A Sudoku grid consists of 9x9 spaces.</li>
        <li>You can use only numbers from 1 to 9.</li>
        <li>Each 3x3 block can only contain numbers from 1 to 9.</li>
        <li>Each vertical column can only contain numbers from 1 to 9.</li>
        <li>Each horizontal row can only contain numbers from 1 to 9.</li>
        <li>
          Each number in the 3x3 block, vertical column or horizontal row can be
          used only once.
        </li>
        <li>
          The game is over when the whole Sudoku grid is correctly filled with
          numbers.
        </li>
        <p>
          Learn more tips and tricks{' '}
          <a
            href="https://sudoku.com/sudoku-rules/"
            rel="noreferrer"
            target="_blank"
          >
            here
          </a>
          !
        </p>
      </ol>
      <button className="instructions-close-btn" onClick={onClick}>
        Got it!
      </button>
    </Modal>
  );
};

export default GameInstructions;
