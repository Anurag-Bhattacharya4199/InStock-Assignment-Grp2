import brandLogo1 from "../../assets/logos/InStock-Logo_1x.png";
import { NavLink } from "react-router-dom";
import "./Header.scss";
const Header = () => {
  return (
    <div className="header">
      <div className="header__content">
        <div className="header-logo-container">
          <img
            className="header-logo-container__logo"
            src={brandLogo1}
            alt="instock-logo"
          />
        </div>
        <nav className="header-links-container">
          <NavLink to="/" className="header-links-container__link">
            warehouse
          </NavLink>
          <NavLink to="/inventories" className="header-links-container__link">
            Inventory
          </NavLink>
        </nav>
      </div>
    </div>
  );
};
export default Header;
