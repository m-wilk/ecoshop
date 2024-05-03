import "./product-sale-item.scss";
import SalesImg from "../../assets/img/p-img-26.png";

const ProductSaleItem = () => {
    return (
        <div className="d-flex gap-3 align-items-center bg-white product-sale-item">
            <div className="product-img-sale">
            <img className="img-fluid" src= {SalesImg}/>
            </div>
            <div className="product-info">
            <a className="text-decoration-none fw-bold product-description" href="product-info.html">Fresh Red Tomatos</a>
            <div className="d-flex gap-2 price-sale">
            <span className="fw-bold text-secondary price-cut">$12.99</span>
            <span className ="fw-bold text-danger new-price">$6.99</span>
            </div>
            </div>
        </div>
    );
}
export default ProductSaleItem;