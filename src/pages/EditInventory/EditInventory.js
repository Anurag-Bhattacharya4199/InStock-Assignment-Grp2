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
    const [itemName, setItemName] = useState()


    const [inventory, setInventory] = useState({
        itemId: location.state.itemId,
        itemCategory: location.state.itemCategory,
        itemName: location.state.itemName,
        itemDescription: location.state.itemDescription,
        itemStatus: location.state.itemStatus,
        warehouseName: location.state.warehouseName,
        itemQuantity: location.state.itemQuantity,   
    })
    // location.state.itemId
    //             itemId: item.id,
    //               itemCategory: item.category,
    //               itemName: item.item_name,
    //               itemDescription: item.description,
    //               itemStatus: item.status,
    //               warehouseName: checkWarehouseName(item.warehouse_name),
    //               itemQuantity: item.quantity
    
    const [error, setError] = useState({
        itemNameError: false,
        descriptionError: false,
        categoryError: false,
        statusError: false,
        warehouseNameError: false
      });
    
      const handleChangeItemName = (event) => {
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
                            placeholder={inventory.itemName}
                            name={inventory.itemName}
                            for={inventory.itemName}
                            value={inventory.itemName}
                            onChange={handleChangeItemName}
                        />
                    </article>

                    <article className='editInv__form__content__avail'>
                        <h2 className='editInv__form__content__avail--title'>Item Availability</h2>
                    </article>

                </section>

            </form>


        </main>

    )
}

export default EditInventory
