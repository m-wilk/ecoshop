import "./best-product-section.scss";
import ShopButton from "../shop-button/ShopButton";

const BestProductSection = (props) => {
  return (
    <div className={props.className ?? "product-bg-best-section"}>
      <div className="container">
        <div className="d-flex flex-column justify-content-center align-items-center product-wrapper">
          <h2 className={`fw-bold ${props.headlineClassName}`}>{props.title}</h2>
          <p className="mb-4">{props.subtitle}</p>
          <ShopButton text="Shop Now" className="bg-success text-white" iconClassName="white-icon"/>
        </div>
      </div>
    </div>
  );
};

export default BestProductSection;
