import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import WareHouseList from "../../components/WareHouseList/WareHouseList";
import SearchHeader from "../../components/SearchHeader/SearchHeader";

function WareHouse() {
  const API_BASE_URL = "http://localhost:8080/warehouses";
  const [warehouses, setWarehouses] = useState([]);
  const [currentWarehouse, setCurrentWarehouse] = useState();
  const [hasLoaded, setHasLoaded] = useState(false);
  const [hasLoaded2, setHasLoaded2] = useState(false);
  let { id } = useParams();
  console.log("hasLoaded2:", hasLoaded2);

  useEffect(() => {
    axios
      .get(API_BASE_URL)
      .then((response) => {
        const warehouseData = response.data;
        setWarehouses(warehouseData);
        setHasLoaded(true);
        // console.log(warehouseData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function getWareHouseInfo(id) {
    axios.get(`${API_BASE_URL}/${id}`).then((response) => {
      // console.log(response.data);
      setCurrentWarehouse(response.data);
      //console.log(currentWarehouse);
    });
    setHasLoaded2(true);
    //return;
  }

  // if (!hasLoaded2) {
  //   getWareHouseInfo(id);
  //   return <WareHouseDetail 
  //   currentWarehouse={currentWarehouse} 
  //   isWarehouseSelected={isWarehouseSelected} 
  //   />;
  // } else if (hasLoaded) {
    return (
      <div>
        <SearchHeader title="Warehouse" addNewItem="Warehouse" />
        <WareHouseList warehouses={warehouses} />
      </div>
    );
  // } else {
  //   return null;
  // }
}

// import { Link } from 'react-router-dom';

//         <Link to="/inventory/1">
//         <button type="submit">
//         Inventory
//         </button>
//         </Link>

export default WareHouse;
