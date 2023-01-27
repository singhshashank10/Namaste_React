import { useState } from "react";

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
          <li>HOME</li>
          <li>CONTACT</li>
          <li>ANOUT US</li>
          <li>CART</li>
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
