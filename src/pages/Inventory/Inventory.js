import "./Inventory.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import InventoryList from "../../components/InventoryList/InventoryList";
import SearchHeader from "../../components/SearchHeader/SearchHeader";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import axios from "axios";

const Inventory = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [inventoryList, setInventoryList] = useState([]);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [deleteInventoryID, setDeleteInventoryID] = useState(null);
  const [inventoryToDelete, setInventorToDelete] = useState(null);
  const { id } = useParams();

  const API_BASE_URL = "http://localhost:8080";

  const fetchInventorylist = () => {
    axios
      .get(`${API_BASE_URL}/inventories`)
      .then((response) => {
        setInventoryList(response.data);
        // console.log(inventoryList);
      })
      .catch((err) => {
        console.log(err);
      });
    setHasLoaded(true);

  }

  useEffect(() => {
    fetchInventorylist();
  }, []);


  const handleDeleteClick = (id, item_name) => {
    setShowDeletePopup(true);
    setDeleteInventoryID(String(id));
    setInventorToDelete(item_name.toString());
    //console.log(id)
  };

  const handleDeleteConfirmation = () => {
    // Make a DELETE request to delete the warehouse
    axios.delete(`${API_BASE_URL}/inventories/${deleteInventoryID}`)
      .then(() => {
        console.log(`Successfully deleted inventory item with ID: ${deleteInventoryID}`);
        // Now, make another DELETE request to delete the warehouse inventory
        setShowDeletePopup(false);
        setDeleteInventoryID(null);
        fetchInventorylist();

      })
      .catch((error) => {
        console.error(`Error deleting inventory item: ${error}`);

      });
  };

  // to  close delete component using cancel or X
  const handleCloseDeleteComponent = () => {
    setShowDeletePopup(false);
    setDeleteInventoryID(null);
  };



  if (!hasLoaded) {
    return null;
  } else {


    return (
      <section className="inventory-list">
        <SearchHeader title="Inventory" addNewItem="Item" />

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

        <InventoryList inventoryList={inventoryList} onDeleteClick={handleDeleteClick} />
      </section>
    );
  }
};

export default Inventory;
