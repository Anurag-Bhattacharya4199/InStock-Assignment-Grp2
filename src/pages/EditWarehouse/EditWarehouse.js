import "./EditWarehouse.scss";
import validator from "validator";
import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import axios from "axios";
import SearchHeader from "../../components/SearchHeader/SearchHeader";
import EditWarehouseForm from "../../components/EditWarehouseForm/EditWarehouseForm";
import { API_BASE_URL } from "../../utils/utils";
const EditWarehouse = (props) => {
  const { id } = useParams();
  const location = useLocation();
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
  const [disableButton, setDisableButton] = useState(false);
  const [disableButtonClass, setDisableButtonClass] = useState("");

  // POP UP CLASS
  const [cancelEditPopUpClass, setCancelEditPopUpClass] = useState("");
  // PHONE NUMBER MAX-CHARACTER LENGTH
  const [maxCharater, setMaxCharacter] = useState(10);
  // SET RE-DIRECT PAGE LINKS
  useEffect(() => {
    if (location.state.pageSource) {
      setPageSource(location.state.pageSource);
    }
  }, []);
  // GET WAREHOUSE DATA
  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/warehouses/${id}`)
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
      .patch(`${API_BASE_URL}/warehouses/${id}`, {
        warehouse_name: warehouseName,
        address: address,
        city: city,
        country: country,
        contact_name: contactName,
        contact_position: position,
        contact_phone: phoneNumber,
        contact_email: email,
      })
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
  useEffect(() => {
    const phoneRegex = /\+1\s\(\d\d\d\)\s\d\d\d-\d\d\d\d/;
    if (!phoneNumber.match(phoneRegex)) {
      setDisableButton(true);
      setDisableButtonClass("disabled");
      return;
    }
    if (!validator.isEmail(email)) {
      setDisableButton(true);
      setDisableButtonClass("disabled");
      return;
    }
    if (!warehouseName) {
      setDisableButton(true);
      setDisableButtonClass("disabled");
      return;
    }
    if (!address) {
      setDisableButton(true);
      setDisableButtonClass("disabled");
      return;
    }
    if (!city) {
      setDisableButton(true);
      setDisableButtonClass("disabled");
      return;
    }
    if (!country) {
      setDisableButton(true);
      setDisableButtonClass("disabled");
      return;
    }
    if (!contactName) {
      setDisableButton(true);
      setDisableButtonClass("disabled");
      return;
    }
    if (!position) {
      setDisableButton(true);
      setDisableButtonClass("disabled");
      return;
    }

    // ENABLE BUTTON
    setDisableButton(false);
    setDisableButtonClass("");
  }, [
    warehouseName,
    address,
    city,
    country,
    contactName,
    position,
    phoneNumber,
    email,
  ]);

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

  const validatePhoneNumber = (event) => {
    if (event.target.id === "phone-number") {
      let eventVal = event.target.value;
      // CHECK PHONE-NUMBER VALUE
      if (!eventVal) {
        setPhoneNumberError("phone-number-error");
        setPhoneNumberErrorState("phone-number-error-state");
      }
      if (eventVal) {
        // VALIDATE PHONE NUMBER
        const phoneRegex = /\+1\s\(\d\d\d\)\s\d\d\d-\d\d\d\d/;
        if (phoneNumber.match(phoneRegex)) {
          setPhoneNumberError("");
          setPhoneNumberErrorState("");
        } else {
          setPhoneNumberError("phone-number-error");
          setPhoneNumberErrorState("phone-number-error-state");
        }
      }
    }
  };
  const handlePhoneNumberFormate = () => {
    const phoneNumberArray = phoneNumber.split("");

    // IF ONLY NUMBER IN VALUE
    if (!phoneNumberArray.includes("(" || ")" || "+" || " " || "0")) {
      setMaxCharacter(10);
      if (phoneNumberArray.length === 10) {
        const formateNumber = `+1 (${phoneNumberArray[0]}${phoneNumberArray[1]}${phoneNumberArray[2]}) ${phoneNumberArray[3]}${phoneNumberArray[4]}${phoneNumberArray[5]}-${phoneNumberArray[6]}${phoneNumberArray[7]}${phoneNumberArray[8]}${phoneNumberArray[9]}`;
        setPhoneNumber(formateNumber);
      }
      return;
    }

    // IF NON-NUMBER IN VALUE
    if (phoneNumberArray.includes("(" || ")" || "+" || " " || "-")) {
      setMaxCharacter(17);

      return;
    }
  };

  return (
    <main className={`editWarehouse `}>
      <div
        className={`editWarehouse__cancel-edit-container ${cancelEditPopUpClass}`}
        onClick={(event) => {
          event.stopPropagation();
          setCancelEditPopUpClass("");
        }}
      >
        <div className="cancel-edit-content">
          <h3 className="cancel-edit-content__header">
            Are you sure want to cancel?
          </h3>
          <div className="cancel-edit-content__button-container">
            <Link to={`${pageSource}`} className="cancel-edit-link">
              <button className="cancel-yes-button">Yes</button>
            </Link>
            <button
              className="cancel-no-button"
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
      <SearchHeader
        title="Edit Warehouse"
        pageSource={location.state.pageSource}
      />
      <EditWarehouseForm
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
        warehouseError={warehouseError}
        addressError={addressError}
        cityError={cityError}
        countryError={countryError}
        positionError={positionError}
        contactNameError={contactNameError}
        phoneNumberError={phoneNumberError}
        emailError={emailError}
        warehouseErrorState={warehouseErrorState}
        addressErrorState={addressErrorState}
        cityErrorState={cityErrorState}
        countryErrorState={countryErrorState}
        contactNameErrorState={contactNameErrorState}
        positionErrorState={positionErrorState}
        phoneNumberErrorState={phoneNumberErrorState}
        emailErrorState={emailErrorState}
        phoneNumberErrorMessage={phoneNumberErrorMessage}
        emailErrorMessage={emailErrorMessage}
        validatePhoneNumber={validatePhoneNumber}
        handlePhoneNumberFormate={handlePhoneNumberFormate}
        handleInputValidation={handleInputValidation}
        hanldePhoneNumberErrorMessage={hanldePhoneNumberErrorMessage}
        hanldeEmailErrorMessage={hanldeEmailErrorMessage}
        handleWarehouseEditPost={handleWarehouseEditPost}
        disableButton={disableButton}
        disableButtonClass={disableButtonClass}
        maxCharater={maxCharater}
        setCancelEditPopUpClass={setCancelEditPopUpClass}
      />
    </main>
  );
};
export default EditWarehouse;
