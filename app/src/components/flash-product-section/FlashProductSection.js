import "./flash-product-section.scss";
import { ReactComponent as DropDownIcon } from "../../assets/img/drop-down-icon.svg";
import ShopButton from "../shop-button/ShopButton";


const FlashProductSection = () => {
  return (
    <div className="flash-sale">
      <div className="container">
        <div className="flash-sale-section">
          {/* couter */}
          <div className="coutdown-section d-flex justify-content-start align-items-center gap-4">
            <div className="coutdown-items d-flex flex-column align-items-center gap-2">
              <span className="d-flex justify-content-center align-items-center  bg-white rounded-circle fw-bold coutdown-number text-danger">256</span>
              <span className="coutdown-text fw-semibold">Days</span>
            </div>
            <div className="coutdown-items d-flex flex-column align-items-center gap-2">
              <span className="d-flex justify-content-center align-items-center  bg-white rounded-circle fw-bold coutdown-number text-info">00</span>
              <span className="coutdown-text fw-semibold">Hours</span>
            </div>
            <div className="coutdown-items d-flex flex-column align-items-center gap-2">
              <span className="d-flex justify-content-center align-items-center  bg-white rounded-circle fw-bold coutdown-number text-success">03</span>
              <span className="coutdown-text fw-semibold">Minutes</span>
            </div>
            <div className="coutdown-items d-flex flex-column align-items-center gap-2">
              <span className="d-flex justify-content-center align-items-center  bg-white rounded-circle fw-bold coutdown-number text-danger">47</span>
              <span className="coutdown-text fw-semibold">Seconds</span>
            </div>
          </div>
          {/* sale content */}
          <div>
            <h2 className="fw-bold">WOO! Flash Sale</h2>
            <p className="mb-4">You get into the 2k+ best Products in br Flash offer with as in <br/> shaped sofafor sale.</p>
            <ShopButton text="Shop Now" className="bg-success text-white fw-bold" iconClassName="white-icon"/>
          </div>
          <div className="d-flex justify-content-center align-items-center rounded-circle discout-item">
            <h3 className="d-flex flex-column justify-content-center align-items-center">
              <p className="mb-0 fw-bold discout-text">26%</p>
              <p className="mb-0 discout-inner-text">OFF</p>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashProductSection;
