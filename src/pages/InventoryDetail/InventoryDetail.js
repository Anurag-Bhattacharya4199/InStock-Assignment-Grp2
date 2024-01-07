import "./InventoryDetail.scss";
import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import SearchHeader from "../../components/SearchHeader/SearchHeader";

function InventoryDetail() {
  const API_BASE_URL = "http://localhost:8080/";
  const { id } = useParams();
  const location = useLocation();
  const [warehouseName, setWarehouseName] = useState("")
  const [inventoryList, setInventoryList] = useState("")
  const [hasLoaded, setHasLoaded] = useState(false)
  const [hasLoaded2, setHasLoaded2] = useState(false)
  const [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
    fetchWarehouseList();
    fetchInventory();
  }, [])

  useEffect(() => {
    if (hasLoaded && hasLoaded2) {
      // find warehouse name from warehouses using filter
      let tempWarehouseName = warehouses.filter((wh) => {
        return wh.id === inventoryList.warehouse_id;
      })[0].warehouse_name;
      setWarehouseName(tempWarehouseName)
    }
  }, [hasLoaded, hasLoaded2])

  const fetchInventory = () => {
    axios
    .get(`${API_BASE_URL}inventories/${id}`)
    .then((response) => {
      setInventoryList(response.data[0]);
    })
    .then(()=>{setHasLoaded(true)})
    .catch((err) => {
      console.log(err);
    });
  }

  const fetchWarehouseList = () => {
    axios
      .get(`${API_BASE_URL}warehouses`)
      .then((response) => {
        setWarehouses(response.data);
        setHasLoaded2(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (!hasLoaded) {
    return null;
  } else {
    return (
      <div className="inventoryDetails">
        <SearchHeader
          title={inventoryList.item_name}
          headerButton="inventories"
          itemId={inventoryList.id}
          itemCategory={inventoryList.category}
          itemName={inventoryList.item_name}
          itemDescription={inventoryList.description}
          itemStatus={inventoryList.status}
          warehouseName={location.state.warehouseName}
          itemQuantity={inventoryList.quantity}
        />
        <section className="details">
          <div className="details--left-wrapper">
            <div className="details__description">
              <h4 className="details__headers--description">ITEM DESCRIPTION:</h4>
              <p className="details--text">{inventoryList.description}</p>
            </div>
            <div>
              <h4 className="details__headers--category">CATEGORY:</h4>
              <p className="details--text">{inventoryList.category}</p>
            </div>
          </div>
          <div className="details--right-wrapper">
            <div className="details__status-warehouse">
              <div className="details__status-warehouse--status">
                <h4 className="details__headers--status">STATUS:</h4>
                <p
                  className={`details--text status-container__status ${inventoryList.status} === "In Stock"
                    ? "status-container__in-stock"
                    : "status-container__out-of-stock"
                    } `}
                >
                  {inventoryList.status}
                </p>
              </div>
              <div className="details__status-warehouse--warehouse">
                <h4 className="details__headers--warehouse">WAREHOUSE:</h4>
                <p className="details--text">{warehouseName}</p>
              </div>
            </div>
            <div className="details__quantity">
              <h4 className="details__headers--status">QUANTITY:</h4>
              <p className="details--text">{inventoryList.quantity}</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default InventoryDetail;
