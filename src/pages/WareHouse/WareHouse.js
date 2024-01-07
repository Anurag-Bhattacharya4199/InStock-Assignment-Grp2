import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WareHouse.scss";
import WareHouseList from "../../components/WareHouseList/WareHouseList";
import SearchHeader from "../../components/SearchHeader/SearchHeader";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import { API_BASE_URL } from "../../utils/utils";

function WareHouse() {
  const [warehouses, setWarehouses] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [deleteWarehouseID, setDeleteWarhouseID] = useState(null);
  const [warehouseToDelete, setWarehouseToDelete] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const fetchWarehouseList = () => {
    axios
      .get(`${API_BASE_URL}/warehouses`)
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
    fetchWarehouseList(); 
  }, []);

  //Display delete modal on click
  const handleDeleteClick = (id, warehouse_name) => {
    setShowDeletePopup(true);
    setDeleteWarhouseID(id);
    setWarehouseToDelete(warehouse_name);
  };

   // Make a DELETE request to delete the warehouse and close delete Modal
  const handleDeleteConfirmation = () => {
    axios
      .delete(`${API_BASE_URL}/warehouses/${deleteWarehouseID}`)
      .then(() => {
        console.log(
          `Successfully deleted warehouse with ID: ${deleteWarehouseID}`
        );
        setShowDeletePopup(false);
        setDeleteWarhouseID(null);
        fetchWarehouseList();
      })
      .catch((error) => {
        console.error(`Error deleting warehouse: ${error}`);
      });
  };

  //Close delete modal using cancel or X
  const handleCloseDeleteComponent = () => {
    setShowDeletePopup(false);
    setDeleteWarhouseID(null);
  };

  // Set input as search term
  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  // Filter the warehouses based on the search term
  const filteredWarehouses = warehouses.filter((warehouse) => {
    // Perform case-insensitive search on relevant fields
    const searchFields = [
      warehouse.warehouse_name.toLowerCase(),
      warehouse.address.toLowerCase(),
      warehouse.city.toLowerCase(),
      warehouse.country.toLowerCase(),
      warehouse.contact_name.toLowerCase(),
      warehouse.contact_email.toLowerCase(),
      warehouse.contact_phone.toLowerCase(),
    ];

    return searchFields.some((field) =>
      field.includes(searchTerm.toLowerCase())
    );
  });

  if (!hasLoaded) {
    return null;
  } else {
    return (
      <div className="warehouse-list">
        <SearchHeader
          title="Warehouses"
          addNewItem="Warehouse"
          addURL="warehouses"
          onSearch={handleSearch}
        />

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

        <WareHouseList
          warehouses={filteredWarehouses}
          onDeleteClick={handleDeleteClick}
          fetchWarehouseList={fetchWarehouseList}
        />
      </div>
    );
  }
}
export default WareHouse;
