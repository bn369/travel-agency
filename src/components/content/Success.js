import { useNavigate } from "react-router-dom";
import "./success.css";
import success from "../../assets/icons/check.png";
import fox from "../../assets/icons/fox.png";

function Success( { setIsMain, setIsSuccess, setIsForm, setIsExplore }) {
  const navigate = useNavigate();

  function finishHandler() {
    navigate("/");
    setIsMain(true);
    setIsExplore(false);
    setIsForm(false);
    setIsSuccess(false);
  }

  return (
    <div className="success-wrapper">
      <div className="small-container">
        <img src={success} alt="success-img" />
        <h1>Success!</h1>
      </div>
      <img src={fox} alt="fox-img" style={{ width: "180px"}}/>
      <h2>Now just relax and wait for our offer!</h2>
      <button onClick={finishHandler}>Alright</button>
    </div>
  )
}

export default Success;