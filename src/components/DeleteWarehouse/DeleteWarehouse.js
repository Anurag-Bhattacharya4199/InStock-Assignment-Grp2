import './DeleteWarehouse.scss';

function DeleteWarehouse() {

    return (
        <div className="DeleteWarehouseCard">
            <div className="DeleteWarehouseCard__exit">X</div>
            <h2 className="DeleteWarehouseCard__header">Delete Washington Warehouse </h2>
            <p className="DeletWarehouseCard__body">Please confirm that you'd like to delete the washington warehouse 
                from the list of warehouses. You wno't be able to undo this action</p>
            <div className="DeleteWarehouseCard__buttons">
                <button className="DeleteWarehouseCard__buttons--cancel">Cancel</button>
                <button className="DeleteWarehouseCard__buttons--delete">Delete</button>
            </div>

        </div>
    )
}

export default DeleteWarehouse