import "./WareHouseList.scss";
import WareHouseInfoCard from "../WareHouseInfoCard/WareHouseInfoCard";
import SortDefault from "../../assets/icons/sort-24px.svg";
import EditWarehouse from "../EditWareHouse/EditWareHouse";
import { useState } from "react";
import axios from "axios";
function WareHouseList(props) {
  const { warehouses } = props;

  const [currentWarehouseId, setCurrentWarehouseId] = useState([]);
  const [warehouse, setWarehouse] = useState({});
  const [hasCurrentWarehouseLoaded, setHasCurrentWarehouseLoaded] =
    useState(false);

  // DYNAMIC CLASSES
  const [warehouseListClass, setWarehouseListClass] = useState("");
  const [editWarehouseClass, setEditWarehouseClass] = useState("display-none");
  const [headerClass, setHeaderClass] = useState("");
  // DISABLE SAVE BUTTON IN EDIT WAREHOUSE-COMPONENT
  const [disableButton, setDisableButton] = useState(true);
  const [disableButtonClass, setDisableButtonClass] = useState("disabled");

  const getCurrentWarehouseData = (event) => {
    // GET CURRENT WAREHOUSE ID
    setCurrentWarehouseId(event.target.id);
    // CURRENT WAREHOUSE DATA OBJECT
    warehouses.forEach((item) => {
      if (item.id.toString() === event.target.id.toString()) {
        setWarehouse({
          warehouse_name: item.warehouse_name,
          address: item.address,
          city: item.city,
          country: item.country,
          contact_name: item.contact_name,
          contact_position: item.contact_position,
          contact_phone: item.contact_phone,
          contact_email: item.contact_email,
        });
        setHasCurrentWarehouseLoaded(true);
      }
    });
  };

  const handleEditWarehousePost = (warehouseData) => {
    axios
      .patch(
        `http://localhost:8080/warehouses/${currentWarehouseId}`,
        warehouseData
      )
      .then(() => {
        props.fetchWarehouseList();
      })

      .catch((error) => {
        console.error(error);
      });
  };

  const handleWarehouseListClass = () => {
    setWarehouseListClass("display-none");
    setEditWarehouseClass("");
    setHeaderClass("display-none");
  };
  const handleEditWarehouseClass = () => {
    setEditWarehouseClass("display-none");
    setWarehouseListClass("");
    setHeaderClass("");
  };

  if (hasCurrentWarehouseLoaded) {
    return (
      <>
        {/* edit warehouse */}
        <EditWarehouse
          warehouse={warehouse}
          currentWarehouseId={currentWarehouseId}
          editWarehouseClass={editWarehouseClass}
          disableButton={disableButton}
          disableButtonClass={disableButtonClass}
          setDisableButton={setDisableButton}
          setDisableButtonClass={setDisableButtonClass}
          handleWarehouseListClass={handleWarehouseListClass}
          handleEditWarehouseClass={handleEditWarehouseClass}
          handleEditWarehousePost={handleEditWarehousePost}
          setHasCurrentWarehouseLoaded={setHasCurrentWarehouseLoaded}
        />
        {/* tablet & mobile headers */}
        <div className={` ${headerClass} warehouseList-headers`}>
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
              getCurrentWarehouseData={getCurrentWarehouseData}
              handleWarehouseListClass={handleWarehouseListClass}
            />
          ))}
        </div>
      </>
    );
  } else {
    return (
      <>
        {/* tablet & mobile headers */}
        <div className={` ${headerClass} warehouseList-headers`}>
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
          <div key="06" className="warehouseList-headers__action-header-container">
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
              getCurrentWarehouseData={getCurrentWarehouseData}
              handleWarehouseListClass={handleWarehouseListClass}
            />
          ))}
        </div>
      </>
    );
  }
}

export default WareHouseList;
