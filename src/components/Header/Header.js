import brandLogo1 from "../../assets/logos/InStock-Logo_1x.png";
import brandLogo2 from "../../assets/logos/InStock-Logo_2x.png";

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
          <a href="/" className="header-links-container__link">
            Warehouse
          </a>
          <a href="/" className="header-links-container__link">
            Inventory
          </a>
        </nav>
      </div>
    </div>
  );
};
export default Header;
