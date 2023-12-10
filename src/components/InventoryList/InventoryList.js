import axios from 'axios';
import './InventoryList.scss'
import { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3000/'

/**INVENTORY TABLE:
id
warehouse_id
item_name
description
category
status
quantity
created_at
updated_at
 */




function InventoryList(props) {
const [inventory, setInventory] = useState();

const getInventory = () => {
    axios
    .get(`${API_URL}inventory/${props.selectedWarehouse}`)
    .then((res) => {
        setInventory(res.data)
    })
}

  return (
    <section className="inventory-list">
      {props.warehouse.inventory.map((inventoryCard, index) => (
                    <InventoryDetail
                        key={index}
                        itemId={inventoryCard.id}
                        warehouseId={inventoryCard.warehouse_id}
                        warehouseName={props.warehouse_name}
                        itemName={inventoryCard.item_name}
                        itemDescription={inventoryCard.description}
                        itemCategory={inventoryCard.category}
                        itemStatus={inventoryCard.status}
                        itemQuantity={inventoryCard.quantity}
                        itemCreated={inventoryCard.created_at}
                        itemUpdated={inventoryCard.updated_at}
                    />
                ))}
    </section>
  );
}

export default InventoryList;