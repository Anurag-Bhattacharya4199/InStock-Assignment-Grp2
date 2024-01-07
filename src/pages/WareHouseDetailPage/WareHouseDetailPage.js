import "./WareHouseDetailPage.scss";
import React, { useState, useEffect } from "react";
import { useParams, useSearchParams, Link } from "react-router-dom";
import InventoryList from "../../components/InventoryList/InventoryList";
import axios from "axios";
import SearchHeader from "../../components/SearchHeader/SearchHeader";
import { API_BASE_URL } from "../../utils/utils";
import DeleteModal from "../../components/DeleteModal/DeleteModal";

function WareHouseDetailPage() {
  let { id } = useParams();

  // TRUTHY CHECK
  const [hasLoaded, setHasLoaded] = useState(false);
  const [hasLoaded2, setHasLoaded2] = useState(false);
  const [deleteInventoryID, setDeleteInventoryID] = useState(null);
  const [inventoryToDelete, setInventorToDelete] = useState("");
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  // WAREHOUSE DATA
  const [warehouse, setWarehouse] = useState("");

  // WAREHOUSE INVENTORY LISTS
  const [warehouseInventory, setWarehouseInventory] = useState([]);

  const fetchWarehouseDetails = () => {
    axios
      .get(`${API_BASE_URL}/warehouses/${id}`)
      .then((response) => {
        setWarehouse(response.data);

        // VALIDATE DATA DOWNLOAD
        setHasLoaded(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchInventoryForWarehouse = () => {
    axios
      .get(`${API_BASE_URL}/warehouses/${id}/inventories`)
      .then((response) => {
        setWarehouseInventory(response.data);
        setHasLoaded2(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchWarehouseDetails();
    fetchInventoryForWarehouse();
  }, []);

  const handleDeleteClick = (id, item_name) => {
    setShowDeletePopup(true);
    setDeleteInventoryID(id);
    setInventorToDelete(item_name);
  };

  // to  close delete component using cancel or X
  const handleCloseDeleteComponent = () => {
    setShowDeletePopup(false);
    setDeleteInventoryID(null);
  };

  const handleDeleteConfirmation = () => {
    // Make a DELETE request to delete the warehouse
    axios
      .delete(`${API_BASE_URL}/inventories/${deleteInventoryID}`)
      .then(() => {
        console.log(
          `Successfully deleted inventory item with ID: ${deleteInventoryID}`
        );
        setShowDeletePopup(false);
        setDeleteInventoryID(null);
        fetchInventoryForWarehouse();
      })
      .catch((error) => {
        console.error(`Error deleting inventory item: ${error}`);
      });
  };

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
              <p className="info">
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
                <p className="info">
                  {warehouse.contact_name}, <span></span>
                  <br className="warehouseDetails__info-address--new-line"></br>
                  {warehouse.contact_position}
                </p>
              </div>
              <div className="warehouseDetails__info-column warehouseDetails__info-column--right">
                <h4 className="warehouseDetails__info-headers">
                  CONTACT INFORMATION:
                </h4>
                <p className="info">
                  {warehouse.contact_phone}, <span></span>
                  <br className="warehouseDetails__info-address--new-line"></br>
                  {warehouse.contact_email}
                </p>
              </div>
            </div>
          </section>

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
            inventoryList={warehouseInventory}
            warehouseName={warehouse.warehouse_name}
            onDeleteClick={handleDeleteClick}
          />
        </main>
      </>
    );
  }
}

export default WareHouseDetailPage;
