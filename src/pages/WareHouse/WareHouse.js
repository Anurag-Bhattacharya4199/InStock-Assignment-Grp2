
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import WareHouseList from "../../components/WareHouseList/WareHouseList";



function WareHouse() {

    const API_BASE_URL = 'http://localhost:8080/warehouses';
    const [warehouses, setWarehouses] = useState([]);

    useEffect(() => {
        axios
            .get(API_BASE_URL)
            .then((response) => {
                const warehouseData = response.data;
                setWarehouses(warehouseData);
                console.log(warehouseData);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <WareHouseList warehouses={warehouses}/>
        </div>
    );
}

export default WareHouse;