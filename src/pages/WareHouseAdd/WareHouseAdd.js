import ArroWBack from "../../assets/icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";

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
        <h2 className="addWarehouse__headers-title">Add New WareHouse</h2>
      </div>
      <form></form>
    </main>
  );
}

export default WareHouseAdd;
