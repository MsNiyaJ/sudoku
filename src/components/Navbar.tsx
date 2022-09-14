import { useState } from 'react';
import GameInstructions from './GameInstructions';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <h1 className="logo-title">Sudoku</h1>
        <div className="nav-links">
          <p className="nav-item" onClick={toggleModal}>
            How to Play
          </p>
          {open && <GameInstructions onClick={toggleModal} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
