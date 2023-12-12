import "./WareHouseDetail.scss";
import ArroWBack from "../../assets/icons/arrow_back-24px.svg";

function WareHouseDetail() {
  return (
    <section className="warehouseDetails">
      <article className="warehouseDetails__overallInfo">
        <div className="warehouseDetails__header">
          <img
            src={ArroWBack}
            alt="Arrow Back"
            className="warehouseDetails__back"
          />
          <h1 className="warehouseDetails__name">Washington</h1>
          <button className="warehouseDetails__editBtn">Edit</button>
        </div>
        <div className="warehouseDetails__specificInfo">
          <article className="warehouseDetails__addressInfo">
            <h2 className="warehouseDetails__title">WAREHOUSE ADDRESS</h2>
            <p className="warehouseDetails__address">
              33 Pearl Street SW, Washington, USA
            </p>
          </article>
          <article className="warehouseDetails__contactDetails">
            <h2 className="warehouseDetails__title">CONTACT NAME:</h2>
            <p className="warehouseDetails__contactName">Graeme Lyon</p>
            <p className="warehouseDetails__contactPosition">
              Warehouse Manager
            </p>
          </article>
          <article className="warehouseDetails__contactInfo">
            <h2 className="warehouseDetails__title">CONTACT INFORMATION</h2>
            <p className="warehouseDetails__phoneNum">+1 (647) 504-0911</p>
            <p className="warehouseDetails__email">giyon@instock.com</p>
          </article>
        </div>
      </article>
    </section>
  );
}

export default WareHouseDetail;
