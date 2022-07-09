import { useState } from 'react';
import Navbar from './components/Navbar';
import ActionBar from './components/ActionBar';
// import Board from './components/Board';
import Board2 from './components/Board2';
import SudokuProvider from './context/sudokuContext';
import './global.css';

function App() {
  const [difficulty] = useState('Easy');

  return (
    <SudokuProvider>
      <Navbar />
      <ActionBar />
      {/* <Board difficulty={difficulty} /> */}
      <Board2 difficulty={difficulty} />
    </SudokuProvider>
  );
}

export default App;
