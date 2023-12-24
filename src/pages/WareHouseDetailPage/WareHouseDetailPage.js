import "./WareHouseDetailPage.scss";
import ArroWBack from "../../assets/icons/arrow_back-24px.svg";
import EditButton from "../../assets/icons/edit-24px.svg";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import InventoryList from "../../components/InventoryList/InventoryList";
import EditWarehouse from "../../components/EditWareHouse/EditWareHouse";
function WareHouseDetailPage(props) {
  let { id } = useParams();
  const navigate = useNavigate();
  const [hasLoaded, setHasLoaded] = useState(false);
  const [hasLoaded2, setHasLoaded2] = useState(false);

  const API_BASE_URL = "http://localhost:8080/warehouses/";

  // TRUTHY CHECK
  const [hasLoaded, setHasLoaded] = useState(false);
  const [hasLoaded2, setHasLoaded2] = useState(false);
  // WAREHOUSE INFO
  const [warehouse, setWarehouse] = useState([]);
  const [warehouseName, setWarehouseName] = useState([]);
  const [address, setAddress] = useState([]);
  const [city, setCity] = useState([]);
  const [country, setCountry] = useState([]);
  const [contactName, setContactName] = useState([]);
  const [position, setPosition] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState([]);
  const [email, setEmail] = useState([]);

  // DYNAMIC CLASSES
  const [warehouseDetailClass, setWarehouseDetailClass] = useState("");
  const [warehouseEditClass, setWarehouseEditClass] =
    useState("display-hidden");

  // DISABLE SAVE BUTTON IN EDIT WAREHOUSE-COMPONENT
  const [disableButton, setDisableButton] = useState(true);
  const [disableButtonClass, setDisableButtonClass] = useState("disabled");
  // WAREHOUSE INVENTORY LISTS
  const [warehouseInventory, setWarehouseInventory] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}${id}`)
      .then((response) => {
        setWarehouse(response.data);
        setWarehouseName(response.data.warehouse_name);
        setAddress(response.data.address);
        setCity(response.data.city);
        setCountry(response.data.country);
        setContactName(response.data.contact_name);
        setPosition(response.data.contact_position);
        setPhoneNumber(response.data.contact_position);
        setPhoneNumber(response.data.contact_phone);
        setEmail(response.data.contact_email);

        // VALIDATE DATA DOWNLOAD
        setHasLoaded(true);
      })
      .catch((error) => {
        console.error(error);
      });

    axios.get(`${API_BASE_URL}${id}/inventories`).then((response) => {
      setWarehouseInventory(response.data);
      setHasLoaded2(true);
    });
  }, []);

  // UPDATE WAREHOUSE
  const handleEditWarehouse = () => {
    axios
      .patch(`${API_BASE_URL}${id}`, {
        warehouse_name: warehouseName,
        address: address,
        city: city,
        country: country,
        contact_name: contactName,
        contact_position: position,
        contact_phone: phoneNumber,
        contact_email: email,
      })
      .then((response) => {
        setWarehouse(response.data);
        setWarehouseName(response.data.warehouse_name);
        setAddress(response.data.address);
        setCity(response.data.city);
        setCountry(response.data.country);
        setContactName(response.data.contact_name);
        setPosition(response.data.contact_position);
        setPhoneNumber(response.data.contact_position);
        setPhoneNumber(response.data.contact_phone);
        setEmail(response.data.contact_email);
        setHasLoaded(true);
      })
      .then(() => {
        handleWarehouseEditClass();
        setDisableButton(true);
        setDisableButtonClass("disabled");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // TOGGLE CLASSES (DISPLAY : NONE/BLOCK)
  const handleWarehouseDetailClass = () => {
    setWarehouseDetailClass("display-hidden");
    setWarehouseEditClass("");
  };
  const handleWarehouseEditClass = () => {
    setWarehouseDetailClass("");
    setWarehouseEditClass("display-hidden");
  };

  // RESTORE DATA
  const handleRestoreData = () => {
    setWarehouseName(warehouse.warehouse_name);
    setAddress(warehouse.address);
    setCity(warehouse.city);
    setCountry(warehouse.country);
    setContactName(warehouse.contact_name);
    setPosition(warehouse.contact_position);
    setPhoneNumber(warehouse.contact_phone);
    setEmail(warehouse.contact_email);
  };

  // VALIDATE INPUT
  const handleInputValidation = () => {
    setDisableButton(false);
    setDisableButtonClass("");
  };
  // RENDERING
  if (!hasLoaded && !hasLoaded2) {
    return null;
  } else {
    return (
      <>
        {/* EDIT WAREHOUSE */}
        <EditWarehouse
          id={id}
          warehouseName={warehouseName}
          address={address}
          city={city}
          country={country}
          contactName={contactName}
          position={position}
          phoneNumber={phoneNumber}
          email={email}
          setWarehouseName={setWarehouseName}
          setAddress={setAddress}
          setCity={setCity}
          setCountry={setCountry}
          setContactName={setContactName}
          setPosition={setPosition}
          setPhoneNumber={setPhoneNumber}
          setEmail={setEmail}
          handleEditWarehouse={handleEditWarehouse}
          warehouseEditClass={warehouseEditClass}
          handleWarehouseEditClass={handleWarehouseEditClass}
          handleRestoreData={handleRestoreData}
          disableButton={disableButton}
          disableButtonClass={disableButtonClass}
          handleInputValidation={handleInputValidation}
        />
        <main className={`warehouseDetails ${warehouseDetailClass}`}>
          <section className="warehouseDetails__header">
            <div className="warehouseDetails__header-info">
              <Link to="/">
                <img
                  src={ArroWBack}
                  alt="Go Back"
                  className="warehouseDetails__header-arrowback"
                />
              </Link>
              <h1 className="warehouseDetails__header-title">
                {warehouseName}
              </h1>
            </div>
            {/* <Link
              to={`/warehouses/:id/edit`}
              className="warehouseDetails__header-edit"
            > */}
            <div
              className="warehouseDetails__header-edit"
              onClick={handleWarehouseDetailClass}
            >
              <img
                src={EditButton}
                className="warehouseDetails__header-editImg"
                alt="Edit Warehouse"
              />
              <span className="warehouseDetails__header-editTxt">Edit</span>
            </div>
            {/* </Link> */}
          </section>
          <section className="warehouseDetails__info">
            <div className="warehouseDetails__info-address">
              <h4 className="warehouseDetails__info-headers">
                Warehouse Address:
              </h4>
              <p className="p-medium">{address}</p>
            </div>
            <div className="warehouseDetails__info-contact">
              <div className="warehouseDetails__info-column warehouseDetails__info-column--left">
                <h4 className="warehouseDetails__info-headers">
                  CONTACT NAME:
                </h4>
                <p className="p-medium">{contactName}</p>
                <p className="p-medium">{position}</p>
              </div>
              <div className="warehouseDetails__info-column warehouseDetails__info-column--right">
                <h4 className="warehouseDetails__info-headers">
                  CONTACT INFORMATION:
                </h4>
                <p className="p-medium">{phoneNumber}</p>
                <p className="p-medium">{email}</p>
              </div>
            </div>
          </div>
        </section>
        <InventoryList inventoryList={warehouseInventory} warehouseName={warehouse.warehouse_name} />
      </main>
    );
  }
}

export default WareHouseDetailPage;
