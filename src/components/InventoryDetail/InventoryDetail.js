import './InventoryDetail.scss'
import deleteIcon from "../../assets/icons/delete_outline-24px.svg"
import editIcon from "../../assets/icons/edit-24px.svg"

function InventoryDetail(props) {

    const deleteItem = () => {

    }
    // console.log(props.description)
    return (
        <>
            <section className="details">
                <div className="details--left-wrapper">
                <div className="details__description">
                    <h4 className="details__headers">
                        ITEM DESCRIPTION:
                    </h4>
                    <p className="p-medium">{props.description}</p>
                </div>
                <div className="details-category">
                    <h4 className="details__headers">
                        CATEGORY:
                    </h4>
                    <p className="p-medium">{props.category}</p>
                </div>
                </div>
                <div className="details--right-wrapper">
                    <div className="details__status-warehouse">
                        <div className="details__status-warehouse--status">
                            <h4 className="details__headers">STATUS:</h4>
                            <p
                                className={`p-medium status-container__status ${props.status === "In Stock"
                                        ? "status-container__in-stock"
                                        : "status-container__out-of-stock"
                                    } `}
                            >
                                {props.status}
                            </p>
                        </div>
                        <div className="details__status-warehouse--warehouse">
                            <h4 className="details__headers">
                                WAREHOUSE:
                            </h4>
                            <p className="p-medium">{props.warehouse_name}</p>
                        </div>
                    </div>
                    <div className="details__quantity">
                        <h4 className="details__headers">
                        QUANTITY:
                        </h4>
                        <p className="p-medium">{props.quantity}</p>
                    </div>
                </div>

            </section>


        </>

    )


}

export default InventoryDetail

