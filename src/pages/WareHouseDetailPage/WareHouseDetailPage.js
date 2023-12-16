import "./WareHouseDetailPage.scss";
import ArroWBack from "../../assets/icons/arrow_back-24px.svg";
import EditButton from "../../assets/icons/edit-24px.svg";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SearchHeader from "../../components/SearchHeader/SearchHeader";
import InventoryList from "../../components/InventoryList/InventoryList";

function WareHouseDetailPage(props) {
  let { id } = useParams();
  const [hasLoaded, setHasLoaded] = useState(false);
  const [hasLoaded2, setHasLoaded2] = useState(false);
  const API_BASE_URL = "http://localhost:8080/warehouses/";

  const [warehouse, setWarehouse] = useState([]);
  const [warehouseInventory, setWarehouseInventory] = useState([]);

  // console.log(props.warehouse)

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}${id}`)
      .then((response) => {
        setWarehouse(response.data);
        setHasLoaded(true);
      })
      .catch((error) => {
        console.error(error);
      });

      axios.get(`${API_BASE_URL}${id}/inventories`).then((response) => {
        setWarehouseInventory(response.data);
        setHasLoaded2(true);
      });
  }, []);

if (!hasLoaded && !hasLoaded2){
  return null;
}else {
  return (
    <>
    <SearchHeader title="Warehouse" addNewItem="Warehouse" />
    <section className="warehouseDetails">
      <article className="warehouseDetails__overallInfo">
        <div className="warehouseDetails__header">
          <div className="warehouseDetails__subHeader">
            <img
              src={ArroWBack}
              alt="Arrow Back"
              className="warehouseDetails__back"
            />
            <h1 className="warehouseDetails__name">{warehouse.warehouse_name}</h1>
          </div>
          <img
            src={EditButton}
            alt="Edit Button"
            className="warehouseDetails__edit"
          />
        </div>
        <div className="warehouseDetails__specificInfo">
          <article className="warehouseDetails__addressInfo">
            <h4 className="warehouseDetails__title">WAREHOUSE ADDRESS</h4>
            <p className="p-medium">{warehouse.address}</p>
          </article>
          <section className="warehouseDetails__contacts">
            <article className="warehouseDetails__contactDetails">
              <h4 className="warehouseDetails__title">CONTACT NAME:</h4>
              <p className="warehouseDetails__contactName p-medium">
              {warehouse.contact_name}
              </p>
              <p className="warehouseDetails__contactPosition p-medium">
              {warehouse.contact_position}
              </p>
            </article>
            <article className="warehouseDetails__contactInfo">
              <h4 className="warehouseDetails__title">CONTACT INFORMATION</h4>
              <p className="warehouseDetails__phoneNum p-medium">
              {warehouse.contact_phone}
              </p>
              <p className="warehouseDetails__email p-medium">
              {warehouse.contact_email}
              </p>
            </article>
          </section>
        </div>
      </article>
    </section>
    <InventoryList inventoryCard= {warehouseInventory}/>
    </>
  );
}
}

export default WareHouseDetailPage;
