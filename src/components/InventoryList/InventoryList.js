import "./InventoryList.scss";
import { NavLink } from "react-router-dom";
import DeleteButton from "../../assets/icons/delete_outline-24px.svg";
import EditIcon from "../../assets/icons/edit-24px.svg";
import Chevron from "../../assets/icons/chevron_right-24px.svg";
import SortDefault from "../../assets/icons/sort-24px.svg";
import InventoryDetail from "../InventoryDetail/InventoryDetail";
import { useState, useEffect } from "react";

const InventoryList = (props) => {

  const [showItemDetails, setShowItemDetails] = useState(false);

  const handleItemDetailClick = (id, warehouse_name, category) => {
    setShowItemDetails(true);
console.log("item ID: ", id)
console.log("warehouse name: ", warehouse_name)
console.log("category: ", category)
    // setDeleteWarhouseID(String(id));
    // setWarehouseToDelete(warehouse_name.toString());
    // console.log(id)
  };


  return (
    <>
    {!showItemDetails && (
      <div className="inventoryList">
        {/* SEARCH COMPONENT */}

        {/* INVENTORY-LIST TABLET && DESKTOP HEADER CONTAINER  */}
        <div className="inventoryList-headers">
          <div className="inventoryList-headers__header-container">
            <h4 className="inventoryList-headers__header-container--header">
              INVENTORY ITEM
            </h4>
            <img
              className="inventoryList-headers__header-container--sort-icon"
              src={SortDefault}
              alt="sort"
            />
          </div>
          <div className="inventoryList-headers__header-container header-category">
            <h4 className="inventoryList-headers__header-container--header">
              CATEGORY
            </h4>
            <img
              className="inventoryList-headers__header-container--sort-icon"
              src={SortDefault}
              alt="sort"
            />
          </div>
          <div className="inventoryList-headers__header-container header-status">
            <h4 className="inventoryList-headers__header-container--header">
              STATUS
            </h4>
            <img
              className="inventoryList-headers__header-container--sort-icon"
              src={SortDefault}
              alt="sort"
            />
          </div>
          <div className="inventoryList-headers__header-container header-quantity">
            <h4 className="inventoryList-headers__header-container--header">
              QTY
            </h4>
            <img
              className="inventoryList-headers__header-container--sort-icon"
              src={SortDefault}
              alt="sort"
            />
          </div>
          <div className="inventoryList-headers__header-container header-warehouse">
            <h4 className="inventoryList-headers__header-container--header">
              WAREHOUSE
            </h4>
            <img
              className="inventoryList-headers__header-container--sort-icon"
              src={SortDefault}
              alt="sort"
            />
          </div>
          <div
            key="06"
            className="inventoryList-headers__header-container header-actions"
          >
            <h4 className="inventoryList-headers__header-container--header">
              ACTIONS
            </h4>
          </div>
        </div>
        {props.inventoryList.map((item) => (
          <div key={item.id} className="inventoryList-card">
            {/* INVENTORY ITEM &&  CATEGORY CONTAINER */}
            <div className="inventoryList-card__inventory-and-category-container">
              <div className="inventory-container">
                <h4 className="inventory-container__header">INVENTORY</h4>
                <button onClick={() => handleItemDetailClick(item.id, item.warehouse_name, item.category)} className="inventory-container__link">
                  <p className="p-medium inventory-container__link--inventory-item">
                    {item.item_name}
                  </p>
                  <img
                    src={Chevron}
                    alt="chevron"
                    className="inventory-container__link--icon"
                  />
                </button>
              </div>
              <div className="category-container">
                <h4 className="category-container__header">CATEGORY</h4>
                <p className="p-medium category-container__category">
                  {item.category}
                </p>
              </div>
            </div>
            {/* STATUS, QUANTITY && WAREHOUSE CONTAINER */}
            <div className="inventoryList-card__status-quatity-warehouse-container">
              <div className="status-container">
                <h4 className="status-container__header">STATUS</h4>
                <p
                  className={`p-medium status-container__status ${item.status === "In Stock"
                    ? "status-container__in-stock"
                    : "status-container__out-of-stock"
                    } `}
                >
                  {item.status}
                </p>
              </div>
              <div className="quantity-container">
                <h4 className="quantity-container__header">QTY</h4>
                <p className="p-medium quantity-container__quantity">
                  {item.quantity}
                </p>
              </div>
              <div className="int-warehouse-container">
                <h4 className="int-warehouse-container__header">WAREHOUSE</h4>
                <p className="p-medium int-warehouse-container__warehouse-name">
                  {item.warehouse_name}
                </p>
              </div>
            </div>
            {/* ICONS CONTAINER */}
            <div className="inventoryList-card__icon-container">
              <img
                src={DeleteButton}
                alt="delete icon"
                className="inventoryList__icon-container--delete-button action-icon"
              ></img>
              <img
                src={EditIcon}
                alt="edit icon"
                className="inventoryList__icon-container--edit-button action-icon"
              ></img>
            </div>
          </div>
        ))}
      </div>)}
      {showItemDetails && (
        <InventoryDetail
          // item_name={item.item_name}
          description={props.description}
          category={props.category}
          status={props.status}
          quantity={props.quantity}
          warehouse_name={props.warehouse_name}
        />

      )}
    </>
  );
};

export default InventoryList;
