import './EditInventory.scss'
import deleteIcon from "../../assets/icons/delete_outline-24px.svg"
import editIcon from "../../assets/icons/edit-24px.svg"
import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchHeader from "../../components/SearchHeader/SearchHeader";

function EditInventory() {
    const location = useLocation()
    const [itemId, setItemId] = useState(location.state.itemId)
    const [itemCategory, setItemCategory] = useState(location.state.itemCategory)
    const [itemName, setItemName] = useState(location.state.itemName)
    const [itemDescription, setItemDescription] = useState(location.state.itemDescription)
    const [itemStatus, setItemStatus] = useState(location.state.itemStatus)
    const [warehouseName, setWarehouseName] = useState(location.state.warehouseName)
    const [itemQuantity, setItemQuantity] = useState(location.state.itemQuantity)
    const [warehouses, setWarehouses] = useState([]);
    const [hasLoaded, setHasLoaded] = useState(false);
    const API_BASE_URL = "http://localhost:8080/warehouses";

    const [error, setError] = useState({
        itemNameError: false,
        descriptionError: false,
        categoryError: false,
        statusError: false,
        warehouseNameError: false
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
    const handleSubmit = (event) => {
        event.preventDefault();

    };

    const handleCancel = (event) => {
        event.preventDefault();

    };

    const fetchWarehouseList = () => {
        axios
            .get(API_BASE_URL)
            .then((response) => {
                const warehouseData = response.data;
                setWarehouses(warehouseData);
                setHasLoaded(true);
            })
            .catch((error) => {
                console.error(error);
            });
    };
    useEffect(() => {
        fetchWarehouseList(); // Fetch warehouse list when component mounts
    }, []); // Empty dependency array to trigger effect only on mount

    function optionSelected (whName){
        if (warehouseName === whName){
            console.log(whName)
            return "selected"
        } else{
            return ""
        }
    }

    if (hasLoaded){
        return (
            <main className='editInv'>
                <SearchHeader title="Edit Inventory Item" />
                <form className='editInv__form' onSubmit={handleSubmit}>
                    <section className='editInv__form__content'>
                        <article className='editInv__form__content__details'>
                            <h2 className='editInv__form__content__details--title'>Item Details</h2>
                            <label className="p-medium">Item Name</label>
                            <input
                                className={`editInv__form__content__details__input ${error.warehouseNameError
                                    ? "editInv__form--invalidInput"
                                    : ""
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
                                className={`editInv__form__content__details__input--area ${error.warehouseNameError
                                    ? "editInv__form--invalidInput"
                                    : ""
                                    }`}
                                placeholder={itemDescription}
                                name={itemDescription}
                                form={itemDescription}
                                value={itemDescription}
                                onChange={handleChangeItemDescription}
                            />
                            <label className="p-medium">Category</label>
                            <select name='category' className="editInv__form__content__details__input">
                                <option value="">Please Select</option>
                                <option value="Accessories">Accessories</option>
                                <option value="Apparel">Apparel</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Gear">Gear</option>
                                <option value="Health">Health</option>
                            </select>
                        </article>
    
                        <article className='editInv__form__content__avail'>
                            <h2 className='editInv__form__content__avail--title'>Item Availability</h2>
                            <label className="p-medium">Status</label>
                            <div className='editInv__form__content__avail__stock-status'>
                                <div className='editInv__form__content__avail__stock-status--in-stock'>
                                    <input type="radio" id="inStock" name="inStock" value="In Stock" />
                                    <label form="inStock"> In Stock</label>
                                </div>
                                <div className='editInv__form__content__avail__stock-status--out-of-stock'>
                                    <input type="radio" id="inStock" name="inStock" value="Out of Stock" />
                                    <label form="inStock"> Out of Stock</label>
                                </div>
                            </div>
                            <label className="p-medium">Quantity</label>
                            <input
                                className={`editInv__form__content__details__input ${error.warehouseNameError
                                    ? "editInv__form--invalidInput"
                                    : ""
                                    }`}
                                placeholder={itemQuantity}
                                name={itemQuantity}
                                form={itemQuantity}
                                value={itemQuantity}
                                onChange={handleChangeItemQuantity}
                            />
    
                            <label className="p-medium">Warehouse</label>
                            <select 
                            name='category' 
                            className="editInv__form__content__details__input"
                            >
                                {warehouses.map((item) => (
                                    <option 
                                    key={item.id} 
                                    value="item.warehouse_name" 
                                    >{item.warehouse_name}</option>
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
                        <button className="editInv__form__buttons--add">+ Add Item</button>
                    </div>
                </form>
            </main>
    
        )
    }
}

export default EditInventory
