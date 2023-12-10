import './InventoryList.scss'

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
  return (
    <section className="inventory-list">
      {props.warehouse.inventory.map((inventoryCard, index) => (
                    <InventoryDetail
                        key={index}
                        itemId={inventoryCard.id}
                        warehouseId={inventoryCard.warehouse_id}
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