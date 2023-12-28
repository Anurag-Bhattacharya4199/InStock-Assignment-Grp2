import { Link, useNavigate } from "react-router-dom";
import ArroWBack from "../../assets/icons/arrow_back-24px.svg";
import "./InventoryAdd.scss";
import { useState, useEffect } from "react";
import axios from "axios";

function InventoryAdd() {
  const API_BASE_URL = "http://localhost:8080/warehouses";
  const [warehouses, setWarehouses] = useState([]);
  const [inStock, setInstock] = useState(false);

  const fetchWarehouseList = () => {
    axios
      .get(API_BASE_URL)
      .then((response) => {
        const warehouseData = response.data;
        setWarehouses(warehouseData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const PopulateOptions = () => {
    let select = document.getElementById("warehouseOptions");
    warehouses.map((item) => {
      let option = document.createElement("option");
      option.value = item.warehouse_name;
      option.text = item.warehouse_name;
      select.appendChild(option);
    });
  };

  useEffect(() => {
    fetchWarehouseList();
    PopulateOptions();
  }, []);

  const handleInStockAvailabilityFalse = () => {
    setInstock(false);
  };

  const handleInStockAvailabilityTrue = () => {
    setInstock(true);
  };

  return (
    <main className="addInventoryItem">
      <section className="addInventoryItem__header">
        <div className="addInventoryItem__header-info">
          <Link to="/inventories">
            <img
              src={ArroWBack}
              alt="Go Back"
              className="addInventoryItem__header-arrowback"
            />
          </Link>
          <h1 className="addWarehouse__header-title">Add New Inventory Item</h1>
        </div>
      </section>
      <form className="addInventoryItem__form">
        <div className="addInventoryItem__form-mainInfo">
          <div className="addInventoryItem__form-itemDetails">
            <h2>Item Details</h2>
            <article className="addInventoryItem__form-itemName">
              <label className="p-medium">Item Name</label>
              <input
                placeholder="Item Name"
                className="addInventoryItem__form-itemNameInp"
              />
            </article>
            <article className="addInventoryItem__form-description">
              <label className="p-medium">Description</label>
              <textarea
                placeholder="Please enter a brief item description..."
                className="addInventoryItem__form-descriptionInp"
              ></textarea>
            </article>
            <article className="addInventoryItem__form-category">
              <label className="p-medium">Category</label>
              <select
                className="addInventoryItem__form-categoryOptions"
                placeholder="Please select"
              >
                <option value="" disabled selected>
                  Please Select
                </option>
                <option value="Electronics">Electronics</option>
                <option value="Apparel">Apparel</option>
                <option value="Accessories">Accessories</option>
                <option value="Health">Health</option>
              </select>
            </article>
          </div>
          <div className="addInventoryItem__form-itemAvailability">
            <h2 className="addInventoryItem__form-header">Item Availability</h2>
            <article className="addInventoryItem__form-status">
              <label className="p-medium">Status</label>
              <span className="addInventoryItem__form-statusOptions">
                <label className="addInventoryItem__form-inStock">
                  <input
                    type="radio"
                    className="addInventoryItem__form-inStockInp"
                    onClick={handleInStockAvailabilityTrue}
                  />
                  In stock
                </label>
                <label className="addInventoryItem__form-outOfStock">
                  <input
                    type="radio"
                    className="addInventoryItem__form-outofStockInp"
                    onClick={handleInStockAvailabilityFalse}
                  />
                  Out of stock
                </label>
              </span>
            </article>
            <article className="addInventoryItem__form-qty">
              <label className="p-medium">Quantity</label>
              <input
                placeholder="0"
                className={`addInventoryItem__form-qtyInput ${
                  !inStock ? "addInventoryItem__form-displayNone" : ""
                }`}
              />
            </article>
            <article className="addInventoryItem__form-warehouse">
              <label className="p-medium">WareHouse</label>
              <select
                className="addInventoryItem__form-warehouseOptions"
                placeholder="Please select"
                id="warehouseOptions"
              >
                <option value="" disabled selected>
                  Please Select
                </option>
              </select>
            </article>
          </div>
        </div>
        <div className="addInventoryItem__form-buttons">
          <button className="addInventoryItem__form-cancelBtn">Cancel</button>
          <button className="addInventoryItem__form-addBtn">+ Add Item</button>
        </div>
      </form>
    </main>
  );
}

export default InventoryAdd;
