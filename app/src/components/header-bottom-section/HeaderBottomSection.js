import CategoryMenuSection from "../category-menu-section/CategoryMenuSection";

const HeaderBottomSection = () => {
  return (
    <div className="bg-success">
      <div className="container d-flex flex-wrap justify-content-between px-5 py-3 fw-medium ">
       <CategoryMenuSection />
      </div>
    </div>
  );
};

export default HeaderBottomSection;
