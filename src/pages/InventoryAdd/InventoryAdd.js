import { useNavigate } from "react-router-dom";
import "./InventoryAdd.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import ErrorIcon from "../../assets/icons/error-24px.svg";
import SearchHeader from "../../components/SearchHeader/SearchHeader";

function InventoryAdd() {
  const API_BASE_URL = "http://localhost:8080/warehouses";
  const [warehouses, setWarehouses] = useState([]);
  const [inStock, setInstock] = useState("true");

  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [itemStatus, setItemStatus] = useState("In Stock");
  const [qty, setQty] = useState("");
  const [warehouse, setWarehouse] = useState("");

  const [error, setError] = useState({
    itemNameError: false,
    descriptionError: false,
    categoryError: false,
    qtyError: false,
    warehouseError: false,
  });

  const navigate = useNavigate();

  useEffect(() => {
    //console.log(itemStatus);
    if (itemStatus === "In Stock") {
      setInstock("true");
    } else {
      setInstock("false");
    }
  }, [itemStatus]);

  const postWarehouse = async (
    warehouseIDVal,
    itemNameVal,
    descriptionVal,
    categoryVal,
    statusVal,
    qtyVal
  ) => {
    const newItem = {
      warehouse_id: warehouseIDVal,
      item_name: itemNameVal,
      description: descriptionVal,
      category: categoryVal,
      status: statusVal,
      quantity: qtyVal,
    };
    console.log(newItem);
    try {
      axios.post("http://localhost:8080/inventories", newItem, {
        "Content-Type": "application/json",
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleChangeItemName = (event) => {
    const itemName = event.target.value;
    setItemName(itemName);
  };

  const handleChangeDescription = (event) => {
    const description = event.target.value;
    setDescription(description);
  };

  const handleChangeCategory = (event) => {
    const category = event.target.value;
    setCategory(category);
  };

  const handleChangeQty = (event) => {
    const qty = event.target.value;
    setQty(qty);
  };

  const handleChangeWarehouse = (event) => {
    const warehouse = event.target.value;
    setWarehouse(warehouse);
  };

  const isFormValid = () => {
    let formComplete = true;

    let errorState = {
      itemNameError: false,
      descriptionError: false,
      categoryError: false,
      qtyError: false,
      warehouseError: false,
    };

    if (itemName.length === 0) {
      errorState.itemNameError = true;
      formComplete = false;
    }

    if (description.length === 0) {
      errorState.descriptionError = true;
      formComplete = false;
    }

    if (category.length === 0) {
      errorState.categoryError = true;
      formComplete = false;
    }

    //Qty Validation to be worked on
    if (qty.length === 0 && inStock) {
      errorState.qtyError = true;
      formComplete = false;
    }

    if (warehouse.length === 0) {
      errorState.warehouseError = true;
      formComplete = false;
    }

    setError(errorState);

    return formComplete;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isFormValid()) {
      setItemName("");
      setDescription("");
      setCategory("Please Select");
      setQty("");
      setWarehouse("Please Select");
      let warehouseId = warehouses.filter((wh) => {
        return wh.warehouse_name === warehouse;
      })[0].id;
      //console.log(warehouseId);
      //console.log(qty);
      //My attempt for Out of Stock Functionality
      // if (!inStock) {
      //   itemStatus = "Out of Status";
      //   qty = 0;
      // }
      postWarehouse(
        warehouseId,
        itemName,
        description,
        category,
        itemStatus,
        qty
      );
      alert("New Item added");
      navigate("/inventories");
    } else {
      return;
    }
  };

  const handleCancel = () => {
    alert("Item Add Cancelled");
    navigate("/inventories");
  };

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

  useEffect(() => {
    fetchWarehouseList();
  }, []);

  return (
    <main className="addInventoryItem">
      <SearchHeader title="Add Inventory Item" />
      <form className="addInventoryItem__form" onSubmit={handleSubmit}>
        <div className="addInventoryItem__form-mainInfo">
          <div className="addInventoryItem__form-itemDetails">
            <h2>Item Details</h2>
            <article className="addInventoryItem__form-itemName">
              <label className="p-medium">Item Name</label>
              <input
                className={`addInventoryItem__form-itemNameInp ${
                  error.itemNameError
                    ? "addInventoryItem__form-invalidInput"
                    : ""
                }`}
                placeholder="Item Name"
                name="itemName"
                htmlFor="itemName"
                value={itemName}
                onChange={handleChangeItemName}
              />
              <span
                className={`addInventoryItem__form-errorMsg ${
                  error.itemNameError
                    ? "addInventoryItem__form-errorMsgInvalidInput"
                    : ""
                }`}
              >
                <img src={ErrorIcon} alt="Error Icon" />
                This field is required
              </span>
            </article>
            <article className="addInventoryItem__form-description">
              <label className="p-medium">Description</label>
              <textarea
                className={`addInventoryItem__form-itemNameInp ${
                  error.descriptionError
                    ? "addInventoryItem__form-invalidInput"
                    : ""
                }`}
                placeholder="Please enter a brief item description..."
                name="description"
                htmlFor="description"
                value={description}
                onChange={handleChangeDescription}
              ></textarea>
              <span
                className={`addInventoryItem__form-errorMsg ${
                  error.itemNameError
                    ? "addInventoryItem__form-errorMsgInvalidInput"
                    : ""
                }`}
              >
                <img src={ErrorIcon} alt="Error Icon" />
                This field is required
              </span>
            </article>
            <article className="addInventoryItem__form-category">
              <label className="p-medium">Category</label>
              <select
                className={`addInventoryItem__form-categoryOptions ${
                  error.categoryError
                    ? "addInventoryItem__form-invalidInput"
                    : ""
                }`}
                placeholder="Please Select"
                name="category"
                htmlFor="category"
                value={category}
                onChange={handleChangeCategory}
              >
                <option value="Please Select">Please Select</option>
                <option value="Electronics">Electronics</option>
                <option value="Apparel">Apparel</option>
                <option value="Accessories">Accessories</option>
                <option value="Health">Health</option>
                <option value="Gear">Gear</option>
              </select>
              <span
                className={`addInventoryItem__form-errorMsg ${
                  error.itemNameError
                    ? "addInventoryItem__form-errorMsgInvalidInput"
                    : ""
                }`}
              >
                <img src={ErrorIcon} alt="Error Icon" />
                This field is required
              </span>
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
                    htmlFor="status"
                    value="In Stock"
                    defaultChecked
                    onClick={() => setItemStatus("In Stock")}
                  />
                  In stock
                </label>
                <label className="addInventoryItem__form-outOfStock">
                  <input
                    type="radio"
                    className="addInventoryItem__form-outofStockInp"
                    id="Out of Stock"
                    name="status"
                    htmlFor="status"
                    value="Out of Stock"
                    onClick={() => setItemStatus("")}
                  />
                  Out of stock
                </label>
              </span>
            </article>
            <article className={`addInventoryItem__form-qty ${inStock}`}>
              <label className="p-medium">Quantity</label>
              <input
                className={`addInventoryItem__form-qtyInput ${
                  error.qtyError ? "addInventoryItem__form-invalidInput" : ""
                }`}
                placeholder="0"
                name="qty"
                htmlFor="qty"
                value={qty}
                onChange={handleChangeQty}
              />
              <span
                className={`addInventoryItem__form-errorMsg ${
                  error.qtyError
                    ? "addInventoryItem__form-errorMsgInvalidInput"
                    : ""
                }`}
              >
                <img src={ErrorIcon} alt="Error Icon" />
                This field is required
              </span>
            </article>
            <article className="addInventoryItem__form-warehouse">
              <label className="p-medium">WareHouse</label>
              <select
                className={`addInventoryItem__form-warehouseOptions ${
                  error.warehouseError
                    ? "addInventoryItem__form-invalidInput"
                    : ""
                }`}
                placeholder="Please select"
                id="warehouseOptions"
                defaultValue="Please select"
                onChange={handleChangeWarehouse}
              >
                <option value="Please Select">Please Select</option>
                {warehouses.map((item) => {
                  return <option key={item.id}>{item.warehouse_name}</option>;
                })}
              </select>
              <span
                className={`addInventoryItem__form-errorMsg ${
                  error.warehouseError
                    ? "addInventoryItem__form-errorMsgInvalidInput"
                    : ""
                }`}
              >
                <img src={ErrorIcon} alt="Error Icon" />
                This field is required
              </span>
            </article>
          </div>
        </div>
        <div className="addInventoryItem__form-buttons">
          <button
            className="addInventoryItem__form-cancelBtn"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button className="addInventoryItem__form-addBtn">+ Add Item</button>
        </div>
      </form>
    </main>
  );
}

export default InventoryAdd;
