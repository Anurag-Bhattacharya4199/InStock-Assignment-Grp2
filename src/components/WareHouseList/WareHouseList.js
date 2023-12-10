import './WareHouseList.scss'

function WareHouseList(props) {
    const { warehouses } = props

    return (
        <div className='warehouseList'>
            <div className='warehouseList__header--container'>
                <h2 className='warehouseList__header--title'>Warehouses</h2>
                <div className='warehouseList__header--subcontainer'>
                    <input type='text' className='warehouseList__header--searchBar' placeholder='Search...'></input>
                    <button className='warehouseList__header--AddWarehouse-Button'>+ Add New Warehouse</button>
                </div>
            </div>

            {warehouses.map((item) =>
                <div key={item.id} className='warehouseList__body--container'>
                    <div className='warehouseList__body--subcontainer'>
                        <p>WAREHOUSE</p>
                        <p>{item.warehouse_name}</p>
                        <p>ADDRESS</p>
                        <p>{item.address}</p>
                        <p>{item.city}, {item.country}</p>
                    </div>
                    <div className='warehouseList__body--subcontainer'>
                        <p>CONTACT NAME</p>
                        <p>{item.contact_name}</p>
                        <p>Contact Information</p>
                        <p>{item.contact_phone}</p>
                        <p>{item.contact_email}</p>
                    </div>
                </div>
            )}


        </div>
    )
}

export default WareHouseList