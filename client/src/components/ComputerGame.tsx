import React, { useEffect } from "react";
import { useState } from "react";
import rockpng from "../assets/rock.png";
import paperpng from "../assets/paper.png";
import scissorspng from "../assets/scissors.png";
import { useNavigate } from "react-router-dom";


interface ComputerGameProps {
  Choice: {
    player: number;
    computer: number;
  };
  setChoice: React.Dispatch<
    React.SetStateAction<{
      player: number;
      computer: number;
    }>
  >;
  setScore: React.Dispatch<
    React.SetStateAction<{
      player: number;
      computer: number;
    }>
  >;
  score: {
    player: number;
    computer: number;
  };

}


export const ComputerGame: React.FC<ComputerGameProps> = ({
  Choice,
  setChoice,
  score,
  setScore,
}: ComputerGameProps) => {

  const [isplayed, setIsPlayed] = useState(false);
  const [result, setResult] = useState("");

  const handlePlayerChoice = (choice: number) => {

    setChoice({player: choice, computer: Math.floor(Math.random() * 3) + 1})
    setIsPlayed(true);
  };
  const navigate = useNavigate();

  useEffect(() => {
    if(Choice.player != 0){
      if(Choice.player === Choice.computer){
        setResult("Draw")
        return;
      }

      if(Choice.player === 1 && Choice.computer === 3 ||
        Choice.player === 2 && Choice.computer === 1 ||
        Choice.player === 3 && Choice.computer === 2
      ){
        setResult("You Win")
        setScore((prev) => {
          return {
            ...prev,
            computer: prev.computer - 1,
          };
        });
        return;
      }else{
        setResult("You Lose")
        setScore((prev) => {
          return {
            ...prev,
            player: prev.player - 1,
          };
        });
        return;
      }
    }
  }, [Choice]);

  useEffect(() => {
    if(score.player === 0 ){
      navigate("/computer/loss")
    }
    if(score.computer === 0 ){
      navigate("/computer/win")
    }
  }, [score.player, score.computer])

  const ShowResult = () => (
    <>
      <div className="result">
        {/* <div className="box"> */}

        <div className="result_box">
          <h2 className="result_title">You Picked</h2>
          <div className="result_imgbox">

          <img
            src={
              Choice.player === 1
              ? rockpng
              : Choice.player === 2
              ? paperpng
              : scissorspng
            }
            alt="rock"
            className="result_img"
            />
            </div>
        </div>
        <div className="restart">
          <h2>{result && result}</h2>
          <button onClick={() => setIsPlayed(false)}>Play again</button>
        </div>
        <div className="result_box">
          <h2 className="result_title">Computer</h2>
          <div className="result_imgbox">

          <img
            src={
              Choice.computer === 1
              ? rockpng
              : Choice.computer === 2
              ? paperpng
              : scissorspng
            }
              alt="rock"
              className="result_img"
              />
              </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      {
        isplayed ? <ShowResult /> : (
      <div className="gamemode">
        <button className="gamemode_box" onClick={() => handlePlayerChoice(1)}>
          <img src={rockpng} alt="rock" className="gamemode_img" />
          <h2 className="gamemode_title">Rock</h2>
        </button>
        <button className="gamemode_box" onClick={() => handlePlayerChoice(2)}>
          <img src={paperpng} alt="paper" className="gamemode_img" />
          <h2 className="gamemode_title">Paper</h2>
        </button>
        <button className="gamemode_box" onClick={() => handlePlayerChoice(3)}>
          <img src={scissorspng} alt="scissors" className="gamemode_img" />
          <h2 className="gamemode_title">Scissors</h2>
        </button>
      </div>)
      }
    </>
  );
};

