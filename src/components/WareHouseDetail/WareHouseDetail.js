import "./WareHouseDetail.scss";
import ArroWBack from "../../assets/icons/arrow_back-24px.svg";
import EditButton from "../../assets/icons/edit-24px.svg";
import InventoryList from "../InventoryList/InventoryList";
import { Link } from "react-router-dom";

function WareHouseDetail(props) {
  console.log(props);
  return (
    <main className="warehouseDetails">
      <section className="warehouseDetails__header">
        <div className="warehouseDetails__header-info">
          <Link to="/">
            <img
              src={ArroWBack}
              alt="Go Back"
              className="warehouseDetails__header-arrowback"
            />
          </Link>
          <h2 className="warehouseDetails__header-title">Washington</h2>
        </div>
        <Link
          to={`/warehouses/:id/edit`}
          className="warehouseDetails__header-edit"
        >
          <img
            src={EditButton}
            className="warehouseDetails__header-editImg"
            alt="Edit Warehouse"
          />
          <span className="warehouseDetails__header-editTxt">Edit</span>
        </Link>
      </section>
      <section className="warehouseDetails__info">
        <div className="warehouseDetails__info-address">
          <h4 className="warehouseDetails__info-headers">Warehouse Address:</h4>
          <p className="p-medium">300 Pearl Street SW, Washington, USA</p>
        </div>
        <div className="warehouseDetails__info-contact">
          <div className="warehouseDetails__info-column warehouseDetails__info-column--left">
            <h4 className="warehouseDetails__info-headers">CONTACT NAME:</h4>
            <p className="p-medium">Graeme Lyon</p>
            <p className="p-medium">Warehouse Manager</p>
          </div>
          <div className="warehouseDetails__info-column warehouseDetails__info-column--right">
            <h4 className="warehouseDetails__info-headers">
              CONTACT INFORMATION:
            </h4>
            <p className="p-medium">+1 (647) 504-0911</p>
            <p className="p-medium">giyon@instock.com</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default WareHouseDetail;
