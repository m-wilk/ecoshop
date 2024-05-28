import "./shop-button.scss";
import { ReactComponent as DropDownIcon } from "../../assets/img/drop-down-icon.svg";
import { Link } from "react-router-dom";

const ShopButton = (props) => {
  const { className, to, text, iconClassName = "black-icon" } = props;
  return (
    <Link
      className={`text-decoration-none shop-btn ${props.className}`}
      to={props.to}
    >
      {props.text}
      <span className="ms-2">
        <DropDownIcon className={iconClassName} />
      </span>
    </Link>
  );
};

export default ShopButton;
