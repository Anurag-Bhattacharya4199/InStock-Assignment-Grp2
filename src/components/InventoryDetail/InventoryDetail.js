import './InventoryDetail.scss'
import deleteIcon from "../../assets/icons/delete_outline-24px.svg"
import editIcon from "../../assets/icons/edit-24px.svg"

function InventoryDetail(props) {

    const deleteItem = () => {

    }
    console.log(props.itemName)
    return (
        <>
            <section className="inventoryDetails__info">
                <div className="inventoryDetails__info-description">
                    <h4 className="inventoryDetails__info-headers">
                        ITEM DESCRIPTION:
                    </h4>
                    <p className="p-medium">{inventory.description}</p>
                </div>
                <div className="inventoryDetails__info-category">
                    <h4 className="inventoryDetails__info-headers">
                        CATEGORY:
                    </h4>
                    <p className="p-medium">{inventory.category}</p>
                </div>
                <div className="inventoryDetails__info-contact">
                    <div>
                        <div className="inventoryDetails__info-column inventoryDetails__info-column--left">
                            <h4 className="inventoryDetails__info-headers">STATUS:</h4>
                            <p className="p-medium">{inventory.contact_name}</p>
                            <p className="p-medium">{inventory.contact_position}</p>
                        </div>
                        <div className="inventoryDetails__info-column inventoryDetails__info-column--right">
                            <h4 className="inventoryDetails__info-headers">
                                QUANTITY:
                            </h4>
                            <p className="p-medium">{inventory.contact_phone}</p>
                            <p className="p-medium">{inventory.contact_email}</p>
                        </div>
                    </div>
                    <div className="inventoryDetails__info-column inventoryDetails__info-column--right">
                        <h4 className="inventoryDetails__info-headers">
                            WAREHOUSE:
                        </h4>
                        <p className="p-medium">{inventory.contact_phone}</p>
                        <p className="p-medium">{inventory.contact_email}</p>
                    </div>
                </div>

            </section>


        </>

    )


}

export default InventoryDetail

