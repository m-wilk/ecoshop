import Switch from "../switch/Switch";
import "./dashboard-heading.scss";


const DashboardHeading = () => {

    return (
        <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="m-0 fw-bold">Change Password</h4>
            <div className="d-flex align-items-center">
                <span className="me-3">Switch Dashboard</span>
               <Switch />
            </div>
        </div>
    );
}

export default DashboardHeading;