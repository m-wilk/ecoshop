
import logo from "../../assets/img/logo.png"
import HeaderSearchBtn from "../header-search-btn/HeaderSearchBtn";
import HeaderCardItems from "../header-cart-items/HeaderCartItems";
import { Link } from "react-router-dom";


const HeaderCenterSection = () => {
    return (
      <div className="d-flex flex-wrap align-items-center justify-content-between px-5 py-4 container">
        <div>
          <Link to="/home">
            <img className="mb-3" src={logo}/>
            </Link>
        </div>
        <div>
          <HeaderSearchBtn />
        </div>
        <div>
          <HeaderCardItems />
        </div>
      </div>
    );
  };
  
  export default HeaderCenterSection;
  