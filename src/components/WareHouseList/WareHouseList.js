import "./WareHouseList.scss";
import WareHouseInfoCard from "../WareHouseInfoCard/WareHouseInfoCard";
import SortDefault from "../../assets/icons/sort-24px.svg";


function WareHouseList(props) {
  const { warehouses } = props;

  return (
    <>
     
       {/* tablet & mobile headers */}
       <div className="warehouseList-headers">
       <div className="warehouseList-headers__header-container">
         <h4 className="warehouseList-headers__header-container--header">
           WAREHOUSE
         </h4>
         <img
           className="warehouseList-headers__header-container--sort-icon"
           src={SortDefault}
           alt="sort"
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
         />
       </div>
       <div className="warehouseList-headers__header-container">
         <h4 className="warehouseList-headers__header-container--header">
           COONTACT INFORMATION
         </h4>
         <img
           className="warehouseList-headers__header-container--sort-icon"
           src={SortDefault}
           alt="sort"
         />
       </div>
       <div key="06" className="warehouseList-headers__header-container">
         <h4 className="warehouseList-headers__header-container--header">
           ACTIONS
         </h4>
       </div>
     </div>


    <div className="WarehouseList">
      {warehouses.map((item) => (
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
        />
      ))}
    </div>

    </>
  );
}

export default WareHouseList;
