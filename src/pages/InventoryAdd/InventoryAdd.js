import { Link, useNavigate } from "react-router-dom";
import ArroWBack from "../../assets/icons/arrow_back-24px.svg";
import "./InventoryAdd.scss";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import SearchHeader from "../../components/SearchHeader/SearchHeader";

function InventoryAdd() {
  const API_BASE_URL = "http://localhost:8080/warehouses";
  const [warehouses, setWarehouses] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [inStock, setInstock] = useState(false);
  // const warehouseOptionsRef = useRef(null);
  // const warehouseOptionLRef = warehouseOptionsRef.current;

  const fetchWarehouseList = () => {
    axios
      .get(API_BASE_URL)
      .then((response) => {
        const warehouseData = response.data;
        setWarehouses(warehouseData);
        setHasLoaded(true);
      })
      // .then(() => {
      //   PopulateOptions();
      // })
      .catch((error) => {
        console.error(error);
      });
  };

  // const PopulateOptions = () => {
  //   let select = warehouseOptionsLRef;
  //   //console.log(warehouses);
  //   warehouses.map((item) => {
  //     let option = warehouseOptionLRef;
  //     //console.log(option);
  //     option.value = item.warehouse_name;
  //     option.text = item.warehouse_name;
  //     select.appendChild(option);
  //   });
  // };

  useEffect(() => {
    fetchWarehouseList();
    //PopulateOptions();
  }, []);

  // if (hasLoaded) {
  //   useEffect(() => {
  //     PopulateOptions();
  //   });
  // }

  const handleInStockAvailabilityFalse = () => {
    setInstock(false);
  };

  const handleInStockAvailabilityTrue = () => {
    setInstock(true);
  };

  return (
    <main className="addInventoryItem">
      <SearchHeader title="Add Inventory Item" />
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
                defaultValue="Please select"
              >
                <option value="Please Select">Please Select</option>
                <option value="Electronics">Electronics</option>
                <option value="Apparel">Apparel</option>
                <option value="Accessories">Accessories</option>
                <option value="Health">Health</option>
                <option value="Gear">Gear</option>
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
                    id="In Stock"
                    name="status"
                    onClick={handleInStockAvailabilityTrue}
                  />
                  In stock
                </label>
                <label className="addInventoryItem__form-outOfStock">
                  <input
                    type="radio"
                    className="addInventoryItem__form-outofStockInp"
                    id="Out of Stock"
                    name="status"
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
                  inStock ? "" : "addInventoryItem__form-displayNone"
                }`}
              />
            </article>
            <article className="addInventoryItem__form-warehouse">
              <label className="p-medium">WareHouse</label>
              <select
                className="addInventoryItem__form-warehouseOptions"
                placeholder="Please select"
                id="warehouseOptions"
                //defaultValue="Please select"
                //ref={warehouseOptionsRef}
              >
                <option value="Please Select">Please Select</option>
                {warehouses.map((item) => {
                  return <option key={item.id}>{item.warehouse_name}</option>;
                })}
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
