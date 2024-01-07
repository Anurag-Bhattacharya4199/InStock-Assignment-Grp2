import ErrorLogo from "../../assets/icons/error-24px.svg";
import { useNavigate } from "react-router-dom";
const EditWarehouseForm = (props) => {
  const navigate = useNavigate();

  return (
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
                // handleSaveButton();
              }}
            />
            {/* ERROR MESSAGE */}
            <span
              className={`${props.warehouseError} editWarehouse__form-warehouse_error-msg`}
            >
              <img
                className="error-logo"
                src={ErrorLogo}
                alt="input-error-logo"
              />
              This field is required
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
                // handleSaveButton();
              }}
            />
            {/* ERROR MESSAGE */}
            <span
              className={`${props.addressError} editWarehouse__form-warehouse_error-msg`}
            >
              <img
                className="error-logo"
                src={ErrorLogo}
                alt="input-error-logo"
              />
              This field is required
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
                // handleSaveButton();
              }}
            />
            {/* ERROR MESSAGE */}
            <span
              className={`${props.cityError} editWarehouse__form-warehouse_error-msg`}
            >
              <img
                className="error-logo"
                src={ErrorLogo}
                alt="input-error-logo"
              />
              This field is required
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
                // handleSaveButton();
              }}
            />
            {/* ERROR MESSAGE */}
            <span
              className={`${props.countryError} editWarehouse__form-warehouse_error-msg`}
            >
              <img
                className="error-logo"
                src={ErrorLogo}
                alt="input-error-logo"
              />
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
              className={`${props.contactNameErrorState} editWarehouse__form-warehouse_contactNameInp`}
              value={props.contactName}
              placeholder="Contact Name"
              onChange={(event) => {
                props.setContactName(event.target.value);
                props.handleInputValidation(event);
                // handleSaveButton();
              }}
            />
            {/* ERROR MESSAGE */}
            <span
              className={`${props.contactNameError} editWarehouse__form-warehouse_error-msg`}
            >
              <img
                className="error-logo"
                src={ErrorLogo}
                alt="input-error-logo"
              />
              This field is required
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
                // handleSaveButton();
              }}
            />
            {/* ERROR MESSAGE */}
            <span
              className={`${props.positionError} editWarehouse__form-warehouse_error-msg`}
            >
              <img
                className="error-logo"
                src={ErrorLogo}
                alt="input-error-logo"
              />
              This field is required
            </span>
          </article>
          <article className="editWarehouse__form-phoneNum">
            <label className="p-medium">Phone Number</label>
            <input
              id="phone-number"
              className={`${props.phoneNumberErrorState} editWarehouse__form-warehouse_phonenumInp`}
              value={props.phoneNumber}
              maxLength={props.maxCharater}
              placeholder="Phone Number"
              onChange={(event) => {
                props.hanldePhoneNumberErrorMessage(event);
                props.setPhoneNumber(event.target.value);
                props.handleInputValidation(event);
                // handleSaveButton();
              }}
              onKeyUp={(event) => {
                props.handlePhoneNumberFormate();
                props.validatePhoneNumber(event);
                // handleSaveButton();
              }}
            />
            {/* ERROR MESSAGE */}
            <span
              className={`${props.phoneNumberError} editWarehouse__form-warehouse_error-msg`}
            >
              <img
                className="error-logo"
                src={ErrorLogo}
                alt="input-error-logo"
              />
              {props.phoneNumberErrorMessage}
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
                props.hanldeEmailErrorMessage(event);
                props.setEmail(event.target.value);
                props.handleInputValidation(event);
                // handleSaveButton();
              }}
            />
            {/* ERROR MESSAGE */}
            <span
              className={`${props.emailError} editWarehouse__form-warehouse_error-msg`}
            >
              <img
                className="error-logo"
                src={ErrorLogo}
                alt="input-error-logo"
              />
              {props.emailErrorMessage}
            </span>
          </article>
        </div>
      </div>

      <div className="editWarehouse__form-buttons">
        <button
          className="editWarehouse__form-cancelBtn"
          type="button"
          onClick={() => {
            props.setCancelEditPopUpClass("cancel-edit-pop-up-display");
          }}
        >
          Cancel
        </button>
        <button
          disabled={props.disableButton}
          className={`editWarehouse__form-addBtn ${props.disableButtonClass}`}
          onClick={(event) => {
            event.preventDefault();
            props.handleWarehouseEditPost();
            alert("Edit warehouse successfully!");
            navigate(-1);
          }}
        >
          Save
        </button>
      </div>
    </form>
  );
};
export default EditWarehouseForm;
