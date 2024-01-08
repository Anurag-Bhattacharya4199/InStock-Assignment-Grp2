import "./DeleteModal.scss";
import close from "../../assets/icons/close-24px.svg";

function DeleteModal({
  handleCloseDeleteComponent,
  warehouseName,
  handleDeleteConfirmation,
  inventoryName,
  itemType,
}) {
  
    // Close the delete component on cancel and x
    const handleCancel = () => {
        handleCloseDeleteComponent(); 
    };

    //delete item based on origin page (inventory item or warehouse)
    const handleDelete = () => {
        handleDeleteConfirmation(itemType === 'warehouse' ? warehouseName : inventoryName, itemType);
    };


    return (
        <div className="DeleteWarehouseCard">
            <button className="DeleteWarehouseCard__exit" onClick={handleCancel} >
                <img
                    src={close}
                    alt="close"
                    className="DeleteWarehouseCard__exit--icon" />
            </button>
            <h2 className="DeleteWarehouseCard__header">
                Delete{' '}
                {itemType === 'warehouse'
                    ? `${warehouseName} Warehouse`
                    : `${inventoryName} inventory item`}{' '}
            </h2>
            <p className="DeleteWarehouseCard__body">
                Please confirm that you'd like to delete{' '}
                {itemType === 'warehouse'
                    ? `the ${warehouseName} Warehouse from the list of warehouses.`
                    : `${inventoryName} from the inventory list.`}{' '}
                You won't be able to undo this action
            </p>
            <div className="DeleteWarehouseCard__buttons">
                <button onClick={handleCancel} className="DeleteWarehouseCard__buttons--cancel">Cancel</button>
                <button onClick={handleDelete} className="DeleteWarehouseCard__buttons--delete">Delete</button>
            </div>

        </div>
    )
}

export default DeleteModal;
