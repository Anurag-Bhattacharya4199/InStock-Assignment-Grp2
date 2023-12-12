import './InventoryList.scss'
import { useEffect, useState } from 'react';
import axios from 'axios';
import InventoryDetail from '../InventoryDetail/InventoryDetail';

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
    // const [inventory, setInventory] = useState();

    // temporary code until inventory backend is done
    let inventoryCard = {
        index: "5",
        itemId: '1',
        warehouseId: '1',
        warehouseName: 'Manhattan',
        itemName: "printer",
        itemDescription: "prints stuff",
        itemCategory: "electronics",
        itemStatus: "in stock",
        itemQuantity: 55,
        itemCreated: "yesterday",
        itemUpdated: "in the future"
    }

    // const getInventory = () => {
    //     axios
    //         .get(`${API_URL}inventory/${props.selectedWarehouse}`)
    //         .then((res) => {
    //             console.log(res.data)
    //              setInventory(res.data)
    //         })
    // }


    // see bottom of page for code once inventory backend is set up
    return (
        <section className="inventory-list">

            <InventoryDetail
                key={inventoryCard.index}
                itemId={inventoryCard.id}
                warehouseId={inventoryCard.warehouseId}
                warehouseName={props.warehouse_name}
                itemName={inventoryCard.itemName}
                itemDescription={inventoryCard.description}
                itemCategory={inventoryCard.category}
                itemStatus={inventoryCard.itemStatus}
                itemQuantity={inventoryCard.quantity}
                itemCreated={inventoryCard.created_at}
                itemUpdated={inventoryCard.updated_at} />

        </section>
    );
}

export default InventoryList;

// Inventory detail:
// {props.warehouse.inventory.map((inventoryCard, index) => (
// key={index}
//                     itemId={inventoryCard.id}
//                     warehouseId={inventoryCard.warehouse_id}
//                     warehouseName={props.warehouse_name}
//                     itemName={inventoryCard.item_name}
//                     itemDescription={inventoryCard.description}
//                     itemCategory={inventoryCard.category}
//                     itemStatus={inventoryCard.status}
//                     itemQuantity={inventoryCard.quantity}
//                     itemCreated={inventoryCard.created_at}
//                     itemUpdated={inventoryCard.updated_at}
// ))}