import './WareHouseList.scss'
import { Link } from 'react-router-dom'
import DeleteButton from '../../assets/icons/delete_outline-24px.svg'
import EditIcon from '../../assets/icons/edit-24px.svg'

function WareHouseList(props) {
    const { warehouses } = props

    return (
        <div className='warehouseList'>
            

            {warehouses.map((item) =>
                <div key={item.id} className='warehouseList__body'>
                    <div className='warehouseList__body--container'>
                        <div className='warehouseList__body--subcontainer'>
                            <div className='warehouseList__body--info'>
                                <h4>WAREHOUSE</h4>
                                <p className='p-medium'>{item.warehouse_name}</p>
                            </div>
                            <div className='warehouseList__body--info'>
                                <h4>ADDRESS</h4>
                                <p className='p-medium'>{item.address}</p>
                                <p className='p-medium'>{item.city}, {item.country}</p>
                            </div>

                        </div>
                        <div className='warehouseList__body--subcontainer'>
                            <div className='warehouseList__body--info'>
                                <h4>CONTACT NAME</h4>
                                <p className='p-medium'>{item.contact_name}</p>
                            </div>
                            <div className='warehouseList__body--info'>
                                <h4>CONTACT INFORMATION</h4>
                                <p className='p-medium'>{item.contact_phone}</p>
                                <p className='p-medium'>{item.contact_email}</p>
                            </div>
                        </div>
                    </div>
                    <div className='warehouseList__body--icon-container'>
                        <Link>
                            <img src={DeleteButton} alt='delete icon' className='warehouseList__Body--delete-icon'></img>
                        </Link>
                        <Link>
                            <img src={EditIcon} alt='edit icon' className='warehouseList__Body--edit-icon'></img>
                        </Link>
                    </div>
                </div>


            )}


        </div>
    )
}

export default WareHouseList