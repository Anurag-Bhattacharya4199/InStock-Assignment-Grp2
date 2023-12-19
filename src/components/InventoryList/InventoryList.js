import "./InventoryList.scss";
import { NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import DeleteButton from "../../assets/icons/delete_outline-24px.svg";
import EditIcon from "../../assets/icons/edit-24px.svg";
import Chevron from "../../assets/icons/chevron_right-24px.svg";
import SortDefault from "../../assets/icons/sort-24px.svg";

const InventoryList = (props) => {
  let { id } = useParams();
  const [checkData, setCheckData] = useState("flex");

  useEffect(() => {
    if (id) {
      setCheckData("none");
    }
  }, []);

  return (
    <div className="inventoryList">
      {/* SEARCH COMPONENT */}

      {/* INVENTORY-LIST TABLET && DESKTOP HEADER CONTAINER  */}
      <div className="inventoryList-headers inventory-width">
        {/* <div className="inventoryList--title-wrapper"> */}
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
          <div className="inventoryList-headers__header-container inventory-width">
            <h4 className="inventoryList-headers__header-container--header">
              CATEGORY
            </h4>
            <img
              className="inventoryList-headers__header-container--sort-icon"
              src={SortDefault}
              alt="sort"
            />
          </div>
        {/* </div> */}
        {/* <div className="inventoryList--title-wrapper"> */}
          <div className="inventoryList-headers__header-container inventory-width">
            <h4 className="inventoryList-headers__header-container--header">
              STATUS
            </h4>
            <img
              className="inventoryList-headers__header-container--sort-icon"
              src={SortDefault}
              alt="sort"
            />
          </div>
          <div className="inventoryList-headers__header-container inventory-width">
            <h4 className="inventoryList-headers__header-container--header">
              QTY
            </h4>
            <img
              className="inventoryList-headers__header-container--sort-icon"
              src={SortDefault}
              alt="sort"
            />
          </div>
          <div style={{ display: checkData }} className="inventoryList-headers__header-container inventory-width">
            <h4 className="inventoryList-headers__header-container--header">
              WAREHOUSE
            </h4>
            <img
              className="inventoryList-headers__header-container--sort-icon"
              src={SortDefault}
              alt="sort"
            />
          </div>
        {/* </div> */}
        <div key="06" className="inventoryList-headers__header-container inventory-width">
          <h4 className="inventoryList-headers__header-container--header">
            ACTIONS
          </h4>
        </div>
      </div>
      {props.inventoryList.map((item) => (
        <div key={item.id} className="inventoryList-card">
          {/* INVENTORY ITEM &&  CATEGORY CONTAINER */}
          {/* <div className="inventoryList-card__inventory-and-category-container"> */}
            <div className="inventory-container inventory-width">
              <h4 className="inventory-container__header inventory-width">INVENTORY</h4>
              <NavLink className="inventory-container__link inventory-width">
                <p className="p-medium inventory-container__link--inventory-item">
                  {item.item_name}
                </p>
                <img
                  src={Chevron}
                  alt="chevron"
                  className="inventory-container__link--icon"
                />
              </NavLink>
            </div>
            <div className="category-container  inventory-width">
              <h4 className="category-container__header">CATEGORY</h4>
              <p className="p-medium category-container__category">
                {item.category}
              </p>
            </div>
          {/* </div> */}
          {/* STATUS, QUANTITY && WAREHOUSE CONTAINER */}
          {/* <div className="inventoryList-card__status-quatity-warehouse-container"> */}
            <div className="status-container inventory-width">
              <h4 className="status-container__header inventory-width">STATUS</h4>
              <p
                className={`inventory-width p-medium  ${item.status === "In Stock"
                    ? "status-container__in-stock"
                    : "status-container__out-of-stock"
                  }`}
              >
                {item.status}
              </p>
            </div>
            <div className="quantity-container inventory-width">
              <h4 className="quantity-container__header inventory-width">QTY</h4>
              <p className="p-medium quantity-container__quantity inventory-width">
                {item.quantity}
              </p>
            </div>
            <div style={{ display: checkData }} className="int-warehouse-container inventory-width">
              <h4 className="int-warehouse-container__header inventory-width">WAREHOUSE</h4>
              <p className="p-medium int-warehouse-container__warehouse-name inventory-width">
                {item.warehouse_name}
              </p>
            </div>
          {/* </div> */}
          {/* ICONS CONTAINER */}
          <div className="inventoryList-card__icon-container inventory-width">
            <img
              src={DeleteButton}
              alt="delete icon"
              className="inventoryList__icon-container--delete-button"
            ></img>
            <img
              src={EditIcon}
              alt="edit icon"
              className="inventoryList__icon-container--edit-button"
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InventoryList;
