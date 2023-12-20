import './DeleteWarehouse.scss';

function DeleteWarehouse({handleCloseDeleteComponent,warehouseName}) {

    const handleCancel = () => {
        handleCloseDeleteComponent(); // Close the delete component on cancel and x
      };


    return (
        <div className="DeleteWarehouseCard">
            <button className="DeleteWarehouseCard__exit"  onClick={handleCancel} >X</button>
            <h2 className="DeleteWarehouseCard__header">Delete {warehouseName} Warehouse </h2>
            <p className="DeletWarehouseCard__body">Please confirm that you'd like to delete the {warehouseName} warehouse 
                from the list of warehouses. You wno't be able to undo this action</p>
            <div className="DeleteWarehouseCard__buttons">
                <button onClick={handleCancel} className="DeleteWarehouseCard__buttons--cancel">Cancel</button>
                <button className="DeleteWarehouseCard__buttons--delete">Delete</button>
            </div>

        </div>
    )
}

export default DeleteWarehouse