import HeaderTopSection from "../components/header-top-section/HeaderTopSection";
import HeaderCenterSection from "../components/header-center-section/HeaderCenterSection";
import HeaderBottomSection from "../components/header-bottom-section/HeaderBottomSection";
import HeroSection from "../components/hero-section/HeroSection";
import ProductCategorySection from "../components/product-caterory-section/ProductCategorySection";
import ProductFreshSection from "../components/product-fresh-section/ProductFreshSection";
import FlashProductSection from "../components/flash-product-section/FlashProductSection";
import TopSelingSection from "../components/top-selling-section/TopSellingSection";
import GrocerySection from "../components/grocery-section/GrocerySection";
import BestProductSection from "../components/best-product-section/BestProductSection";
import ProductSaleSection from "../components/product-sale-section/ProductSaleSection";
import FooterSection from "../components/footer-section/FooterSection";

const Layout = () => {
  return (
    <>
      <HeaderTopSection />
      <HeaderCenterSection />
      <HeaderBottomSection />
      <HeroSection />
      <ProductCategorySection />
      <ProductFreshSection title="Fresh Vegetables" />
      <FlashProductSection />
      <TopSelingSection />
      <GrocerySection />
      <ProductFreshSection title="Drinks Juice" />
      <BestProductSection
        title="Get the best deal for Grocery"
        subtitle="You get into the 2k+ best Products in Flash offer with as into the find to
                   makein shaped sofa for sale."
      />
      <ProductFreshSection title="New Arrivals" >
        <div className="mt-5">
          <BestProductSection title="Get the best deal for Modern Grocery" className="product-bg-grocery-section" headlineClassName="text-white" />
        </div>
      </ProductFreshSection>
      <ProductSaleSection />
      <FooterSection />

    </>
  );
};

export default Layout;
