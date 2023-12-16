import React, { useState, useEffect } from "react";
import axios from "axios";
import WareHouseList from "../../components/WareHouseList/WareHouseList";
import SearchHeader from "../../components/SearchHeader/SearchHeader";

function WareHouse() {
  const API_BASE_URL = "http://localhost:8080/warehouses";
  const [warehouses, setWarehouses] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);

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

  if (!hasLoaded) {

    return null;
  } else {
    return (
      <div>
        <SearchHeader title="Warehouse" addNewItem="Warehouse" />
        <WareHouseList warehouses={warehouses} />
      </div>
    );
  }

}

// import { Link } from 'react-router-dom';

  // import { Link } from 'react-router-dom';

  //         <Link to="/inventory/1">
  //         <button type="submit">
  //         Inventory
  //         </button>
  //         </Link>
}
export default WareHouse;
