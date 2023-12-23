import ArroWBack from "../../assets/icons/arrow_back-24px.svg";
import { Link, useNavigate } from "react-router-dom";
import "./WareHouseAdd.scss";
import { useState } from "react";
import axios from "axios";

function WareHouseAdd() {
  const [warehouseName, setWarehouseName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [contactName, setContactName] = useState("");
  const [position, setPosition] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [email, setEmail] = useState("");

  const [error, setError] = useState({
    warehouseNameError: false,
    streetAddressError: false,
    cityError: false,
    countryError: false,
    contactNameError: false,
    positionError: false,
    phoneNumError: false,
    emailError: false,
  });

  const navigate = useNavigate();

  const postWarehouse = async (
    warehouseNameVal,
    streetAddressVal,
    cityVal,
    countryVal,
    contactNameVal,
    positionVal,
    phoneNumVal,
    emailVal
  ) => {
    const newWarehouse = {
      warehouse_name: warehouseNameVal,
      address: streetAddressVal,
      city: cityVal,
      country: countryVal,
      contact_name: contactNameVal,
      contact_position: positionVal,
      contact_phone: phoneNumVal,
      contact_email: emailVal,
    };
    console.log(newWarehouse);
    try {
      axios.post("http://localhost:8080/warehouses", newWarehouse, {
        "Content-Type": "application/json",
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleChangeWarehouseName = (event) => {
    const warehouseName = event.target.value;
    setWarehouseName(warehouseName);
  };

  const handleChangeStreetAddress = (event) => {
    const streetAddress = event.target.value;
    setStreetAddress(streetAddress);
  };

  const handleChangeCity = (event) => {
    const city = event.target.value;
    setCity(city);
  };

  const handleChangeCountry = (event) => {
    const country = event.target.value;
    setCountry(country);
  };

  const handleChangeContactName = (event) => {
    const contactName = event.target.value;
    setContactName(contactName);
  };

  const handleChangePosition = (event) => {
    const position = event.target.value;
    setPosition(position);
  };

  const handleChangePhoneNum = (event) => {
    const phoneNum = event.target.value;
    setPhoneNum(phoneNum);
  };

  const handleChangeEmail = (event) => {
    const email = event.target.value;
    setEmail(email);
  };

  const isFormValid = () => {
    let formComplete = true;

    let errorState = {
      warehouseNameError: false,
      streetAddressError: false,
      cityError: false,
      countryError: false,
      contactNameError: false,
      positionError: false,
      phoneNumError: false,
      emailError: false,
    };

    if (warehouseName.length === 0) {
      errorState.warehouseNameError = true;
      formComplete = false;
    }

    if (streetAddress.length === 0) {
      errorState.streetAddressError = true;
      formComplete = false;
    }

    if (city.length === 0) {
      errorState.cityError = true;
      formComplete = false;
    }

    if (country.length === 0) {
      errorState.countryError = true;
      formComplete = false;
    }

    if (contactName.length === 0) {
      errorState.contactNameError = true;
      formComplete = false;
    }

    if (position.length === 0) {
      errorState.positionError = true;
      formComplete = false;
    }

    if (phoneNum.length === 0) {
      errorState.phoneNumError = true;
      formComplete = false;
    }

    if (email.length === 0) {
      errorState.emailError = true;
      formComplete = false;
    }

    setError(errorState);

    return formComplete;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isFormValid()) {
      setWarehouseName("");
      setStreetAddress("");
      setCity("");
      setCountry("");
      setContactName("");
      setPosition("");
      setPhoneNum("");
      setEmail("");
      postWarehouse(
        warehouseName,
        streetAddress,
        city,
        country,
        contactName,
        position,
        phoneNum,
        email
      );
      alert("New Warehouse added!");
      navigate("/");
    } else {
      return;
    }
  };
  const handleCancel = () => {
    alert("Warehouse Add Cancelled");
    navigate("/");
  };
  return (
    <main className="addWarehouse">
      <section className="addWarehouse__header">
        <div className="addWarehouse__header-info">
          <Link to="/">
            <img
              src={ArroWBack}
              alt="Go Back"
              className="addWarehouse__header-arrowback"
            />
          </Link>
          <h1 className="addWarehouse__header-title">Add New Warehouse</h1>
        </div>
      </section>
      <form className="addWarehouse__form" onSubmit={handleSubmit}>
        <div className="addWarehouse__form-mainInfo">
          <div className="addWarehouse__form-warehouseDetails">
            <h2 className="addWarehouse__form-header">Warehouse Details</h2>
            <article className="addWarehouse__form-warehouseName">
              <label className="p-medium">Warehouse Name</label>
              <input
                className={`addWarehouse__form-warehouse_nameInp ${
                  error.warehouseNameError
                    ? "addWarehouse__form-invalidInput"
                    : ""
                }`}
                placeholder="Warehouse Name"
                name="warehouseName"
                for="warehouseName"
                value={warehouseName}
                onChange={handleChangeWarehouseName}
              />
            </article>
            <article className="addWarehouse__form-streetAddress">
              <label className="p-medium">Street Address</label>
              <input
                className={`addWarehouse__form-warehouse_streetaddressInp ${
                  error.streetAddressError
                    ? "addWarehouse__form-invalidInput"
                    : ""
                }`}
                placeholder="Street Address"
                name="streetAddress"
                for="streetAddress"
                value={streetAddress}
                onChange={handleChangeStreetAddress}
              />
            </article>
            <article className="addWarehouse__form-city">
              <label className="p-medium">City</label>
              <input
                className={`addWarehouse__form-warehouse_cityInp ${
                  error.cityError ? "addWarehouse__form-invalidInput" : ""
                }`}
                placeholder="City"
                name="city"
                for="city"
                value={city}
                onChange={handleChangeCity}
              />
            </article>
            <article className="addWarehouse__form-country">
              <label className="p-medium">Country</label>
              <input
                className={`addWarehouse__form-warehouse_countryInp ${
                  error.countryError ? "addWarehouse__form-invalidInput" : ""
                }`}
                placeholder="Country"
                name="country"
                for="country"
                value={country}
                onChange={handleChangeCountry}
              />
            </article>
          </div>
          <div className="addWarehouse__form-contactDetails">
            <h2 className="addWarehouse__form-header">Contact Details</h2>
            <article className="addWarehouse__form-contactName">
              <label className="p-medium">Contact Name</label>
              <input
                className={`addWarehouse__form-warehouse_contactNameInp ${
                  error.contactNameError
                    ? "addWarehouse__form-invalidInput"
                    : ""
                }`}
                placeholder="Contact Name"
                name="contactName"
                for="contactName"
                value={contactName}
                onChange={handleChangeContactName}
              />
            </article>
            <article className="addWarehouse__form-position">
              <label className="p-medium">Position</label>
              <input
                className={`addWarehouse__form-warehouse_positionInp ${
                  error.positionError ? "addWarehouse__form-invalidInput" : ""
                }`}
                placeholder="Position"
                name="position"
                for="position"
                value={position}
                onChange={handleChangePosition}
              />
            </article>
            <article className="addWarehouse__form-phoneNum">
              <label className="p-medium">Phone Number</label>
              <input
                className={`addWarehouse__form-warehouse_phonenumInp ${
                  error.phoneNumError ? "addWarehouse__form-invalidInput" : ""
                }`}
                placeholder="Phone Number"
                name="phoneNum"
                for="phoneNum"
                value={phoneNum}
                onChange={handleChangePhoneNum}
              />
            </article>
            <article className="addWarehouse__form-email">
              <label className="p-medium">Email</label>
              <input
                className={`addWarehouse__form-warehouse_emailInp ${
                  error.emailError ? "addWarehouse__form-invalidInput" : ""
                }`}
                placeholder="Email"
                name="email"
                for="email"
                value={email}
                onChange={handleChangeEmail}
              />
            </article>
          </div>
        </div>

        <div className="addWarehouse__form-buttons">
          <button
            className="addWarehouse__form-cancelBtn"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button className="addWarehouse__form-addBtn">+ Add WareHouse</button>
        </div>
      </form>
    </main>
  );
}

export default WareHouseAdd;
