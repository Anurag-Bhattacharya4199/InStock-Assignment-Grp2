import { Link } from "react-router-dom";
import DeleteButton from "../../assets/icons/delete_outline-24px.svg";
import EditIcon from "../../assets/icons/edit-24px.svg";
import "./WareHouseInfoCard.scss";

function WareHouseInfoCard(props) {
  const currentWarehouse = props.currentWarehouse;
  const isWarehouseSelected = props.isWarehouseSelected;

  const {
    warehouse_name,
    address,
    city,
    country,
    contact_name,
    contact_phone,
    contact_email,
    id,
  } = props;

  return (
    <div key={id} className="Mobile-WarehouseList__body">
      <div className="Mobile-WarehouseList__body--container">
        <div className="Mobile-WarehouseList__body--subcontainer">
          <div className="Mobile-WarehouseList__body--info">
            <h4>WAREHOUSE</h4>
            <Link to={`/warehouses/${id}`} state={{ warehouse: props }}>
              <p className="p-medium">{warehouse_name}</p>
            </Link>
          </div>
          <div className="Mobile-WarehouseList__body--info">
            <h4>ADDRESS</h4>
            <p className="p-medium">{address}</p>
            <p className="p-medium">
              {city}, {country}
            </p>
          </div>
        </div>
        <div className="Mobile-WarehouseList--subcontainer">
          <div className="Mobile-WarehouseList__body--info">
            <h4>CONTACT NAME</h4>
            <p className="p-medium">{contact_name}</p>
          </div>
          <div className="Mobile-WarehouseList__body--info">
            <h4>CONTACT INFORMATION</h4>
            <p className="p-medium">{contact_phone}</p>
            <p className="p-medium">{contact_email}</p>
          </div>
        </div>
      </div>
      <div className="Mobile-WarehouseList__body--icon-container">
        <Link>
          <img
            src={DeleteButton}
            alt="delete icon"
            className="Mobile-WarehouseList_body--delete-icon"
          ></img>
        </Link>
        <Link>
          <img
            src={EditIcon}
            alt="edit icon"
            className="Mobile-WarehouseList__body--edit-icon"
          ></img>
        </Link>
      </div>
    </div>
  );
}

export default WareHouseInfoCard;
