import CategoryMenuSection from "../category-menu-section/CategoryMenuSection";
import HeaderNawMenu from "../header-nav-menu/HeaderNavMenu";
import "./header-bottom-section.scss"
import ShopButton from "../shop-button/ShopButton";

const HeaderBottomSection = () => {
  return (
    <div className="bg-success header-bottom-section">
      <div className="container d-flex flex-wrap justify-content-between align-items-center py-3 fw-medium ">
        <CategoryMenuSection />
        <HeaderNawMenu />
      <ShopButton  text="Seller Login"/> 
      </div>
    </div>
  );
};

export default HeaderBottomSection;

// color="bg-danger"
