import CategoryMenuSection from "../category-menu-section/CategoryMenuSection";
import HeaderNawMenu from "../header-nav-menu/HeaderNavMenu";
import "./header-bottom-section.scss"

const HeaderBottomSection = () => {
  return (
    <div className="bg-success header-bottom-section">
      <div className="container d-flex flex-wrap justify-content-between align-items-center px-5 py-3 fw-medium ">
        <CategoryMenuSection />
        <HeaderNawMenu />
       <a className="text-decoration-none shop-btn fw-bold" href="#">
        Seller Login
       </a>
      </div>
    </div>
  );
};

export default HeaderBottomSection;
