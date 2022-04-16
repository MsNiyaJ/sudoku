import {useState} from 'react';
import Navbar from './components/Navbar';
import ActionBar from './components/ActionBar';
import Board from './components/Board';
import './global.css';

function App() {

  const [difficulty, setDifficulty] = useState('Easy');

  return (
    <>
      <Navbar />
      <ActionBar setDifficulty={setDifficulty} />
      <Board difficulty={difficulty} />
    </>
  );
}

export default App;
