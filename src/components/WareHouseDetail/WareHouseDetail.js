import "./WareHouseDetail.scss";
import ArroWBack from "../../assets/icons/arrow_back-24px.svg";
import EditButton from "../../assets/icons/edit-24px.svg";
import InventoryList from "../InventoryList/InventoryList";

function WareHouseDetail(props) {
  console.log(props);
  return (
    <section className="warehouseDetails">
      <article className="warehouseDetails__overallInfo">
        <div className="warehouseDetails__header">
          <div className="warehouseDetails__subHeader">
            <img
              src={ArroWBack}
              alt="Arrow Back"
              className="warehouseDetails__back"
            />
            <h1 className="warehouseDetails__name">Washington</h1>
          </div>
          <img
            src={EditButton}
            alt="Edit Button"
            className="warehouseDetails__edit"
          />
        </div>
        <div className="warehouseDetails__specificInfo">
          <article className="warehouseDetails__addressInfo">
            <h4 className="warehouseDetails__title">WAREHOUSE ADDRESS</h4>
            <p className="p-medium">33 Pearl Street SW, Washington, USA</p>
          </article>
          <section className="warehouseDetails__contacts">
            <article className="warehouseDetails__contactDetails">
              <h4 className="warehouseDetails__title">CONTACT NAME:</h4>
              <p className="warehouseDetails__contactName p-medium">
                Graeme Lyon
              </p>
              <p className="warehouseDetails__contactPosition p-medium">
                Warehouse Manager
              </p>
            </article>
            <article className="warehouseDetails__contactInfo">
              <h4 className="warehouseDetails__title">CONTACT INFORMATION</h4>
              <p className="warehouseDetails__phoneNum p-medium">
                +1 (647) 504-0911
              </p>
              <p className="warehouseDetails__email p-medium">
                giyon@instock.com
              </p>
            </article>
          </section>
        </div>
      </article>
    </section>
  );
}

export default WareHouseDetail;
