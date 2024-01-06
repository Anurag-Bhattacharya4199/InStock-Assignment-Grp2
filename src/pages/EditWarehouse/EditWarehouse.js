import "./EditWarehouse.scss";
import ArroWBack from "../../assets/icons/arrow_back-24px.svg";
import ErrorLogo from "../../assets/icons/error-24px.svg";
import validator from "validator";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import SearchHeader from "../../components/SearchHeader/SearchHeader";

const EditWarehouse = (props) => {
  const API_BASE_URL = "http://localhost:8080/warehouses/";
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  // SET REDIRECT LINK
  const [pageSource, setPageSource] = useState("/");
  // WAREHOUSE DATA
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
  const [phoneNumberErrorMessage, setPhoneNumberErrorMessage] = useState(
    "This field is required"
  );

  const [emailErrorMessage, setEmailErrorMessage] = useState(
    "This field is required"
  );

  // BUTTON DISABLE
  const [disableButton, setDisableButton] = useState(true);
  const [disableButtonClass, setDisableButtonClass] = useState("disabled");

  // POP UP CLASS
  const [editPopUpClass, setEditPopUpClass] = useState("");
  const [cancelEditPopUpClass, setCancelEditPopUpClass] = useState("");
  // SET RE-DIRECT PAGE LINKS
  useEffect(() => {
    console.log("EDIT: ", location.state.pageSource)
    if (location.state.pageSource) {
      setPageSource(location.state.pageSource);
    }
  }, []);
  // GET WAREHOUSE DATA
  useEffect(() => {
    axios
      .get(`${API_BASE_URL}${id}`)
      .then((response) => {
        setWarehouseName(response.data.warehouse_name);
        setAddress(response.data.address);
        setCity(response.data.city);
        setCountry(response.data.country);
        setContactName(response.data.contact_name);
        setPosition(response.data.contact_position);
        setPhoneNumber(response.data.contact_phone);
        setEmail(response.data.contact_email);
      })

      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleWarehouseEditPost = () => {
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
      // .then((response) => {
      //   console.log(response.data);
      // })
      .catch((error) => {
        console.error(error);
      });
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
      setDisableButton(false);
      setDisableButtonClass("");
    } else {
      setDisableButton(true);
      setDisableButtonClass("disabled");
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

  return (
    <main className={`editWarehouse `}>
      {/*-------------------------------*/}

      {/* POP-UP */}
      <div
        className={`editWarehouse__confirm-edit-container ${editPopUpClass}`}
      >sourcePage
        <div className="confirm-edit-content">
          <h3>Warehouse edit Successfully</h3>
          <Link to={`${pageSource}`} className="confirm-edit-content__link">
            <button className="confirm-edit-content__link--button">Ok</button>
          </Link>
        </div>
      </div>
      <div
        className={`editWarehouse__cancel-edit-container ${cancelEditPopUpClass}`}
      >
        <div className="cancel-edit-content">
          <h3>Are you sure want to cancel?</h3>
          <div className="cancel-edit-content__button-container">
            <Link to={`${pageSource}`} className="cancel-edit-link">
              <button className="cancel-edit-button">Yes</button>
            </Link>
            <button
              className="cancel-edit-button"
              type="button"
              onClick={() => {
                setCancelEditPopUpClass("");
              }}
            >
              No
            </button>
          </div>
        </div>
      </div>
      {/*-------------------------------*/}
      {/* <section className="editWarehouse__header">
        <div className="editWarehouse__header-info">
          <Link to={`${pageSource}`}>
            <img
              src={ArroWBack}
              alt="Go Back"
              className="editWarehouse__header-arrowback"
            />
          </Link>
          <h1 className="editWarehouse__header-title">Edit Warehouse</h1>
        </div>
      </section> */}
      <SearchHeader
        title="Edit Warehouse"
        pageSource={location.state.pageSource}
      />
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
            type="button"
            onClick={() => {
              setCancelEditPopUpClass("cancel-edit-pop-up-display");
            }}
          >
            Cancel
          </button>
          <button
            disabled={disableButton}
            className={`editWarehouse__form-addBtn ${disableButtonClass}`}
            onClick={(event) => {
              event.preventDefault();
              handleWarehouseEditPost();
              alert("Edit warehouse successfully!");
              navigate(-1);
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
