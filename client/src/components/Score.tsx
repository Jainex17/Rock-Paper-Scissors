import React from "react";
import userpng from "../assets/user.png";
import starpoint from "../assets/star_point.png";
import starnopoint from "../assets/star_nopoint.png";

interface ScoreProps {
  score: {
    player: number;
    computer: number;
  };
}

export const Score: React.FC<ScoreProps> = ({ score }: ScoreProps) => {
console.log(score);

  return <div className="score">
    <div className="score_player">
      <div className="score_player_img">
        <img src={userpng} alt="user" />
      </div>
      <div className="score_player_details">
        <h3>You</h3>
        <div className="score_player_details_points">
          <img src={score.player <= 0 ? starnopoint : starpoint} alt="star" />
          <img src={score.player <= 1 ? starnopoint : starpoint} alt="star" />
          <img src={score.player <= 2 ? starnopoint : starpoint} alt="star" />
        </div>
      </div>
    </div>

    <div className="score_player">
    <div className="score_player_details">
        <h3>Computer</h3>

        <div className="score_player_details_points">
          <img src={score.computer <= 0 ? starnopoint : starpoint} alt="star" />
          <img src={score.computer <= 1 ? starnopoint : starpoint} alt="star" />
          <img src={score.computer <= 2 ? starnopoint : starpoint} alt="star" />
        </div>
      </div>
      <div className="score_player_img">
        <img src={userpng} alt="user" />
      </div>
    </div>
  </div>
};
