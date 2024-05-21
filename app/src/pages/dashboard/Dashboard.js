import "./dashboard.scss";
import HeaderTopSection from "../../components/header-top-section/HeaderTopSection";
import HeaderCenterSection from "../../components/header-center-section/HeaderCenterSection";
import HeaderBottomSection from "../../components/header-bottom-section/HeaderBottomSection";
import FooterSection from "../../components/footer-section/FooterSection";
import BlogTitleSection from "../../components/blog-tittle-section/BlogTitleSection";
import DashboardHeading from "../../components/dashboard-heading/DashboardHeading";

const Dashboard = () => {
  return (
    <>
      <HeaderTopSection />
      <HeaderCenterSection />
      <HeaderBottomSection />
      <BlogTitleSection title="User Dashboard" />
      <div className="dashboard-section">
        <div className="container">
        <div className="user-dashboard-section">
        <DashboardHeading />
        </div>
        </div>
      </div>

      <FooterSection />
    </>
  );
};

export default Dashboard;
