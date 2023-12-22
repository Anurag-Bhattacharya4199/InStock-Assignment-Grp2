import './TitleHeader.scss'
import { Link } from 'react-router-dom';
import ArroWBack from "../../assets/icons/arrow_back-24px.svg";
import EditButton from "../../assets/icons/edit-24px.svg";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

// This header can be used for the WareHouseList component and the WareHouseInventoryList component
function TitleHeader(props) {

    

    return (
        <section className="header">
          <div className="header--info">
            
            <Link to={`${props.origin}`}>
              <img
                src={ArroWBack}
                alt="Go Back"
                className="header--arrowback"
              />
            </Link>
            <h1 className="header--title">
              {warehouse.warehouse_name}
            </h1>
          </div>
          <Link
            to={`/${props.table}/${props.id}/edit`}
            className="header--edit"
          >
            <img
              src={EditButton}
              className="header--editImg"
              alt="Edit Warehouse"
            />
            <span className="header--editTxt">Edit</span>
          </Link>
        </section>
    )
}

export default TitleHeader