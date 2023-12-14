import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <div>
        <img
          src={"https://i.etsystatic.com/22181001/r/il/b45856/2769871019/il_1140xN.2769871019_bvwh.jpg"}
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
