import "./nav-dashboard.scss";
import { ReactComponent as HomePill } from "../../assets/img/pills-home.svg";
import { Link } from "react-router-dom";

const NavDashboard = () => {
    return (
        <div className="d-flex flex-column align-items-start justify-content-center nav-button-section gap-3">
            <Link to="/user-dashboard" className="d-flex justify-content-center align-items-center gap-3 text-decoration-none">
               <HomePill className="icon-fill"/>
                <span>Dashboard</span>
            </Link>
            <Link to="/user-dashboard/page-info" className="d-flex justify-content-center align-items-center gap-3 text-decoration-none">
               <HomePill className="icon-fill"/>
                <span>Personal Info</span>
            </Link>
        
            
        </div>
    );
}

export default NavDashboard;