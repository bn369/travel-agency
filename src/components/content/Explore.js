import { useNavigate } from "react-router-dom";
import EXPLORE_DATA from "../../data-explore";
import "./explore.css";

function Explore({ setIsMain, setIsExplore, setIsForm }) {
  const navigate = useNavigate();

  function startHandler() {
    navigate("/form");
    setIsExplore(false);
    setIsMain(false);
    setIsForm(true);
  }

  return (
      <div className="main-explore-wrapper">
        <div>
          <h1>How does it work?</h1>
        </div>
        <div className="explore-wrapper">
          {EXPLORE_DATA.map((item, i) => (
            <div key={i} className="explore-container">
              <div className="title">
                <h2>
                  <img src={item.number_img} alt="1" />
                  {item.title}
                </h2>
              </div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <button onClick={startHandler}>Start</button>
      </div>
  );
}

export default Explore;
