import axios from "axios";


export function isWarehouseValid() {


}

export function isInventoryValid() {


}

// export function postInventory (){
    
   export const postInventory = async (
    itemId,
    warehouseId,
    itemName,
    itemDescription,
    itemCategory,
    itemStatus,
    itemQuantity
      ) => {
        const editItem = {
          id: itemId,
          warehouse_id: warehouseId,
          item_name: itemName,
          description: itemDescription,
          category: itemCategory,
          status: itemStatus,
          quantity: itemQuantity
        };
        console.log(editItem);
        try {
          axios.post(`http://localhost:8080/inventories/${editItem.id}`, editItem, {
            "Content-Type": "application/json",
          });
        } catch (e) {
          console.log(e);
        }
      };
// }