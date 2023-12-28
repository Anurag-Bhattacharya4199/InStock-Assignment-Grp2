import './DeleteModal.scss';

function DeleteModal({ handleCloseDeleteComponent, warehouseName, handleDeleteConfirmation, inventoryName,
    itemType }) {

    const handleCancel = () => {
        handleCloseDeleteComponent(); // Close the delete component on cancel and x
    };

    const handleDelete = () => {
        handleDeleteConfirmation(itemType === 'warehouse' ? warehouseName : inventoryName, itemType);
    };


    return (
        <div className="DeleteWarehouseCard">
            <button className="DeleteWarehouseCard__exit" onClick={handleCancel} >X</button>
            <h2 className="DeleteWarehouseCard__header">
                Delete{' '}
                {itemType === 'warehouse'
                    ? `${warehouseName} Warehouse`
                    : `${inventoryName} inventory item`}{' '}
            </h2>
            <p className="DeletWarehouseCard__body">
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

export default DeleteModal