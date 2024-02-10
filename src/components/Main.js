import { useNavigate } from "react-router-dom";
import "./main.css";

function Main({ setIsMain, setIsExplore }) {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/explore");
    setIsExplore(true);
    setIsMain(false);
    console.log("explore")
  }
  return (
    <div className="row">
      <div className="col">
        <h1>Driven By Passion</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          tristique bibendum mi volutpat accumsan. Integer ac diam et ex
          hendrerit pretium ut a eros. Proin condimentum tortor non suscipit
          aliquam.{" "}
        </p>
        <button type="button" className="btn" onClick={navigateHandler}>
          Explore
        </button>
      </div>
    </div>
  );
}

export default Main;
