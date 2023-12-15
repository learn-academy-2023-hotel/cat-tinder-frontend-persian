import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <div>
        <img
          src={"https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/c3f48770-f720-4b19-42e2-557269dc6700/preview"}
          alt="Picture of cat"
          className='logo'
        />
      </div>
      <div className="desktopMenu">
        <Link className="desktopMenuList" to="/">Home</Link>
        <Link className="desktopMenuList" to="/catindex">Meet the cats</Link>
        <Link className="desktopMenuList" to="/catnew">New account</Link>
      </div>
    </nav>
  );
}

export default Header;
