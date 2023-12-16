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

    
    // see bottom of page for code once inventory backend is set up
    return (
        <section className="inventory-list">
{props.inventoryCard.map((item) => (
        <InventoryDetail
          key={item.id}
          id={item.id}
          warehouse_name={item.warehouse_name}
          address={item.address}
          city={item.city}
          country={item.country}
          contact_name={item.contact_name}
          contact_phone={item.contact_phone}
          contact_email={item.contact_email}
        />
      ))}

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