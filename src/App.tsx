import Navbar from './components/Navbar';
import ActionBar from './components/ActionBar';
import Board from './components/Board';
import SudokuProvider from './context/sudokuContext';
import './global.css';

function App() {
  return (
    <SudokuProvider>
      <Navbar />
      <ActionBar />
      <Board />
    </SudokuProvider>
  );
}

export default App;
