import "./WareHouseDetailPage.scss";
import React, { useState, useEffect } from "react";
import { useParams, useSearchParams, Link } from "react-router-dom";
import InventoryList from "../../components/InventoryList/InventoryList";
import axios from "axios";
import SearchHeader from "../../components/SearchHeader/SearchHeader";
import { API_BASE_URL } from "../../utils/utils";

function WareHouseDetailPage() {
  let { id } = useParams();

  // TRUTHY CHECK
  const [hasLoaded, setHasLoaded] = useState(false);
  const [hasLoaded2, setHasLoaded2] = useState(false);

  // WAREHOUSE DATA
  const [warehouse, setWarehouse] = useState("");

  // WAREHOUSE INVENTORY LISTS
  const [warehouseInventory, setWarehouseInventory] = useState([]);

  const fetchWarehouseDetails = () => {
    axios
    .get(`${API_BASE_URL}${id}`)
    .then((response) => {
      setWarehouse(response.data);

      // VALIDATE DATA DOWNLOAD
      setHasLoaded(true);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  const fetchInventoryForWarehouse = () => {
    axios.get(`${API_BASE_URL}${id}/inventories`).then((response) => {
      setWarehouseInventory(response.data);
      setHasLoaded2(true);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  useEffect(() => {
    fetchWarehouseDetails();
    fetchInventoryForWarehouse();
  }, []);

  // RENDERING
  if (!hasLoaded && !hasLoaded2) {
    return null;
  } else {
    return (
      <>
        <main className={`warehouseDetails`}>
          <SearchHeader
            headerButton="warehouses"
            item_id={warehouse.id}
            title={warehouse.warehouse_name}
            pageSource={`/warehouses/${id}`}
          />
          <section className="warehouseDetails__info">
            <div className="warehouseDetails__info-address">
              <h4 className="warehouseDetails__info-headers">
                Warehouse Address:
              </h4>
              <p className="p-medium">
                {warehouse.address}, <span></span>
                <br className="warehouseDetails__info-address--new-line"></br>
                {warehouse.city}, <span></span>
                {warehouse.country}
              </p>
            </div>
            <div className="warehouseDetails__info-contact">
              <div className="warehouseDetails__info-column warehouseDetails__info-column--left">
                <h4 className="warehouseDetails__info-headers">
                  CONTACT NAME:
                </h4>
                <p className="p-medium">
                  {warehouse.contact_name}, <span></span>
                  <br className="warehouseDetails__info-address--new-line"></br>
                  {warehouse.contact_position}
                </p>
              </div>
              <div className="warehouseDetails__info-column warehouseDetails__info-column--right">
                <h4 className="warehouseDetails__info-headers">
                  CONTACT INFORMATION:
                </h4>
                <p className="p-medium">
                  {warehouse.contact_phone}, <span></span>
                  <br className="warehouseDetails__info-address--new-line"></br>
                  {warehouse.contact_email}
                </p>
              </div>
            </div>
          </section>
          <InventoryList
            inventoryList={warehouseInventory}
            warehouseName={warehouse.warehouse_name}
          />
        </main>
      </>
    );
  }
}

export default WareHouseDetailPage;
