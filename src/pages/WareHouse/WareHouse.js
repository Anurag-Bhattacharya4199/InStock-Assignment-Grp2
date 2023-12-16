import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import WareHouseList from "../../components/WareHouseList/WareHouseList";
import WareHouseDetail from "../../components/WareHouseDetail/WareHouseDetail";
import SearchHeader from "../../components/SearchHeader/SearchHeader";

function WareHouse() {
  const API_BASE_URL = "http://localhost:8080/warehouses";
  const [warehouses, setWarehouses] = useState([]);
  const [currentWarehouse, setCurrentWarehouse] = useState();
  const [hasLoaded, setHasLoaded] = useState(false);
  const [hasLoaded2, setHasLoaded2] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(API_BASE_URL)
      .then((response) => {
        const warehouseData = response.data;
        setWarehouses(warehouseData);
        setHasLoaded(true);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function getWareHouseInfo(id) {
    axios.get(`${API_BASE_URL}/${id}`).then((response) => {
      const warehouseInfo = response.data;
      setCurrentWarehouse(warehouseInfo);
      setCurrentWarehouse(response.data);
    });
    setHasLoaded2(true);
    //return;
  }
    return (
      <div>
        <SearchHeader title="Warehouse" addNewItem="Warehouse" />
        <WareHouseList warehouses={warehouses} />
      </div>
    );

// import { Link } from 'react-router-dom';

//         <Link to="/inventory/1">
//         <button type="submit">
//         Inventory
//         </button>
//         </Link>

export default WareHouse;
