import React, {useState} from 'react';
import Navbar from './Navbar';
import ActionBar from './ActionBar';
import Board from './Board';
import './App.css';

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
