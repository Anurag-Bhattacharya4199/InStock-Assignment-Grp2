import "./Inventory.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import InventoryList from "../../components/InventoryList/InventoryList";
import SearchHeader from "../../components/SearchHeader/SearchHeader";
import axios from "axios";

const Inventory = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [inventoryList, setInventoryList] = useState([]);
  const API_BASE_URL = "http://localhost:8080";

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/inventories`)
      .then((response) => {
        setInventoryList(response.data);
        console.log(inventoryList);
      })
      .catch((err) => {
        console.log(err);
      });
    setHasLoaded(true);
    
  }, []);

  if (!hasLoaded) {
    return null;
  } else {
    return (
      <section>
        <SearchHeader title="Inventory" addNewItem="Item" />
        <InventoryList inventoryList={inventoryList} />
      </section>
    );
  }
};

export default Inventory;
