import "./WareHouseList.scss";
import WareHouseInfoCard from "../WareHouseInfoCard/WareHouseInfoCard";
import SortDefault from "../../assets/icons/sort-24px.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../utils/utils";

function WareHouseList(props) {
  const { warehouses } = props;
  const [sortType, setSortType] = useState("");
  const [orderBy, setOrderBy] = useState("asc");
  const [sortedWarehouses, setSortedWarehouses] = useState([]);

  const fetchSortedWarehouseList = () => {
    axios
      .get(`${API_BASE_URL}/warehouses?sort_by=${sortType}&order_by=${orderBy}`)
      .then((response) => {
        const sortedWarehouseData = response.data;
        setSortedWarehouses(sortedWarehouseData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSort = (sortBy) => {
    setOrderBy((prevState) => !prevState);

    if (sortType !== sortBy) {
      setOrderBy("asc");
      setSortType(sortBy);
    } else {
      if (orderBy === "asc") {
        setOrderBy("desc");
      } else {
        setOrderBy("asc");
      }
    }
  };

  useEffect(() => {
    setSortedWarehouses(warehouses);
  }, [warehouses]);

  useEffect(() => {
    fetchSortedWarehouseList();
  }, [sortType, orderBy]);

  return (
    <>
      {/* tablet & mobile headers */}
      <div className={` warehouseList-headers`}>
        <div className="warehouseList-headers__header-container">
          <h4 className="warehouseList-headers__header-container--header">
            WAREHOUSE
          </h4>
          <img
            className="warehouseList-headers__header-container--sort-icon"
            src={SortDefault}
            alt="sort"
            onClick={() => handleSort("warehouse_name")}
          />
        </div>
        <div className="warehouseList-headers__header-container">
          <h4 className="warehouseList-headers__header-container--header">
            ADDRESS
          </h4>
          <img
            className="warehouseList-headers__header-container--sort-icon"
            src={SortDefault}
            alt="sort"
            onClick={() => handleSort("city")}
          />
        </div>
        <div className="warehouseList-headers__header-container">
          <h4 className="warehouseList-headers__header-container--header">
            CONTACT NAME
          </h4>
          <img
            className="warehouseList-headers__header-container--sort-icon"
            src={SortDefault}
            alt="sort"
            onClick={() => handleSort("contact_name")}
          />
        </div>
        <div className="warehouseList-headers__header-container">
          <h4 className="warehouseList-headers__header-container--header">
            CONTACT INFORMATION
          </h4>
          <img
            className="warehouseList-headers__header-container--sort-icon"
            src={SortDefault}
            alt="sort"
            onClick={() => handleSort("contact_email")}
          />
        </div>
        <div
          key="06"
          className="warehouseList-headers__action-header-container"
        >
          <h4 className="warehouseList-headers__header-container--header">
            ACTIONS
          </h4>
        </div>
      </div>

      <div className={`$ WarehouseList`}>
        {sortedWarehouses.map((item) => (
          <WareHouseInfoCard
            key={item.id}
            warehouse_name={item.warehouse_name}
            address={item.address}
            city={item.city}
            country={item.country}
            contact_name={item.contact_name}
            contact_phone={item.contact_phone}
            contact_email={item.contact_email}
            id={item.id}
            onDeleteClick={props.onDeleteClick}
          />
        ))}
      </div>
    </>
  );
}

export default WareHouseList;
