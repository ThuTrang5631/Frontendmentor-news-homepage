import IconCloseMenu from "../../assets/icon-menu-close.svg";

const NavbarMobile = ({ onClose, isOpen }) => (
  <>
    {isOpen && (
      <div className="Navbar-backdrop" onClick={onClose}>
        <div className="NavbarMobile">
          <button onClick={onClose} className="NavbarMobile-button">
            <img src={IconCloseMenu} alt="icon-close-menu"></img>
          </button>
          <div className="NavbarMobile-wrap-link">
            <a className="NavbarMobile-link" href="#">
              Home
            </a>
            <a className="NavbarMobile-link" href="#">
              New
            </a>
            <a className="NavbarMobile-link" href="#">
              Popular
            </a>
            <a className="NavbarMobile-link" href="#">
              Trending
            </a>
            <a className="NavbarMobile-link" href="#">
              Categories
            </a>
          </div>
        </div>
      </div>
    )}
  </>
);

export default NavbarMobile;
