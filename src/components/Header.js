import { useState } from "react";
import { Link } from "react-router-dom";
const Title = () => {
  return (
    <a href="/">
      <img
        alt="LOGO"
        src="https://yt3.googleusercontent.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
      ></img>
    </a>
  );
};

const Header = () => {
  const [logedIn, setLogedIn] = useState(true);
  return (
    <div className="header">
      <Title />
      <div className="navBar">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
          <li>
            <Link to="/about">ABOUT US</Link>
          </li>
          <li>
            <Link to="/">CART</Link>
          </li>
        </ul>
      </div>
      <div>
        {logedIn ? (
          <button onClick={() => setLogedIn(false)}>Log In</button>
        ) : (
          <button onClick={() => setLogedIn(true)}>Log Out</button>
        )}
      </div>
    </div>
  );
};

export default Header;
