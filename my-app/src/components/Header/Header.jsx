import logo from "../../assets/logo.svg";
import iconMenu from "../../assets/icon-menu.svg";
import NavbarMobile from "../NavbarMobile";
import { useState } from "react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="header">
      <a className="header-logo" href="#">
        <img className="header-logo-img" src={logo}></img>
      </a>
      <div className="header-content">
        <a className="header-desc" href="#">
          Home
        </a>
        <a className="header-desc" href="#">
          New
        </a>
        <a className="header-desc" href="#">
          Popular
        </a>
        <a className="header-desc" href="#">
          Trending
        </a>
        <a className="header-desc" href="#">
          Categories
        </a>
      </div>
      <button onClick={() => setOpen(true)} className="header-button-menu">
        <img className="header-logo-menu" src={iconMenu} alt="icon menu"></img>
      </button>
      <NavbarMobile
        isOpen={isOpen}
        onClose={() => setOpen(false)}
      ></NavbarMobile>
    </header>
  );
};

export default Header;
