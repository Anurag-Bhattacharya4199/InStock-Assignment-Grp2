import "./WareHouseDetailPage.scss";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InventoryList from "../../components/InventoryList/InventoryList";
import EditWarehouse from "../../components/EditWareHouse/EditWareHouse";
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

  // DYNAMIC CLASSES
  const [warehouseDetailClass, setWarehouseDetailClass] = useState("");
  const [editWarehouseClass, setEditWarehouseClass] =
    useState("display-hidden");

  // DISABLE SAVE BUTTON IN EDIT WAREHOUSE-COMPONENT
  const [disableButton, setDisableButton] = useState(true);
  const [disableButtonClass, setDisableButtonClass] = useState("disabled");

  // WAREHOUSE INVENTORY LISTS
  const [warehouseInventory, setWarehouseInventory] = useState([]);

  useEffect(() => {
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

    axios.get(`${API_BASE_URL}${id}/inventories`).then((response) => {
      setWarehouseInventory(response.data);
      setHasLoaded2(true);
    });
  }, []);

  // UPDATE WAREHOUSE
  const handleEditWarehousePost = (warehouseData) => {
    axios
      .patch(`${API_BASE_URL}${id}`, warehouseData)
      .then((response) => {
        setWarehouse(response.data);
        setHasLoaded(true);
      })
      .then(() => {
        handleEditWarehouseClass();
        setDisableButton(true);
        setDisableButtonClass("disabled");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // TOGGLE CLASSES (DISPLAY : NONE/BLOCK)
  const handleEditWarehouseClass = () => {
    setWarehouseDetailClass("");
    setEditWarehouseClass("display-hidden");
  };

  // RENDERING
  if (!hasLoaded && !hasLoaded2) {
    return null;
  } else {
    return (
      <>
        {/* EDIT WAREHOUSE */}
        <EditWarehouse
          warehouse={warehouse}
          disableButton={disableButton}
          disableButtonClass={disableButtonClass}
          editWarehouseClass={editWarehouseClass}
          setDisableButton={setDisableButton}
          setDisableButtonClass={setDisableButtonClass}
          handleEditWarehousePost={handleEditWarehousePost}
          handleEditWarehouseClass={handleEditWarehouseClass}
        />
        <main className={`warehouseDetails ${warehouseDetailClass}`}>
          <SearchHeader
            title={warehouse.warehouse_name}
            headerButton="warehouses"
          />
          <section className="warehouseDetails__info">
            <div className="warehouseDetails__info-address">
              <h4 className="warehouseDetails__info-headers">
                Warehouse Address:
              </h4>
              <p className="p-medium">
                {warehouse.address},
                <p className="p-medium">
                  {warehouse.city}, {warehouse.country}
                </p>
              </p>
            </div>
            <div className="warehouseDetails__info-contact">
              <div className="warehouseDetails__info-column warehouseDetails__info-column--left">
                <h4 className="warehouseDetails__info-headers">
                  CONTACT NAME:
                </h4>
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
