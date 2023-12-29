import "./EditWareHouse.scss";
import ArroWBack from "../../assets/icons/arrow_back-24px.svg";
import ErrorLogo from "../../assets/icons/error-24px.svg";
import validator from "validator";
import { useState } from "react";
const EditWarehouse = (props) => {
  const [phoneNumberErrorMessage, setPhoneNumberErrorMessage] = useState(
    "Please enter phone number "
  );

  const [emailErrorMessage, setEmailErrorMessage] = useState(
    "Please enter email "
  );

  const hanldePhoneNumberErrorMessage = (event) => {
    const eventVal = event.target.value;
    // CHECK PHONE NUMBER VALUE
    if (!eventVal) {
      setPhoneNumberErrorMessage("Please enter phone number");
    }
    // VALIDATE PHONE NUMBER

    if (eventVal) {
      validator.isMobilePhone(eventVal)
        ? setPhoneNumberErrorMessage("Please enter phone number")
        : setPhoneNumberErrorMessage("Please enter valid phone number");
    }
  };

  const hanldeEmailErrorMessage = (event) => {
    const eventVal = event.target.value;
    // CHECK EMAIL VALUE
    if (!eventVal) {
      setEmailErrorMessage("Please enter email");
    }
    // VALIDATE EMAIL

    if (eventVal) {
      validator.isEmail(eventVal)
        ? setEmailErrorMessage("Please enter email")
        : setEmailErrorMessage("Please enter valid email");
    }
  };

  return (
    <main className={`editWarehouse ${props.warehouseEditClass}`}>
      <section className="editWarehouse__header">
        <div className="editWarehouse__header-info">
          {/* <Link to={`/warehouses/${props.id}/`}> */}
          <img
            src={ArroWBack}
            alt="Go Back"
            className="editWarehouse__header-arrowback"
            onClick={() => {
              props.handleRestoreData();
              props.handleWarehouseEditClass();
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
                className={`${props.warehouseErrorState} editWarehouse__form-warehouse_nameInp`}
                value={props.warehouseName}
                placeholder="Warehouse Name"
                onChange={(event) => {
                  props.setWarehouseName(event.target.value);
                  props.handleInputValidation(event);
                  props.handleSaveButton();
                }}
              />
              {/* ERROR MESSAGE */}
              <span
                className={`${props.warehouseError} editWarehouse__form-warehouse_error-msg`}
              >
                <img src={ErrorLogo} alt="input-error-logo" />
                Please enter warehouse name
              </span>
            </article>
            <article className="editWarehouse__form-streetAddress">
              <label className="p-medium">Street Address</label>
              <input
                id="address"
                className={`${props.addressErrorState} editWarehouse__form-warehouse_streetaddressInp`}
                value={props.address}
                placeholder="Street Address"
                onChange={(event) => {
                  props.setAddress(event.target.value);
                  props.handleInputValidation(event);
                  props.handleSaveButton();
                }}
              />
              {/* ERROR MESSAGE */}
              <span
                className={`${props.addressError} editWarehouse__form-warehouse_error-msg`}
              >
                <img src={ErrorLogo} alt="input-error-logo" />
                Please enter address
              </span>
            </article>
            <article className="editWarehouse__form-city">
              <label className="p-medium">City</label>
              <input
                id="city"
                className={`${props.cityErrorState} editWarehouse__form-warehouse_cityInp`}
                value={props.city}
                placeholder="City"
                onChange={(event) => {
                  props.setCity(event.target.value);
                  props.handleInputValidation(event);
                  props.handleSaveButton();
                }}
              />
              {/* ERROR MESSAGE */}
              <span
                className={`${props.cityError} editWarehouse__form-warehouse_error-msg`}
              >
                <img src={ErrorLogo} alt="input-error-logo" />
                Please provide City name
              </span>
            </article>
            <article className="editWarehouse__form-country">
              <label className="p-medium">Country</label>
              <input
                id="country"
                className={`${props.countryErrorState} editWarehouse__form-warehouse_countryInp`}
                value={props.country}
                placeholder="Country"
                onChange={(event) => {
                  props.setCountry(event.target.value);
                  props.handleInputValidation(event);
                  props.handleSaveButton();
                }}
              />
              {/* ERROR MESSAGE */}
              <span
                className={`${props.countryError} editWarehouse__form-warehouse_error-msg`}
              >
                <img src={ErrorLogo} alt="input-error-logo" />
                Please provide country name
              </span>
            </article>
          </div>
          <div className="editWarehouse__form-contactDetails">
            <h2 className="editWarehouse__form-header">Contact Details</h2>
            <article className="editWarehouse__form-contactName">
              <label className="p-medium">Contact Name</label>
              <input
                id="contact-name"
                className={`${props.contactNameErrorState} editWarehouse__form-warehouse_contactNameInp`}
                value={props.contactName}
                placeholder="Contact Name"
                onChange={(event) => {
                  props.setContactName(event.target.value);
                  props.handleInputValidation(event);
                  props.handleSaveButton();
                }}
              />
              {/* ERROR MESSAGE */}
              <span
                className={`${props.contactNameError} editWarehouse__form-warehouse_error-msg`}
              >
                <img src={ErrorLogo} alt="input-error-logo" />
                Please enter contact name
              </span>
            </article>
            <article className="editWarehouse__form-position">
              <label className="p-medium">Position</label>
              <input
                id="position"
                className={`${props.positionErrorState} editWarehouse__form-warehouse_positionInp`}
                value={props.position}
                placeholder="position"
                onChange={(event) => {
                  props.setPosition(event.target.value);
                  props.handleInputValidation(event);
                  props.handleSaveButton();
                }}
              />
              {/* ERROR MESSAGE */}
              <span
                className={`${props.positionError} editWarehouse__form-warehouse_error-msg`}
              >
                <img src={ErrorLogo} alt="input-error-logo" />
                Please provide position
              </span>
            </article>
            <article className="editWarehouse__form-phoneNum">
              <label className="p-medium">Phone Number</label>
              <input
                id="phone-number"
                className={`${props.phoneNumberErrorState} editWarehouse__form-warehouse_phonenumInp`}
                value={props.phoneNumber}
                placeholder="Phone Number"
                onChange={(event) => {
                  hanldePhoneNumberErrorMessage(event);
                  props.setPhoneNumber(event.target.value);
                  props.handleInputValidation(event);
                  props.handleSaveButton();
                }}
              />
              {/* ERROR MESSAGE */}
              <span
                className={`${props.phoneNumberError} editWarehouse__form-warehouse_error-msg`}
              >
                <img src={ErrorLogo} alt="input-error-logo" />
                {phoneNumberErrorMessage}
              </span>
            </article>
            <article className="editWarehouse__form-email">
              <label className="p-medium">Email</label>
              <input
                id="email"
                className={`${props.emailErrorState} editWarehouse__form-warehouse_emailInp`}
                value={props.email}
                placeholder="Email"
                onChange={(event) => {
                  hanldeEmailErrorMessage(event);
                  props.setEmail(event.target.value);
                  props.handleInputValidation(event);
                  props.handleSaveButton();
                }}
              />
              {/* ERROR MESSAGE */}
              <span
                className={`${props.emailError} editWarehouse__form-warehouse_error-msg`}
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
              props.handleRestoreData();
              props.handleWarehouseEditClass();
            }}
            type="button"
          >
            Cancel
          </button>
          <button
            disabled={props.disableButton}
            className={`editWarehouse__form-addBtn ${props.disableButtonClass}`}
            onClick={() => {
              props.handleEditWarehousePost();
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
