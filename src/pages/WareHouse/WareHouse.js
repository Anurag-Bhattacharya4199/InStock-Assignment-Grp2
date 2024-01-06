import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WareHouse.scss";
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
  const [warehouseToDelete, setWarehouseToDelete] = useState('');
  const [sortedWarehouses, setSortedWarehouses] = useState([])
  const [sortWarehouses, setSortWarehouses] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');


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

  const fetchSortedWarehouseList = () => {
    axios
    .get(`${API_BASE_URL}?sort_by=warehouse_name`)
    .then((response) => {
      const sortedWarehouseData = response.data;
      setSortedWarehouses(sortedWarehouseData)
    })
    .catch((error)=> {
      console.error(error)
    })
  };

  useEffect(() => {
    fetchWarehouseList(); // Fetch warehouse list when component mounts
    fetchSortedWarehouseList();
  }, []); // Empty dependency array to trigger effect only on mount

  const handleSortClick = () => {
    setSortWarehouses(prevState => !prevState)
  };

  const handleDeleteClick = (id, warehouse_name) => {
    setShowDeletePopup(true);
    setDeleteWarhouseID(id);
    setWarehouseToDelete(warehouse_name);

  };

  const handleDeleteConfirmation = () => {
    // Make a DELETE request to delete the warehouse
    axios
      .delete(`${API_BASE_URL}/${deleteWarehouseID}`)
      .then(() => {
        console.log(
          `Successfully deleted warehouse with ID: ${deleteWarehouseID}`
        );
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

  const handleWarehouseSearch = (searchTerm) => {
    console.log('Search term for warehouse:', searchTerm);
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
  
      return searchFields.some((field) => field.includes(searchTerm.toLowerCase()));
     
    });

    console.log(filteredWarehouses);
  

  if (!hasLoaded) {
    return null;
  } else {
    return (
      <div className="warehouse-list">
        <SearchHeader
          title="Warehouses"
          addNewItem="Warehouse"
          addURL="warehouses"
          onSearch={handleWarehouseSearch}
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
          warehouses={sortWarehouses ? sortedWarehouses : filteredWarehouses}
          onDeleteClick={handleDeleteClick}
          fetchWarehouseList={fetchWarehouseList}
          onSortClick={handleSortClick}
        />
      </div>
    );
  }
}
export default WareHouse;
