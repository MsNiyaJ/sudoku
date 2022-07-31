import Navbar from './components/Navbar';
import ActionBar from './components/ActionBar';
import Game from './components/Game';
import SudokuProvider from './context/sudokuContext';
import './global.css';

function App() {
  return (
    <SudokuProvider>
      <Navbar />
      <ActionBar />
      <Game />
    </SudokuProvider>
  );
}

export default App;
