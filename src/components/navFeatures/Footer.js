import "./footer.css";
import facebook from "./../../assets/icons/facebook.png";
import instagram from "./../../assets/icons/instagram.png";
import twitter from "./../../assets/icons/twitter.png";

function Footer() {

  function mediaHandler() {
    // here goes simple logic redirecting user to social media
    alert("Social Media under development! Sorry!")
  }

  return (
    <div className="footer">
      <div>
        <h2>Sunlet Company Copenhagen ©</h2>
      </div>
      <div>
        <p>COPENHAGEN</p>
        <p>sunlet.copenhagen@sln.eu</p>
        <p>+45 52-74-88-78</p>
        <p>Langeskov-Centret 49</p>
        <p>Copenhagen, Denmark</p>
      </div>
      <div>
        <p>VIENNA</p>
        <p>sunlet.vienna@sln.eu</p>
        <p>+33 67-25-22-92</p>
        <p>Dr.-Adolf-Lorenz-Schule, 8, Kanitzgasse</p>
        <p>Vienna, Austria</p>
      </div>
      <div className="media"> 
          <p>media</p>
          <img alt="twitter" src={twitter} onClick={mediaHandler}/>
          <img alt="instagram" src={instagram} onClick={mediaHandler}/>
          <img alt="facebook" src={facebook} onClick={mediaHandler}/>
      </div>
    </div>
  )
}

export default Footer;