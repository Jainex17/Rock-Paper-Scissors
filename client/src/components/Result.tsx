import { useNavigate } from "react-router-dom";


export const ResultWin = () => {
  
    const navigate = useNavigate();

  return <div className="result_win">
    <h1>You Win 🔥</h1>
    <div className="restart">
    <button onClick={()=> navigate("/")}>Play Again</button>
    </div>
  </div>;
};
export const ResultLoss = () => {
    
    const navigate = useNavigate();

  return <div className="result_loss">
    <h1>You Lose 🤣</h1>
    <div className="restart">
    <button onClick={()=> navigate("/")}>Play Again</button>
    </div>
  </div>;
};
