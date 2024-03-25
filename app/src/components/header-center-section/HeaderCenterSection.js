
import logo from "../../assets/img/logo.png"
import HeaderSearchBtn from "../header-search-btn/HeaderSearchBtn";
import HeaderCardItems from "../header-cart-items/HeaderCartItems";


const HeaderCenterSection = () => {
    return (
      <div className="d-flex flex-wrap align-items-center justify-content-between px-5 py-4 container">
        <div>
          <a href="#">
            <img className="mb-3" src={logo}/>
            </a>
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
  