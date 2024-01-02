import { Link } from "react-router-dom";
import DeleteButton from "../../assets/icons/delete_outline-24px.svg";
import EditIcon from "../../assets/icons/edit-24px.svg";
import Chevron from "../../assets/icons/chevron_right-24px.svg";
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
    <div className="warehouseList">
      {/* warehouse card - all displays*/}

      <div className="WarehouseList__body">
        <div className="WarehouseList__body--container">
          <div className="WarehouseList__body--subcontainer">
            <div className="WarehouseList__body--info">
              <h4 className="WarehouseList__body--info--header">WAREHOUSE</h4>
              <Link
                className="WarehouseList__body--info--warehouse-link-container"
                to={`/warehouses/${id}`}
              >
                <p className="text">{warehouse_name}</p>
                <img
                  src={Chevron}
                  alt="chevron"
                  className="WarehouseList__body--info--warehouse-link-icon"
                />
              </Link>
            </div>
            <div className="WarehouseList__body--info">
              <h4 className="WarehouseList__body--info--header">ADDRESS</h4>
              <p className="text">{address}</p>
              <p className="text">
                {city}, {country}
              </p>
            </div>
          </div>
          <div className="WarehouseList__body--subcontainer">
            <div className="WarehouseList__body--info">
              <h4 className="WarehouseList__body--info--header">
                CONTACT NAME
              </h4>
              <p className="text">{contact_name}</p>
            </div>
            <div className="WarehouseList__body--info">
              <h4 className="WarehouseList__body--info--header">
                CONTACT INFORMATION
              </h4>
              <p className="text">{contact_phone}</p>
              <p className="text">{contact_email}</p>
            </div>
          </div>
        </div>
        <div className="WarehouseList__body--icon-container">
          <button
            className="WarehouseList__body--delete-button"
            onClick={() => props.onDeleteClick(id, warehouse_name)}
          >
            <img
              src={DeleteButton}
              alt="delete icon"
              className="WarehouseList__body--delete-icon"
            ></img>
          </button>
          <Link className="WarehouseList__body--edit-button">
            <img
              id={id}
              src={EditIcon}
              alt="edit icon"
              className={`${props.editWarehouseClass} WarehouseList__body--edit-icon`}
              onClick={(event) => {
                props.getCurrentWarehouseData(event);
                props.handleWarehouseListClass();
              }}
            ></img>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WareHouseInfoCard;
