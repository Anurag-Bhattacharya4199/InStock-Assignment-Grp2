import "./WareHouseList.scss";
import WareHouseInfoCard from "../WareHouseInfoCard/WareHouseInfoCard";

function WareHouseList(props) {
  const { warehouses } = props;

  return (
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
  );
}

export default WareHouseList;
