import React from "react";

interface ScoreProps {
  score: {
    player: number;
    computer: number;
  };
}

export const Score: React.FC<ScoreProps> = ({score}:ScoreProps) => {

return <div className="score">
    <h2 className="score_title">Score</h2>

    <div className="box">

    <div className="score_box">
      <h3 className="score_box-title">You</h3>
      <p className="score_box-score">{score?.player}</p>
    </div>
    <div className="score_box">
      <h3 className="score_box-title">Computer</h3>
      <p className="score_box-score">{score?.computer}</p>
    </div>
    </div>
  </div>;
};
