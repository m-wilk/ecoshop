import "./grocery-section.scss";
import ShopButton from "../shop-button/ShopButton";

const GrocerySection = () => {
  return (
    <div className="grocery-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="rounded product-wrapper">
              <span>Fresh Vegetables</span>
              <h3 className="fw-bold mt-2">Dense Vegetables</h3>
              <ShopButton text="Shop Now" className="mt-5" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="rounded product-wrapper">
              <span>Fresh Vegetables</span>
              <h3 className="fw-bold mt-2">Dense Vegetables</h3>
              <ShopButton text="Shop Now" className="mt-5 bg-success text-white" iconClassName="white-icon"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrocerySection;
