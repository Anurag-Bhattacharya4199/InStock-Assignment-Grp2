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
    //handleChangeItemDescription
    const handleChangeItemDescription = (event) => {
        const itemName = event.target.value;
        setItemName(itemName);
    };
    const handleSubmit = (event) => {
        event.preventDefault();

    };

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
                            for={itemName}
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
                            for={itemDescription}
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
                        <label className="p-medium">Status</label><br></br>
                        <div className='editInv__form__content__avail__stock-status'>
                            <div className='editInv__form__content__avail__stock-status--in-stock'>
                                <input type="radio" id="inStock" name="inStock" value="In Stock" />
                                <label for="inStock"> In Stock</label>
                            </div>
                            <div className='editInv__form__content__avail__stock-status--out-of-stock'>
                                <input type="radio" id="outOfStock" name="outOfStock" value="Out of Stock" />
                                <label for="outOfStock"> Out of Stock</label>
                            </div>
                        </div>

                    </article>

                </section>

            </form>


        </main>

    )
}

export default EditInventory
