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
    if (id){
      setCheckData("none");
    }
  }, []);

  return (
    <div className="">
      {/* SEARCH COMPONENT */}
      
      {/* INVENTORY-LIST TABLET && DESKTOP HEADER CONTAINER  */}
      <div className="inventoryList">
        <div className="inventoryList--title-wrapper">
        <div className="inventoryList__header__item">
          <h4 className="inventoryList__header__item--text">
            INVENTORY ITEM
          </h4>
          <img
            className="inventoryList__header--sort-icon"
            src={SortDefault}
            alt="sort"
          />
        </div>
        <div className="inventoryList__header__category">
          <h4 className="">
            CATEGORY
          </h4>
          <img
            className="inventoryList__header--sort-icon"
            src={SortDefault}
            alt="sort"
          />
        </div>
        </div>
        <div className="inventoryList--title-wrapper">
        <div className="inventoryList__header__status">
          <h4 className="">
            STATUS
          </h4>
          <img
            className="inventoryList__header--sort-icon"
            src={SortDefault}
            alt="sort"
          />
        </div>
        <div className="inventoryList__header__quantity">
          <h4 className="">
            QTY
          </h4>
          <img
            className="inventoryList__header--sort-icon"
            src={SortDefault}
            alt="sort"
          />
        </div>
        <div style={{display: checkData}} className="inventoryList__header__warehouse">
          <h4 className="">
            WAREHOUSE
          </h4>
          <img
            className="inventoryList__header--sort-icon"
            src={SortDefault}
            alt="sort"
          />
        </div>
        </div>
        <div key="06" className="inventoryList__header__actions">
          <h4 className="">
            ACTIONS
          </h4>
        </div>
      </div>
      {props.inventoryList.map((item) => (
        <div key={item.id} className="inventoryList">
          {/* INVENTORY ITEM &&  CATEGORY CONTAINER */}
          <div className="inventoryList__header__item">
            <div className="">
              <h4 className="">INVENTORY</h4>
              <NavLink className="">
                <p className="p-medium">
                  {item.item_name}
                </p>
                <img
                  src={Chevron}
                  alt="chevron"
                  className=""
                />
              </NavLink>
            </div>
            <div className="inventoryList__header__category">
              <h4 className="">CATEGORY</h4>
              <p className="p-medium">
                {item.category}
              </p>
            </div>
          </div>
          {/* STATUS, QUANTITY && WAREHOUSE CONTAINER */}
          <div className="">
            <div className="">
              <h4 className="">STATUS</h4>
              <p
                className={`p-medium  ${
                  item.status === "In Stock"
                    ? "status-container__in-stock"
                    : "status-container__out-of-stock"
                }`}
              >
                {item.status}
              </p>
            </div>
            <div className="">
              <h4 className="">QTY</h4>
              <p className="p-medium">
                {item.quantity}
              </p>
            </div>
            <div style={{display: checkData}} className="">
              <h4 className="">WAREHOUSE</h4>
              <p className="p-medium">
                {item.warehouse_name}
              </p>
            </div>
          </div>
          {/* ICONS CONTAINER */}
          <div className="">
            <img
              src={DeleteButton}
              alt="delete icon"
              className=""
            ></img>
            <img
              src={EditIcon}
              alt="edit icon"
              className=""
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InventoryList;
