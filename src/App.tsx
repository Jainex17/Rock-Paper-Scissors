import { useState, useEffect } from 'react';
import './App.css'
import { ComputerGame } from './components/ComputerGame'
import { GameMode } from './components/GameMode'
import { Heading } from './components/Heading'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Score } from './components/Score'

function App() {

  const [score, setScore] = useState({
    player: 0,
    computer: 0
  });

  const [Choice, setChoice] = useState({
    player: 0,
    computer: 0
  });

  useEffect(() => {
    
  }, [Choice])
  
  return (
    <>
      <Heading />
      
      <BrowserRouter>
        <Routes>
          <Route path="/gamemode" element={<GameMode />} />
          <Route path="/" element={<>
            <ComputerGame Choice={Choice} setChoice={setChoice} setScore={setScore} />
            <Score score={score} />
          </>} />
        </Routes>
      </BrowserRouter>  
    </>
  )
}

export default App
