import './WareHouseList.scss'

function WareHouseList() {

    return (
        <div className='warehouseList'>
            <div className='warehouseList__header--container'>
                <h2 className='warehouseList__header--title'>Warehouses</h2>
                <div className='warehouseList__header--subcontainer'>
                    <input type='text' className='warehouseList__header--searchBar' placeholder='Search...'></input>
                    <button className='warehouseList__header--AddWarehouse-Button'>+ Add New Warehouse</button>
                </div>
            </div>
            <div>This will be thwe warehosue card</div>
        </div>
    )
}

export default WareHouseList