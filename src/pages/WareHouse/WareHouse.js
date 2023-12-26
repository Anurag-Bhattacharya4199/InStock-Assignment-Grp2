import React, { useState, useEffect } from "react";
import axios from "axios";
import './WareHouse.scss'
import WareHouseList from "../../components/WareHouseList/WareHouseList";
import SearchHeader from "../../components/SearchHeader/SearchHeader";
import { useParams } from "react-router-dom";
import DeleteModal from "../../components/DeleteModal/DeleteModal";

function WareHouse() {
  const API_BASE_URL = "http://localhost:8080/warehouses";
  const [warehouses, setWarehouses] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [deleteWarehouseID, setDeleteWarhouseID] = useState(null);
  const [warehouseToDelete, setWarehouseToDelete] = useState(null);
  const { id } = useParams();



 
  const fetchWarehouseList = () => {
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
  };

  useEffect(() => {
    fetchWarehouseList(); // Fetch warehouse list when component mounts
  }, []); // Empty dependency array to trigger effect only on mount




  const handleDeleteClick = (id, warehouse_name) => {
    setShowDeletePopup(true);
    setDeleteWarhouseID(String(id));
    setWarehouseToDelete(warehouse_name.toString());
    //console.log(id)
  };

  const handleDeleteConfirmation = () => {
    // Make a DELETE request to delete the warehouse
    axios.delete(`${API_BASE_URL}/${deleteWarehouseID}`)
      .then(() => {
        console.log(`Successfully deleted warehouse with ID: ${deleteWarehouseID}`);
        // Now, make another DELETE request to delete the warehouse inventory
        setShowDeletePopup(false);
        setDeleteWarhouseID(null);
        fetchWarehouseList();

      })
      .catch((error) => {
        console.error(`Error deleting warehouse: ${error}`);

      });
  };

  // to  close delete component using cancel or X
  const handleCloseDeleteComponent = () => {
    setShowDeletePopup(false);
    setDeleteWarhouseID(null);
  };


  if (!hasLoaded) {
    return null;
  } else {
    return (
      <div className="warehouse-list">
        <SearchHeader title="Warehouse" addNewItem="Warehouse" />

        {showDeletePopup && (
          <div className="overlay">
            <div className="delete-popup">
              <DeleteModal
                warehouseName={warehouseToDelete}
                itemType="warehouse"
                handleCloseDeleteComponent={handleCloseDeleteComponent}
                handleDeleteConfirmation={handleDeleteConfirmation}
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
