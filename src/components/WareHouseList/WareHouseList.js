import "./WareHouseList.scss";
import WareHouseInfoCard from "../WareHouseInfoCard/WareHouseInfoCard";
import SortDefault from "../../assets/icons/sort-24px.svg";
import EditWarehouse from "../EditWareHouse/EditWareHouse";
import { useState } from "react";
function WareHouseList(props) {
  const { warehouses } = props;
  /*
   * warehouseOneData will store data of warehouse when edit button is click
   * warehouseOneData will get passed as props to editWarehouse component
   *
   * warehouseOneId will store an "id" of warehouse going for edit session
   * warehouseOneId will get paased as props to editWarehouse component
   */
  const [currentWarehouseData, setCurrentWarehouseData] = useState("");
  const [currentWarehouseId, setCurrentWarehouseId] = useState([]);

  // DYNAMIC CLASSES
  const [warehouseListClass, setWarehouseListClass] = useState("");
  const [editWarehouseClassOne, setEditWarehouseClassOne] = useState("");

  const handleCurrentWarehouseData = (event) => {
    // GET CURRENT WAREHOUSE ID
    const currentWarehouseId = event.target.id;
    // CURRENT WAREHOUSE DATA OBJECT
    warehouses.forEach((item) => {
      if (item.id.toString() === currentWarehouseId.toString()) {
        const currentWarehouse = {
          warehouse_name: item.warehouse_name,
          address: item.address,
          city: item.city,
          country: item.country,
          contact_position: item.contact_position,
          contact_phone: item.contact_phone,
          contact_email: item.contact_email,
        };
        setCurrentWarehouseData(currentWarehouse);
        return;
      }
    });
  };

  const handleWarehouseListClass = () => {
    setWarehouseListClass("display-none");
    setEditWarehouseClassOne("");
  };
  const handleEditWarehouseClassOne = () => {
    setEditWarehouseClassOne("display-none");
    setWarehouseListClass("");
  };

  return (
    <>
      {/* edit warehouse */}
      <EditWarehouse
        currentWarehouseData={currentWarehouseData}
        currentWarehouseId={currentWarehouseId}
        editWarehouseClassOne={editWarehouseClassOne}
        handleWarehouseListClass={handleWarehouseListClass}
        handleEditWarehouseClassOne={handleEditWarehouseClassOne}
        fetchWarehouseList={props.fetchWarehouseList}
      />
      {/* tablet & mobile headers */}
      <div className="warehouseList-headers">
        <div className="warehouseList-headers__header-container">
          <h4 className="warehouseList-headers__header-container--header">
            WAREHOUSE
          </h4>
          <img
            className="warehouseList-headers__header-container--sort-icon"
            src={SortDefault}
            alt="sort"
          />
        </div>
        <div className="warehouseList-headers__header-container">
          <h4 className="warehouseList-headers__header-container--header">
            ADDRESS
          </h4>
          <img
            className="warehouseList-headers__header-container--sort-icon"
            src={SortDefault}
            alt="sort"
          />
        </div>
        <div className="warehouseList-headers__header-container">
          <h4 className="warehouseList-headers__header-container--header">
            CONTACT NAME
          </h4>
          <img
            className="warehouseList-headers__header-container--sort-icon"
            src={SortDefault}
            alt="sort"
          />
        </div>
        <div className="warehouseList-headers__header-container">
          <h4 className="warehouseList-headers__header-container--header">
            COONTACT INFORMATION
          </h4>
          <img
            className="warehouseList-headers__header-container--sort-icon"
            src={SortDefault}
            alt="sort"
          />
        </div>
        <div key="06" className="warehouseList-headers__header-container">
          <h4 className="warehouseList-headers__header-container--header">
            ACTIONS
          </h4>
        </div>
      </div>

      <div className={`${warehouseListClass} WarehouseList`}>
        {warehouses.map((item) => (
          <WareHouseInfoCard
            key={item.id}
            warehouse_name={item.warehouse_name}
            address={item.address}
            city={item.city}
            country={item.country}
            contact_name={item.contact_name}
            contact_phone={item.contact_phone}
            contact_email={item.contact_email}
            id={item.id}
            onDeleteClick={props.onDeleteClick}
            handleCurrentWarehouseData={handleCurrentWarehouseData}
            handleWarehouseListClass={handleWarehouseListClass}
            handleEditWarehouseClassOne={handleEditWarehouseClassOne}
          />
        ))}
      </div>
    </>
  );
}

export default WareHouseList;
