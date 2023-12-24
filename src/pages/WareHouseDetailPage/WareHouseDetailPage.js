import "./WareHouseDetailPage.scss";
import ArroWBack from "../../assets/icons/arrow_back-24px.svg";
import EditButton from "../../assets/icons/edit-24px.svg";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import InventoryList from "../../components/InventoryList/InventoryList";

function WareHouseDetailPage(props) {
  let { id } = useParams();
  const navigate = useNavigate();
  const [hasLoaded, setHasLoaded] = useState(false);
  const [hasLoaded2, setHasLoaded2] = useState(false);
  const API_BASE_URL = "http://localhost:8080/warehouses/";

  const [warehouse, setWarehouse] = useState([]);
  const [warehouseInventory, setWarehouseInventory] = useState([]);

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

  if (!hasLoaded && !hasLoaded2) {
    return null;
  } else {
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
            <h1 className="warehouseDetails__header-title">
              {warehouse.warehouse_name}
            </h1>
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
            <h4 className="warehouseDetails__info-headers">
              Warehouse Address:
            </h4>
            <p className="p-medium">{warehouse.address}</p>
          </div>
          <div className="warehouseDetails__info-contact">
            <div className="warehouseDetails__info-column warehouseDetails__info-column--left">
              <h4 className="warehouseDetails__info-headers">CONTACT NAME:</h4>
              <p className="p-medium">{warehouse.contact_name}</p>
              <p className="p-medium">{warehouse.contact_position}</p>
            </div>
            <div className="warehouseDetails__info-column warehouseDetails__info-column--right">
              <h4 className="warehouseDetails__info-headers">
                CONTACT INFORMATION:
              </h4>
              <p className="p-medium">{warehouse.contact_phone}</p>
              <p className="p-medium">{warehouse.contact_email}</p>
            </div>
          </div>
        </section>
        <InventoryList inventoryList={warehouseInventory} warehouseName={warehouse.warehouse_name} />
      </main>
    );
  }
}

export default WareHouseDetailPage;
