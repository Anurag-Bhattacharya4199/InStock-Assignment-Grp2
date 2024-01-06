import axios from "axios";


export function ValidateEditInventory (){
return null

}

export const PostEditInventory = async (
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
    quantity: itemQuantity,
  };
  console.log(editItem);
  try {
    axios.patch(`http://localhost:8080/inventories/${editItem.id}`, editItem);
  } catch (e) {
    console.log(e);
  }
};

const postHeader = {
  "Content-Type": "application/json",
};

export const postWarehouse = async (
  warehouseNameVal,
  streetAddressVal,
  cityVal,
  countryVal,
  contactNameVal,
  positionVal,
  phoneNumVal,
  emailVal
) => {
  const newWarehouse = {
    warehouse_name: warehouseNameVal,
    address: streetAddressVal,
    city: cityVal,
    country: countryVal,
    contact_name: contactNameVal,
    contact_position: positionVal,
    contact_phone: phoneNumVal,
    contact_email: emailVal,
  };
  console.log(newWarehouse);
  try {
    axios.post(API_BASE_URL, newWarehouse, postHeader);
  } catch (e) {
    console.log(e);
  }
};

export const postInventory = async (
  warehouseIDVal,
  itemNameVal,
  descriptionVal,
  categoryVal,
  statusVal,
  qtyVal
) => {
  const newItem = {
    warehouse_id: warehouseIDVal,
    item_name: itemNameVal,
    description: descriptionVal,
    category: categoryVal,
    status: statusVal,
    quantity: qtyVal,
  };

  try {
    axios.post("http://localhost:8080/inventories", newItem, {
      "Content-Type": "application/json",
    });
  } catch (e) {
    console.log(e);
  }
};

export const API_BASE_URL = "http://localhost:8080/warehouses/";

