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
  const [inventoryToDelete, setInventorToDelete] = useState('');
  const { id } = useParams();
  const [searchTerm, setSearchTerm] = useState('');

  const API_BASE_URL = "http://localhost:8080";

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

  }

  useEffect(() => {
    fetchInventorylist();
  }, []);


  const handleDeleteClick = (id, item_name) => {
    setShowDeletePopup(true);
    setDeleteInventoryID(id);
    setInventorToDelete(item_name);
    //console.log(id)

  };

  const handleDeleteConfirmation = () => {
    axios.delete(`${API_BASE_URL}/inventories/${deleteInventoryID}`)
      .then(() => {
        console.log(`Successfully deleted inventory item with ID: ${deleteInventoryID}`);
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

  const handleSearch = (searchTerm) => {
    console.log('Search term for invenory:', searchTerm);
    setSearchTerm(searchTerm);
  };

   



  if (!hasLoaded) {
    return null;
  } else {


    return (
      <section className="inventory-list">
        <SearchHeader title="Inventory" addNewItem="Item" addURL="inventories"  onSearch={handleSearch} />

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
