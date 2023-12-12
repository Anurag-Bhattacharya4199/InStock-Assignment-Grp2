import './WareHouseList.scss'
import { Link } from 'react-router-dom'
import DeleteButton from '../../assets/icons/delete_outline-24px.svg'
import EditIcon from '../../assets/icons/edit-24px.svg'

function WareHouseList(props) {
    const { warehouses } = props

    return (
        <div className='WarehouseList'>

            {warehouses.map((item) =>
                <div key={item.id} className='Mobile-WarehouseList__body'>
                    <div className='Mobile-WarehouseList__body--container'>
                        <div className='Mobile-WarehouseList__body--subcontainer'>
                            <div className='Mobile-WarehouseList__body--info'>
                                <h4>WAREHOUSE</h4>
                                <p className='p-medium'>{item.warehouse_name}</p>
                            </div>
                            <div className='Mobile-WarehouseList__body--info'>
                                <h4>ADDRESS</h4>
                                <p className='p-medium'>{item.address}</p>
                                <p className='p-medium'>{item.city}, {item.country}</p>
                            </div>

                        </div>
                        <div className='Mobile-WarehouseList--subcontainer'>
                            <div className='Mobile-WarehouseList__body--info'>
                                <h4>CONTACT NAME</h4>
                                <p className='p-medium'>{item.contact_name}</p>
                            </div>
                            <div className='Mobile-WarehouseList__body--info'>
                                <h4>CONTACT INFORMATION</h4>
                                <p className='p-medium'>{item.contact_phone}</p>
                                <p className='p-medium'>{item.contact_email}</p>
                            </div>
                        </div>
                    </div>
                    <div className='Mobile-WarehouseList__body--icon-container'>
                        <Link>
                            <img src={DeleteButton} alt='delete icon' className='Mobile-WarehouseList_body--delete-icon'></img>
                        </Link>
                        <Link>
                            <img src={EditIcon} alt='edit icon' className='Mobile-WarehouseList__body--edit-icon'></img>
                        </Link>
                    </div>
                </div>
               
            )}
        </div>
        
        
    )

}

export default WareHouseList