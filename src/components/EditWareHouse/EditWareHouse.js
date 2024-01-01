import "./EditWareHouse.scss";
import ArroWBack from "../../assets/icons/arrow_back-24px.svg";
import ErrorLogo from "../../assets/icons/error-24px.svg";
import validator from "validator";
import { useState } from "react";
const EditWarehouse = (props) => {
  // WAREHOUSE DATA
  const [warehouseName, setWarehouseName] = useState(
    props.warehouse.warehouse_name
  );
  const [address, setAddress] = useState(props.warehouse.address);
  const [city, setCity] = useState(props.warehouse.city);
  const [country, setCountry] = useState(props.warehouse.country);
  const [contactName, setContactName] = useState(props.warehouse.contact_name);
  const [position, setPosition] = useState(props.warehouse.contact_position);
  const [phoneNumber, setPhoneNumber] = useState(props.warehouse.contact_phone);
  const [email, setEmail] = useState(props.warehouse.contact_email);
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
  const [phoneNumberErrorMessage, setPhoneNumberErrorMessage] = useState(
    "This field is required"
  );

  const [emailErrorMessage, setEmailErrorMessage] = useState(
    "This field is required"
  );

  // RESTORE DATA
  const handleRestoreData = () => {
    setWarehouseName(props.warehouse.warehouse_name);
    setAddress(props.warehouse.address);
    setCity(props.warehouse.city);
    setCountry(props.warehouse.country);
    setContactName(props.warehouse.contact_name);
    setPosition(props.warehouse.contact_position);
    setPhoneNumber(props.warehouse.contact_phone);
    setEmail(props.warehouse.contact_email);
  };

  const hanldePhoneNumberErrorMessage = (event) => {
    const eventVal = event.target.value;
    // CHECK PHONE NUMBER VALUE
    if (!eventVal) {
      setPhoneNumberErrorMessage("This field is required");
    }
    // VALIDATE PHONE NUMBER

    if (eventVal) {
      validator.isMobilePhone(eventVal)
        ? setPhoneNumberErrorMessage("This field is required")
        : setPhoneNumberErrorMessage("Invalid phone number");
    }
  };

  const hanldeEmailErrorMessage = (event) => {
    const eventVal = event.target.value;
    // CHECK EMAIL VALUE
    if (!eventVal) {
      setEmailErrorMessage("This field is required");
    }
    // VALIDATE EMAIL

    if (eventVal) {
      validator.isEmail(eventVal)
        ? setEmailErrorMessage("This field is required")
        : setEmailErrorMessage("Invalid email");
    }
  };

  // ENABLE SAVE BUTTON IN EDIT WAREHOUSE COMPONENT
  const handleSaveButton = () => {
    if (validator.isMobilePhone(phoneNumber) && validator.isEmail(email)) {
      props.setDisableButton(false);
      props.setDisableButtonClass("");
    } else {
      props.setDisableButton(true);
      props.setDisableButtonClass("disabled");
      return;
    }

    if (
      !warehouseName ||
      !address ||
      !country ||
      !city ||
      !contactName ||
      !position ||
      !phoneNumber ||
      !email
    ) {
      props.setDisableButton(true);
      props.setDisableButtonClass("disabled");
      return;
    } else {
      props.setDisableButton(false);
      props.setDisableButtonClass("");
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

  return (
    <main className={`${props.editWarehouseClass} editWarehouse `}>
      <section className="editWarehouse__header">
        <div className="editWarehouse__header-info">
          {/* <Link to={`/warehouses/${props.id}/`}> */}
          <img
            src={ArroWBack}
            alt="Go Back"
            className="editWarehouse__header-arrowback"
            onClick={() => {
              if (props.currentWarehouseId) {
                props.handleEditWarehouseClass();
                props.setHasCurrentWarehouseLoaded(false);
              } else {
                handleRestoreData();
                props.handleEditWarehouseClass();
              }
            }}
          />
          {/* </Link> */}
          <h1 className="editWarehouse__header-title">Edit Warehouse</h1>
        </div>
      </section>
      <form
        className="editWarehouse__form"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div className="editWarehouse__form-mainInfo">
          <div className="editWarehouse__form-warehouseDetails">
            <h2 className="editWarehouse__form-header">Warehouse Details</h2>
            <article className="editWarehouse__form-warehouseName">
              <label className="p-medium">Warehouse Name</label>
              <input
                id="warehouse-name"
                className={`${warehouseErrorState} editWarehouse__form-warehouse_nameInp`}
                value={warehouseName}
                placeholder="Warehouse Name"
                onChange={(event) => {
                  setWarehouseName(event.target.value);
                  handleInputValidation(event);
                  handleSaveButton();
                }}
              />
              {/* ERROR MESSAGE */}
              <span
                className={`${warehouseError} editWarehouse__form-warehouse_error-msg`}
              >
                <img src={ErrorLogo} alt="input-error-logo" />
                This field is required
              </span>
            </article>
            <article className="editWarehouse__form-streetAddress">
              <label className="p-medium">Street Address</label>
              <input
                id="address"
                className={`${addressErrorState} editWarehouse__form-warehouse_streetaddressInp`}
                value={address}
                placeholder="Street Address"
                onChange={(event) => {
                  setAddress(event.target.value);
                  handleInputValidation(event);
                  handleSaveButton();
                }}
              />
              {/* ERROR MESSAGE */}
              <span
                className={`${addressError} editWarehouse__form-warehouse_error-msg`}
              >
                <img src={ErrorLogo} alt="input-error-logo" />
                This field is required
              </span>
            </article>
            <article className="editWarehouse__form-city">
              <label className="p-medium">City</label>
              <input
                id="city"
                className={`${cityErrorState} editWarehouse__form-warehouse_cityInp`}
                value={city}
                placeholder="City"
                onChange={(event) => {
                  setCity(event.target.value);
                  handleInputValidation(event);
                  handleSaveButton();
                }}
              />
              {/* ERROR MESSAGE */}
              <span
                className={`${cityError} editWarehouse__form-warehouse_error-msg`}
              >
                <img src={ErrorLogo} alt="input-error-logo" />
                This field is required
              </span>
            </article>
            <article className="editWarehouse__form-country">
              <label className="p-medium">Country</label>
              <input
                id="country"
                className={`${countryErrorState} editWarehouse__form-warehouse_countryInp`}
                value={country}
                placeholder="Country"
                onChange={(event) => {
                  setCountry(event.target.value);
                  handleInputValidation(event);
                  handleSaveButton();
                }}
              />
              {/* ERROR MESSAGE */}
              <span
                className={`${countryError} editWarehouse__form-warehouse_error-msg`}
              >
                <img src={ErrorLogo} alt="input-error-logo" />
                This field is required
              </span>
            </article>
          </div>
          <div className="editWarehouse__form-contactDetails">
            <h2 className="editWarehouse__form-header">Contact Details</h2>
            <article className="editWarehouse__form-contactName">
              <label className="p-medium">Contact Name</label>
              <input
                id="contact-name"
                className={`${contactNameErrorState} editWarehouse__form-warehouse_contactNameInp`}
                value={contactName}
                placeholder="Contact Name"
                onChange={(event) => {
                  setContactName(event.target.value);
                  handleInputValidation(event);
                  handleSaveButton();
                }}
              />
              {/* ERROR MESSAGE */}
              <span
                className={`${contactNameError} editWarehouse__form-warehouse_error-msg`}
              >
                <img src={ErrorLogo} alt="input-error-logo" />
                This field is required
              </span>
            </article>
            <article className="editWarehouse__form-position">
              <label className="p-medium">Position</label>
              <input
                id="position"
                className={`${positionErrorState} editWarehouse__form-warehouse_positionInp`}
                value={position}
                placeholder="position"
                onChange={(event) => {
                  setPosition(event.target.value);
                  handleInputValidation(event);
                  handleSaveButton();
                }}
              />
              {/* ERROR MESSAGE */}
              <span
                className={`${positionError} editWarehouse__form-warehouse_error-msg`}
              >
                <img src={ErrorLogo} alt="input-error-logo" />
                This field is required
              </span>
            </article>
            <article className="editWarehouse__form-phoneNum">
              <label className="p-medium">Phone Number</label>
              <input
                id="phone-number"
                className={`${phoneNumberErrorState} editWarehouse__form-warehouse_phonenumInp`}
                value={phoneNumber}
                placeholder="Phone Number"
                onChange={(event) => {
                  hanldePhoneNumberErrorMessage(event);
                  setPhoneNumber(event.target.value);
                  handleInputValidation(event);
                  handleSaveButton();
                }}
              />
              {/* ERROR MESSAGE */}
              <span
                className={`${phoneNumberError} editWarehouse__form-warehouse_error-msg`}
              >
                <img src={ErrorLogo} alt="input-error-logo" />
                {phoneNumberErrorMessage}
              </span>
            </article>
            <article className="editWarehouse__form-email">
              <label className="p-medium">Email</label>
              <input
                id="email"
                className={`${emailErrorState} editWarehouse__form-warehouse_emailInp`}
                value={email}
                placeholder="Email"
                onChange={(event) => {
                  hanldeEmailErrorMessage(event);
                  setEmail(event.target.value);
                  handleInputValidation(event);
                  handleSaveButton();
                }}
              />
              {/* ERROR MESSAGE */}
              <span
                className={`${emailError} editWarehouse__form-warehouse_error-msg`}
              >
                <img src={ErrorLogo} alt="input-error-logo" />
                {emailErrorMessage}
              </span>
            </article>
          </div>
        </div>

        <div className="editWarehouse__form-buttons">
          <button
            className="editWarehouse__form-cancelBtn"
            onClick={() => {
              if (props.currentWarehouseId) {
                props.handleEditWarehouseClass();
                props.setHasCurrentWarehouseLoaded(false);
              } else {
                handleRestoreData();
                props.handleEditWarehouseClass();
              }
            }}
            type="button"
          >
            Cancel
          </button>
          <button
            disabled={props.disableButton}
            className={`editWarehouse__form-addBtn ${props.disableButtonClass}`}
            onClick={(event) => {
              event.preventDefault();
              if (props.currentWarehouseId) {
                props.handleEditWarehousePost({
                  warehouse_name: warehouseName,
                  address: address,
                  city: city,
                  country: country,
                  contact_name: contactName,
                  contact_position: position,
                  contact_phone: phoneNumber,
                  contact_email: email,
                });
                props.handleEditWarehouseClass();
                props.setHasCurrentWarehouseLoaded(false);
              } else {
                props.handleEditWarehousePost({
                  warehouse_name: warehouseName,
                  address: address,
                  city: city,
                  country: country,
                  contact_name: contactName,
                  contact_position: position,
                  contact_phone: phoneNumber,
                  contact_email: email,
                });
                props.handleEditWarehouseClass();
              }
            }}
          >
            Save
          </button>
        </div>
      </form>
    </main>
  );
};
export default EditWarehouse;
