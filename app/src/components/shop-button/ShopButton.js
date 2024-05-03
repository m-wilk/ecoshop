import "./shop-button.scss";
import { ReactComponent as DropDownIcon } from "../../assets/img/drop-down-icon.svg";

const ShopButton = (props) => {
    const { className, text, iconClassName = 'black-icon' } = props;
  return (
    <a
      className={`text-decoration-none shop-btn ${props.className}`}
      href="product-sidebar.html"
    >
      {props.text}
      <span className="ms-2">
        <DropDownIcon className={iconClassName} />
      </span>
    </a>
  );
};

export default ShopButton;
