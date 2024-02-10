import "./navbar.css";
import logo from "../assets/images/sun.png";
import { useNavigate } from "react-router-dom";

function Navbar( { setIsMain, setIsExplore, setIsForm, isSuccess, setIsSuccess, aboutRef, customersRef }) {
  const navigate = useNavigate();
  const handleNavClick = (sectionRef) => {
    if (sectionRef && sectionRef.current) {
    sectionRef.current.scrollIntoView({ behavior: "smooth"})
    }
  };

  function goToMainHandler() {
    navigate("/");
    setIsExplore(false);
    setIsForm(false);
    setIsSuccess(false);
    setIsMain(true);
  }
  return (
    <div className={!isSuccess ? "navbar" : "navbar-dark"}>
      <div className="logo-1" onClick={goToMainHandler}>
        <img src={logo} alt="logo" className="logo"/>
        <h2>SUNLET</h2>
      </div>
      <nav>
        <ul>
          <li>HOME</li>
          <li onClick={() => handleNavClick(customersRef)}>CUSTOMERS</li>
          <li onClick={() => handleNavClick(aboutRef)}>ABOUT</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
