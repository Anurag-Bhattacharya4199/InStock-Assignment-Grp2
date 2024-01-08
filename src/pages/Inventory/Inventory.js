import "./Inventory.scss";
import { useEffect, useState } from "react";
import InventoryList from "../../components/InventoryList/InventoryList";
import SearchHeader from "../../components/SearchHeader/SearchHeader";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import axios from "axios";
import { API_BASE_URL } from "../../utils/utils";

const Inventory = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [inventoryList, setInventoryList] = useState([]);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [deleteInventoryID, setDeleteInventoryID] = useState(null);
  const [inventoryToDelete, setInventorToDelete] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const fetchInventorylist = () => {
    axios
      .get(`${API_BASE_URL}/inventories`)
      .then((response) => {
        setInventoryList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setHasLoaded(true);
  };

  useEffect(() => {
    fetchInventorylist();
  }, []);

  //Display Delete Modal
  const handleDeleteClick = (id, item_name) => {
    setShowDeletePopup(true);
    setDeleteInventoryID(id);
    setInventorToDelete(item_name);
  };

  //Delete inventory Item and close Delete Modal
  const handleDeleteConfirmation = () => {
    axios
      .delete(`${API_BASE_URL}/inventories/${deleteInventoryID}`)
      .then(() => {
        console.log(
          `Successfully deleted inventory item with ID: ${deleteInventoryID}`
        );
        setShowDeletePopup(false);
        setDeleteInventoryID(null);
        fetchInventorylist();
      })
      .catch((error) => {
        console.error(`Error deleting inventory item: ${error}`);
      });
  };

  //Close delete component using cancel or X
  const handleCloseDeleteComponent = () => {
    setShowDeletePopup(false);
    setDeleteInventoryID(null);
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const filteredInventories = inventoryList.filter((inventory) => {
    // Convert quantity to string and then apply toLowerCase()
    const quantityString = JSON.stringify(inventory.quantity).toLowerCase();

    // Perform case-insensitive search on relevant fields
    const searchFields = [
      inventory.item_name.toLowerCase(),
      inventory.category.toLowerCase(),
      inventory.status.toLowerCase(),
      quantityString,
      inventory.warehouse_name.toLowerCase(),
    ];

    return searchFields.some((field) =>
      field.includes(searchTerm.toLowerCase())
    );
  });

  if (!hasLoaded) {
    return null;
  } else {
    return (
      <section className="inventory-list">
        <SearchHeader
          title="Inventory"
          addNewItem="Item"
          addURL="inventories"
          onSearch={handleSearch}
        />

        {showDeletePopup && (
          <div className="overlay">
            <div className="delete-popup">
              <DeleteModal
                inventoryName={inventoryToDelete}
                itemType="inventory"
                handleCloseDeleteComponent={handleCloseDeleteComponent}
                handleDeleteConfirmation={handleDeleteConfirmation}
              />
            </div>
          </div>
        )}

        <InventoryList
          inventoryList={filteredInventories}
          onDeleteClick={handleDeleteClick}
        />
      </section>
    );
  }
};

export default Inventory;
