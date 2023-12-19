import ArroWBack from "../../assets/icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";
import "./WareHouseAdd.scss";

function WareHouseAdd() {
  return (
    <main className="addWarehouse">
      <div className="addWarehouse__headers">
        <Link to="/">
          <img
            src={ArroWBack}
            alt="Go Back"
            className="warehouseDetails__header-arrowback"
          />
        </Link>
        <h1 className="addWarehouse__headers-title">Add New Warehouse</h1>
      </div>
      <form className="addWarehouse__form">
        <div className="addWarehouse__form-warehouseDetails">
          <h2 className="addWarehouse__form-header">Warehouse Details</h2>
          <article className="addWarehouse__form-warehouseName">
            <label className="p-medium">Warehouse Name</label>
            <input
              className="addWarehouse__form-warehouse_nameInp"
              placeholder="Warehouse Name"
            />
          </article>
          <article className="addWarehouse__form-streetAddress">
            <label className="p-medium">Street Address</label>
            <input
              className="addWarehouse__form-warehouse_streetaddressInp"
              placeholder="Street Address"
            />
          </article>
          <article className="addWarehouse__form-city">
            <label className="p-medium">City</label>
            <input
              className="addWarehouse__form-warehouse_cityInp"
              placeholder="City"
            />
          </article>
          <article className="addWarehouse__form-country">
            <label className="p-medium">Country</label>
            <input
              className="addWarehouse__form-warehouse_countryInp"
              placeholder="Country"
            />
          </article>
        </div>
        <div className="addWarehouse__form-contactDetails">
          <h2 className="addWarehouse__form-header">Contact Details</h2>
          <article className="addWarehouse__form-contactName">
            <label className="p-medium">Contact Name</label>
            <input
              className="addWarehouse__form-warehouse_contactNameInp"
              placeholder="Contact Name"
            />
          </article>
          <article className="addWarehouse__form-position">
            <label className="p-medium">Position</label>
            <input
              className="addWarehouse__form-warehouse_positionInp"
              placeholder="position"
            />
          </article>
          <article className="addWarehouse__form-phoneNum">
            <label className="p-medium">Phone Number</label>
            <input
              className="addWarehouse__form-warehouse_cityInp"
              placeholder="City"
            />
          </article>
          <article className="addWarehouse__form-email">
            <label className="p-medium">Email</label>
            <input
              className="addWarehouse__form-warehouse_emailInp"
              placeholder="Email"
            />
          </article>
        </div>
        <div className="addWarehouse__form-buttons">
          <button>Cancel</button>
          <button>Add WareHouse</button>
        </div>
      </form>
    </main>
  );
}

export default WareHouseAdd;
