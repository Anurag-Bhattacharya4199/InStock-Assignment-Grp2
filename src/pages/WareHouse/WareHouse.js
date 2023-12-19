import React, { useState, useEffect } from "react";
import axios from "axios";
import './WareHouse.scss'
import WareHouseList from "../../components/WareHouseList/WareHouseList";
import SearchHeader from "../../components/SearchHeader/SearchHeader";
import DeleteWarehouse from "../../components/DeleteWarehouse/DeleteWarehouse";

function WareHouse() {
  const API_BASE_URL = "http://localhost:8080/warehouses";
  const [warehouses, setWarehouses] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [deleteWarehouseID, setDeleteWarhouseID] = useState(null);
  const [warehouseToDelete, setWarehouseToDelete] = useState(null);

  const handleDeleteClick = (id, warehouse_name) => {
    setShowDeletePopup(true);
    setDeleteWarhouseID(String(id));
    setWarehouseToDelete(warehouse_name.toString());
    console.log(id)
  };

  // const handleDeleteConfirmation = () => {
  //   // make an axios call to delete the warehouse using deleteWarehouseID
  //   console.log(`Deleting warehouse with ID: ${deleteWarehouseID}`);

  //   // to close popup afer delete
  //   setShowDeletePopup(false);
  //   setDeleteWarhouseID(null);
  // };

  // to  close delete component using cancel or X
  const handleCloseDeleteComponent = () => {
    setShowDeletePopup(false);
    setDeleteWarhouseID(null);
  };

  useEffect(() => {
    axios
      .get(API_BASE_URL)
      .then((response) => {
        const warehouseData = response.data;
        setWarehouses(warehouseData);
        setHasLoaded(true);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!hasLoaded) {
    return null;
  } else {
    return (
      <div className="warehouse-list">
        <SearchHeader title="Warehouse" addNewItem="Warehouse" />

        {showDeletePopup && (
          <div className="overlay">
            <div className="delete-popup">
              <DeleteWarehouse
                warehouseName={warehouseToDelete}
                handleCloseDeleteComponent={handleCloseDeleteComponent}
              />
            </div>
          </div>
        )}

        <WareHouseList warehouses={warehouses} onDeleteClick={handleDeleteClick} />

      </div>
    );
  }

  // import { Link } from 'react-router-dom';

  //         <Link to="/inventory/1">
  //         <button type="submit">
  //         Inventory
  //         </button>
  //         </Link>
}
export default WareHouse;
