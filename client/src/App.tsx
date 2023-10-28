import { useState, useEffect } from 'react';
import './App.css'
import { ComputerGame } from './components/ComputerGame'
import { GameMode } from './components/GameMode'
import { Heading } from './components/Heading'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Score } from './components/Score'
import { ResultLoss, ResultWin } from './components/Result';

function App() {

  // const webSocket = new WebSocket('ws://localhost:443/');
  //   webSocket.onmessage = (event) => {
  //     console.log(event)
  //   webSocket.addEventListener("open", () => {
  //     console.log("We are connected");
  //   });
  // }

  const [ws, setWs] = useState(new WebSocket('ws://localhost:443/'));

  function connectwebSocket() {
    ws.onmessage = (event) => {
      console.log(event)
      console.log("ws connected");
      
  }
  }
  useEffect(() => {
    connectwebSocket();
  }, [])

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

  return (
    <>
      
      
      <BrowserRouter>
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
