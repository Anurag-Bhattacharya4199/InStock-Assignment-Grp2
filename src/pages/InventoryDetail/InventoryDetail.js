import "./InventoryDetail.scss";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchHeader from "../../components/SearchHeader/SearchHeader";

function InventoryDetail(props) {
  const location = useLocation();

  return (
    <>
      <SearchHeader
        title={location.state.itemName}
        headerButton="inventories"
      />
      <section className="details">
        <div className="details--left-wrapper">
          <div className="details__description">
            <h4 className="details__headers--description">ITEM DESCRIPTION:</h4>
            <p className="details--text">{location.state.itemDescription}</p>
          </div>
          <div>
            <h4 className="details__headers--category">CATEGORY:</h4>
            <p className="details--text">{location.state.itemCategory}</p>
          </div>
        </div>
        <div className="details--right-wrapper">
          <div className="details__status-warehouse">
            <div className="details__status-warehouse--status">
              <h4 className="details__headers--status">STATUS:</h4>
              <p
                className={`details--text status-container__status ${
                  location.state.itemStatus === "In Stock"
                    ? "status-container__in-stock"
                    : "status-container__out-of-stock"
                } `}
              >
                {location.state.itemStatus}
              </p>
            </div>
            <div className="details__status-warehouse--warehouse">
              <h4 className="details__headers--warehouse">WAREHOUSE:</h4>
              <p className="details--text">{location.state.warehouseName}</p>
            </div>
          </div>
          <div className="details__quantity">
            <h4 className="details__headers--status">QUANTITY:</h4>
            <p className="details--text">{location.state.itemQuantity}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default InventoryDetail;
