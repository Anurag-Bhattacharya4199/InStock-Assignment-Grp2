import './InventoryDetail.scss'
import deleteIcon from "../../assets/icons/delete_outline-24px.svg"
import editIcon from "../../assets/icons/edit-24px.svg"

function InventoryDetail(props) {

    const deleteItem = () => {

    }
console.log(props.itemName)
    return (
        <>
            <div className="inv-card--divider"></div>
            <section className="inv-card">
                <div className="inv-card__inventory-status__title">
                    <h4>INVENTORY ITEM</h4>
                    <h4>STATUS</h4>
                </div>

                <div className="inv-card__inventory-status__content">
                    <h5>{props.itemName}</h5>
                    <h5>{props.itemStatus}</h5>
                </div>

                <div className="inv-card__category-qty__title">
                    <h4>CATEGORY</h4>
                    <h4>QTY</h4>
                </div>

                <div className="inv-card__inventory-status__content">
                    <h5>{props.itemCategory}</h5>
                    <h5>{props.itemQuantity}</h5>
                </div>

                <div className="inv-card__warehouse__title">
                    <h4>CATEGORY</h4>
                </div>

                <div className="inv-card__warehouse__content">
                    <h5>{props.warehouseName}</h5>
                </div>

                <img
                    onClick={deleteItem}
                    className="inv-card__delete-icon"
                    src={deleteIcon}
                    alt="delete button" />

                <img
                    onClick={deleteItem}
                    className="inv-card__edit-icon"
                    src={editIcon}
                    alt="edit button" />

            </section>


        </>

    )


}

export default InventoryDetail

