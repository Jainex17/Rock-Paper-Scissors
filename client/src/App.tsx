import { useState, useEffect } from 'react';
import './App.css'
import { ComputerGame } from './components/ComputerGame'
import { GameMode } from './components/GameMode'
import { Heading } from './components/Heading'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Score } from './components/Score'
import { ResultLoss, ResultWin } from './components/Result';

import io from 'socket.io-client';
const socket = io('https://backend-rps.vercel.app/');

function App() {

  const [score, setScore] = useState({
    player: 3,
    computer: 3
  });

  const [Choice, setChoice] = useState({
    player: 0,
    computer: 0
  });

  useEffect(() => {
    if(score.player === 0 || score.computer === 0){
      setScore({
        player: 3,
        computer: 3
      })
      setChoice({
        player: 0,
        computer: 0
      })
      
    }
  }, [score])

  function btnhandler(){
    socket.emit('SendMessage', {message: 'hello world'});
  }

  useEffect(() => {
    socket.on('ReceiveMessage', (message) => {
      alert(message.message);
    })
  } ,[socket])

  return (
    <>
      <BrowserRouter>
        <button onClick={btnhandler}>test</button>
        <Routes>
          <Route path="/" element={<>
            <Heading />
            <GameMode />
          </>
          } />
          
          <Route path="/computer" element={<>
            <Heading />
            
            <Score score={score} />
          <ComputerGame Choice={Choice} setChoice={setChoice} score={score} setScore={setScore} />
          </>} />

          <Route path="/computer/win" element={<>
            <Heading />
            <ResultWin />
          </>} />

          <Route path="/computer/loss" element={<>
            <Heading />
            <ResultLoss />
          </>} />
        </Routes>
      </BrowserRouter>  
    </>
  )
}

export default App
