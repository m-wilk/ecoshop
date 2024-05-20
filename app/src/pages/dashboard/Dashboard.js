import HeaderTopSection from "../../components/header-top-section/HeaderTopSection";
import HeaderCenterSection from "../../components/header-center-section/HeaderCenterSection";
import HeaderBottomSection from "../../components/header-bottom-section/HeaderBottomSection";
import FooterSection from "../../components/footer-section/FooterSection";
import BlogTitleSection from "../../components/blog-tittle-section/BlogTitleSection";

const Dashboard = () => {
  return (
    <>
      <HeaderTopSection />
      <HeaderCenterSection />
      <HeaderBottomSection />
      <BlogTitleSection title="User Dashboard"/>
      <FooterSection />
    </>
  );
};

export default Dashboard;
