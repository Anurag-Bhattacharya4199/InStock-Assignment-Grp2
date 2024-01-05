import "./EditInventory.scss";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import SearchHeader from "../../components/SearchHeader/SearchHeader";
import { editInventory } from "../../utils/utils";


function EditInventory() {
  const location = useLocation();
  const navigate = useNavigate();
  let { id } = useParams();
  // const [itemId, setItemId] = useState(id);
  const [itemCategory, setItemCategory] = useState('');
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemStatus, setItemStatus] = useState('');
  const [itemStatusTF, setItemStatusTF] = useState(true);
  const [warehouseName, setWarehouseName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');
  const [warehouses, setWarehouses] = useState([]);
  const [warehouseId, setWarehouseId] = useState('');
  
  const [hasLoaded, setHasLoaded] = useState(false);
  const [hasLoaded2, setHasLoaded2] = useState(false);
  const API_BASE_URL = "http://localhost:8080/";

  useEffect(() => {
    fetchWarehouseList(); // Fetch warehouse list when component mounts
    fetchInventory();
  }, []); // Empty dependency array to trigger effect only on mount

  

  const fetchInventory = () => {
    axios
      .get(`${API_BASE_URL}inventories/${id}`)
      .then((response) => {
        setWarehouseId(response.data.warehouse_id);
        setItemName(response.data.item_name);
        setItemDescription(response.data.description);
        setItemCategory(response.data.category);
        setItemStatus(response.data.status);
        setItemQuantity(response.data.quantity);
  
        if (response.status === 200){
          setHasLoaded2(true)
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [error, setError] = useState({
    itemNameError: false,
    descriptionError: false,
    categoryError: false,
    statusError: false,
    warehouseNameError: false,
  });

  const handleChangeItemName = (event) => {
    setItemName(event.target.value);
  };

  const handleChangeItemDescription = (event) => {
    setItemName(event.target.value);
  };

  const handleChangeItemQuantity = (event) => {
    setItemQuantity(event.target.value);
  };

  const handleChangeWarehouse = (event) => {
    setWarehouseName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // write code here to find warehouseId from selected warehouse using filter
    let tempWarehouseId = warehouses.filter((wh) => {
      return wh.warehouse_name === warehouseName;
    })[0].id;

    editInventory(
      id,
      tempWarehouseId,
      itemName,
      itemDescription,
      itemCategory,
      itemStatus,
      itemQuantity
    );
  };

  const handleCancel = (event) => {
    event.preventDefault();
    navigate(-1);
  };

  const fetchWarehouseList = () => {
    axios
      .get(`${API_BASE_URL}warehouses`)
      .then((response) => {
        setWarehouses(response.data);
        
        if (response.status === 200){
          setHasLoaded(true)
          console.log("hasLoaded ", hasLoaded)
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    //selects the proper default radio button
    if (itemStatus === "In Stock") {
      setItemStatusTF(true);
    } else {
      setItemStatusTF(false);
    }
  }, []);

  // if ((hasLoaded === true) && (hasLoaded2 === true)) {
    return (
      <main className="editInv">
        <SearchHeader title="Edit Inventory Item" />
        <form className="editInv__form" onSubmit={handleSubmit}>
          <section className="editInv__form__content">
            <article className="editInv__form__content__details">
              <h2 className="editInv__form__content__details--title">
                Item Details
              </h2>
              <label className="p-medium">Item Name</label>
              <input
                className={`editInv__form__content__details__input ${
                  error.warehouseNameError ? "editInv__form--invalidInput" : ""
                }`}
                placeholder={itemName}
                name={itemName}
                form={itemName}
                value={itemName}
                onChange={handleChangeItemName}
              />
              <label className="p-medium">Description</label>
              <textarea
                rows={7}
                className={`editInv__form__content__details__input--area ${
                  error.warehouseNameError ? "editInv__form--invalidInput" : ""
                }`}
                placeholder={itemDescription}
                name={itemDescription}
                form={itemDescription}
                value={itemDescription}
                onChange={handleChangeItemDescription}
              />
              <label className="p-medium">Category</label>
              <select
                name="category"
                className="editInv__form__content__details__input"
                defaultValue={itemCategory}
              >
                <option value="Accessories">Accessories</option>
                <option value="Apparel">Apparel</option>
                <option value="Electronics">Electronics</option>
                <option value="Gear">Gear</option>
                <option value="Health">Health</option>
              </select>
            </article>

            <article className="editInv__form__content__avail">
              <h2 className="editInv__form__content__avail--title">
                Item Availability
              </h2>
              <label className="p-medium">Status</label>
              <div className="editInv__form__content__avail__stock-status">
                <div className="editInv__form__content__avail__stock-status--in-stock">
                  <input
                    type="radio"
                    id="inStock"
                    name="inStock"
                    value="In Stock"
                    defaultChecked={itemStatusTF}
                    onClick={() => setItemStatus("In Stock")}
                  />
                  <label form="inStock"> In Stock</label>
                </div>
                <div className="editInv__form__content__avail__stock-status--out-of-stock">
                  <input
                    type="radio"
                    id="outOfStock"
                    name="inStock"
                    value="Out of Stock"
                    defaultChecked={!itemStatusTF}
                    onClick={() => setItemStatus("Out of Stock")}
                  />
                  <label form="inStock"> Out of Stock</label>
                </div>
              </div>
              <label className={`p-medium ${itemStatusTF}`}>Quantity</label>
              <input
                className={`editInv__form__content__details__input ${
                  error.warehouseNameError ? "editInv__form--invalidInput" : ""
                } ${itemStatusTF}`}
                placeholder={itemQuantity}
                name={itemQuantity}
                form={itemQuantity}
                value={itemQuantity}
                onChange={handleChangeItemQuantity}
              />

              <label className="p-medium">Warehouse</label>
              <select
                name="warehouse"
                className="editInv__form__content__details__input"
                onChange={handleChangeWarehouse}
                defaultValue={warehouseName}
              >
                {warehouses.map((item) => (
                  <option key={item.id} value={item.warehouse_name}>
                    {item.warehouse_name}
                  </option>
                ))}
              </select>
            </article>
          </section>
          <div className="editInv__form__buttons">
            <button
              className="editInv__form__buttons--cancel"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button className="editInv__form__buttons--add" type="submit">
              Save
            </button>
          </div>
        </form>
      </main>
    );
  // } else{
  //   return null;
  // }
}

export default EditInventory;
