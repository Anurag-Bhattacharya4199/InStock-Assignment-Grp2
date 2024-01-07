import brandLogo1 from "../../assets/logos/InStock-Logo_1x.png";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.scss";
const Header = () => {
  let location = useLocation();

  const getActiveWarehouseClass = () => {
    // ACTIVE WAREHOUSE CLASS
    if (location.pathname === "/") {
      return "active-warehouse";
    }
    // ACTIVE WAREHOUSE CLASS
    if (location.pathname.split("/").includes("warehouses")) {
      return "active-warehouse";
    }
  };

  const getActiveInventoryClass = () => {
    // ACTIVE INVENTORY CLASS
    if (location.pathname.split("/").includes("inventories")) {
      return "active-inventory";
    }
  };

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
          <NavLink
            to="/"
            className={` ${getActiveWarehouseClass()}
            header-links-container__link`}
          >
            warehouse
          </NavLink>
          <NavLink
            to="/inventories"
            className={` ${getActiveInventoryClass()}   header-links-container__link`}
          >
            Inventory
          </NavLink>
        </nav>
      </div>
    </div>
  );
};
export default Header;
