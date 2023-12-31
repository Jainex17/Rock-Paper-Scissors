import { useNavigate } from "react-router-dom";

export const GameMode = () => {
  const navigate = useNavigate();

return <div className="gamemode">
    <button className="gamemode_box" onClick={()=> navigate("/computer")}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#192446" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>

        <h2 className="gamemode_title">Computer</h2>
    </button>
  </div>;
};
