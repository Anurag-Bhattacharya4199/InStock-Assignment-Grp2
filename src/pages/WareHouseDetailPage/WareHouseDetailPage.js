import "./WareHouseDetailPage.scss";
import ArroWBack from "../../assets/icons/arrow_back-24px.svg";
import EditButton from "../../assets/icons/edit-24px.svg";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import InventoryList from "../../components/InventoryList/InventoryList";
import EditWarehouse from "../../components/EditWareHouse/EditWareHouse";
import axios from "axios";
import validator from "validator";
function WareHouseDetailPage(props) {
  let { id } = useParams();
  const API_BASE_URL = "http://localhost:8080/warehouses/";

  // TRUTHY CHECK
  const [hasLoaded, setHasLoaded] = useState(false);
  const [hasLoaded2, setHasLoaded2] = useState(false);

  // WAREHOUSE DATA
  const [warehouse, setWarehouse] = useState("");
  const [warehouseName, setWarehouseName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [contactName, setContactName] = useState("");
  const [position, setPosition] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  // FORM INPUT ERROR STATE CLASESS
  const [warehouseErrorState, setWarehouseErrorState] = useState("");
  const [addressErrorState, setAddressErrorState] = useState("");
  const [cityErrorState, setCityErrorState] = useState("");
  const [countryErrorState, setCountryErrorState] = useState("");
  const [contactNameErrorState, setContactNameErrorState] = useState("");
  const [positionErrorState, setPositionErrorState] = useState("");
  const [phoneNumberErrorState, setPhoneNumberErrorState] = useState("");
  const [emailErrorState, setEmailErrorState] = useState("");

  // FORM ERROR-MESSAGE CLASSES
  const [warehouseError, setWarehouseError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [cityError, setCityError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [contactNameError, setContactNameError] = useState("");
  const [positionError, setPositionError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [emailError, setEmailError] = useState("");

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
  const handleEditWarehousePost = () => {
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

  // ENABLE SAVE BUTTON IN EDIT WAREHOUSE COMPONENT
  const handleSaveButton = () => {
    if (validator.isMobilePhone(phoneNumber) && validator.isEmail(email)) {
      setDisableButton(false);
      setDisableButtonClass("");
    } else {
      setDisableButton(true);
      setDisableButtonClass("disabled");
      return;
    }

    if (
      !warehouse ||
      !address ||
      !country ||
      !city ||
      !contactName ||
      !position ||
      !phoneNumber ||
      !email
    ) {
      setDisableButton(true);
      setDisableButtonClass("disabled");
      return;
    } else {
      setDisableButton(false);
      setDisableButtonClass("");
    }
    // DIS/ENABLE SAVE BUTTON
  };
  // VALIDATE INPUT
  const handleInputValidation = (event) => {
    if (event.target.id === "warehouse-name") {
      if (!event.target.value) {
        setWarehouseError("warehouse-error");
        setWarehouseErrorState("warehouse-error-state");
      } else {
        setWarehouseError(" ");
        setWarehouseErrorState(" ");
      }
    }

    if (event.target.id === "address") {
      if (!event.target.value) {
        setAddressError("address-error");
        setAddressErrorState("address-error-state");
      } else {
        setAddressError(" ");
        setAddressErrorState("");
      }
    }

    if (event.target.id === "city") {
      if (!event.target.value) {
        setCityError("warehouse-error");
        setCityErrorState("city-error-state");
      } else {
        setCityError("");
        setCityErrorState("");
      }
    }

    if (event.target.id === "country") {
      if (!event.target.value) {
        setCountryError("country-error");
        setCountryErrorState("country-error-state");
      } else {
        setCountryError("");
        setCountryErrorState("");
      }
    }

    if (event.target.id === "contact-name") {
      if (!event.target.value) {
        setContactNameError("contact-name-error");
        setContactNameErrorState("contact-name-error-state");
      } else {
        setContactNameError("");
        setContactNameErrorState("");
      }
    }

    if (event.target.id === "position") {
      if (!event.target.value) {
        setPositionError("position-error");
        setPositionErrorState("position-error-state");
      } else {
        setPositionError("");
        setPositionErrorState("");
      }
    }

    if (event.target.id === "phone-number") {
      let eventVal = event.target.value;
      // CHECK PHONE-NUMBER VALUE
      if (!eventVal) {
        setPhoneNumberError("phone-number-error");
        setPhoneNumberErrorState("phone-number-error-state");
      }
      if (eventVal) {
        // VALIDATE PHONE NUMBER
        if (validator.isMobilePhone(eventVal)) {
          setPhoneNumberError("");
          setPhoneNumberErrorState("");
        } else {
          setPhoneNumberError("phone-number-error");
          setPhoneNumberErrorState("phone-number-error-state");
        }
      }
    }

    if (event.target.id === "email") {
      let eventVal = event.target.value;
      // CHECK PHONE-NUMBER VALUE
      if (!eventVal) {
        setEmailError("email-error");
        setEmailErrorState("email-error-state");
      }
      if (eventVal) {
        // VALIDATE PHONE NUMBER
        if (validator.isEmail(eventVal)) {
          setEmailError(" ");
          setEmailErrorState(" ");
        } else {
          setEmailError("email-error");
          setEmailErrorState("email-error-state");
        }
      }
    }
  };

  // RENDERING
  if (!hasLoaded && !hasLoaded2) {
    return null;
  } else {
    return (
      <>
        {/* EDIT WAREHOUSE */}
        <EditWarehouse
          // id={id}
          warehouseName={warehouseName}
          warehouseError={warehouseError}
          address={address}
          addressError={addressError}
          city={city}
          cityError={cityError}
          country={country}
          countryError={countryError}
          contactName={contactName}
          contactNameError={contactNameError}
          position={position}
          positionError={positionError}
          phoneNumber={phoneNumber}
          phoneNumberError={phoneNumberError}
          email={email}
          emailError={emailError}
          disableButton={disableButton}
          disableButtonClass={disableButtonClass}
          warehouseEditClass={warehouseEditClass}
          warehouseErrorState={warehouseErrorState}
          addressErrorState={addressErrorState}
          cityErrorState={cityErrorState}
          countryErrorState={countryErrorState}
          contactNameErrorState={contactNameErrorState}
          positionErrorState={positionErrorState}
          phoneNumberErrorState={phoneNumberErrorState}
          emailErrorState={emailErrorState}
          setWarehouseName={setWarehouseName}
          setAddress={setAddress}
          setCity={setCity}
          setCountry={setCountry}
          setContactName={setContactName}
          setPosition={setPosition}
          setPhoneNumber={setPhoneNumber}
          setEmail={setEmail}
          handleEditWarehousePost={handleEditWarehousePost}
          handleWarehouseEditClass={handleWarehouseEditClass}
          handleRestoreData={handleRestoreData}
          handleInputValidation={handleInputValidation}
          handleSaveButton={handleSaveButton}
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
          </section>
          <InventoryList
            inventoryList={warehouseInventory}
            warehouseName={warehouse.warehouse_name}
          />
        </main>
      </>
    );
  }
}

export default WareHouseDetailPage;
