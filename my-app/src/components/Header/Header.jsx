import logo from "../../assets/logo.svg";
import iconMenu from "../../assets/icon-menu.svg";

const Header = () => {
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
      <img className="header-logo-menu" src={iconMenu} alt="icon menu"></img>
    </header>
  );
};

export default Header;
