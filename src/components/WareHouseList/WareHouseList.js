import "./WareHouseList.scss";
import WareHouseInfo from "../WareHouseInfo/WareHouseInfo";

function WareHouseList(props) {
  const { warehouses } = props;

  return (
    <div className="warehouseList">
      <div className="warehouseList__header--container">
        <h2 className="warehouseList__header--title">Warehouses</h2>
        <div className="warehouseList__header--subcontainer">
          <input
            type="text"
            className="warehouseList__header--searchBar"
            placeholder="Search..."
          ></input>
          <button className="warehouseList__header--AddWarehouse-Button">
            + Add New Warehouse
          </button>
        </div>
      </div>

      {warehouses.map((item) => (
        <WareHouseInfo
          key={item.id}
          warehouse_name={item.warehouse_name}
          address={item.address}
          city={item.city}
          country={item.country}
          contact_name={item.contact_name}
          contact_phone={item.contact_phone}
          contact_email={item.contact_email}
        />
      ))}
    </div>
  );
}

export default WareHouseList;
