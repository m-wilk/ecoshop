import VegetablesItem1 from "../../assets/img/p-img-1.png";
import "./product-fresh-item.scss";
import { ReactComponent as RitingsIcon } from "../../assets/img/ritings.svg";
import { ReactComponent as AddProduce } from "../../assets/img/add-product.svg";
import { ReactComponent as CardItem } from "../../assets/img/card-item.svg";
import { Link } from "react-router-dom";


const ProductFreshItem = (props) => {
  return (
    <div className={`product-fresh-item bg-white ${props.className}`}>
      <div className="d-flex justify-content-center align-items-center product-img">
        <img className="img-fluid img-zoom" src={VegetablesItem1} />
        {/* hidden */}
        <div className="d-flex flex-column  wrapper-icon-link">
          <a className="mb-2 icon-link" href="#">
            <CardItem />
          </a>
          <a className="mb-2 icon-link" href="#">
            <CardItem />
          </a>
          <a className="icon-link" href="#">
            <CardItem />
          </a>
        </div>
      </div>
      <div className="product-info">
        <div className="ritings">
          <RitingsIcon />
        </div>
        <Link
          className="text-decoration-none product-details fw-bold"
          to={`/products/${props.id}`}
        >
          {props.title}
        </Link>
        <div className="d-flex justify-content-center align-items-center price">
          <span className="text-secondary fw-bold price-cut">{props.price}</span>
          <span className="text-danger fw-bold new-price">{props.price}</span>
        </div>
        <div className="w-100">
          <a
            className="text-decoration-none d-flex justify-content-center align-items-center gap-2 product-btn text-nowrap"
            href="cart.html"
          >
            <AddProduce className="fill-color" />
            <span className="fw-semibold btn-text">Add to Cart</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductFreshItem;
