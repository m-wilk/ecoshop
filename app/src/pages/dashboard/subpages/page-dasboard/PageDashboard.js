import "./page-dashboard.scss";
import { ReactComponent as NewOrders } from "../../../../assets/img/neworders.svg";

const PageDashboard = () => {
  return (
    <div className="page-dashboard-section w-100">
      <div >
        <p>Hello, Sajjad</p>
        <h5 className="fw-bold">Welcome to your Profile</h5>
      </div>
      <div className="mt-4">
        <div className="row g-4">
          <div className="col-lg-4 col-sm-6">
            <div className="d-flex flex-column align-items-start justify-content-center gap-3 product-wrraper">
              <NewOrders className="icon-order-feel" />
              <div>
                <p className="text-white m-0 mb-2">New Orders</p>
                <h2 className="text-white fw-bold">656</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="d-flex flex-column align-items-start justify-content-center gap-3 product-wrraper">
              <NewOrders className="icon-order-feel" />
              <div>
                <p className="text-white m-0 mb-2">New Orders</p>
                <h2 className="text-white fw-bold">656</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="d-flex flex-column align-items-start justify-content-center gap-3 product-wrraper">
              <NewOrders className="icon-order-feel" />
              <div>
                <p className="text-white m-0 mb-2">New Orders</p>
                <h2 className="text-white fw-bold">656</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div
              className="d-flex align-items-center  justify-content-between info-section"
            >
              <div>
                <h5 className="fw-bold">Personal Information</h5>
                <div className="d-flex justify-content-start align-items-center gap-3">
                  <div className="text-secondary">
                    <p>Name:</p>
                    <p>Email:</p>
                    <p>Phone:</p>
                    <p>City:</p>
                    <p>Zip:</p>
                  </div>
                  <div className="fw-semibold">
                    <p>Sajjad</p>
                    <p>demoemail@gmail.com</p>
                    <p>023 434 54354</p>
                    <p>Haydarabad, Road 34</p>
                    <p>3454</p>
                  </div>
                </div>
              </div>

              <div className="devider"> </div>

              <div>
                <h5 className="fw-bold">Personal Information</h5>
                <div className="d-flex justify-content-start align-items-center gap-3">
                  <div className="text-secondary">
                    <p>Name:</p>
                    <p>Email:</p>
                    <p>Phone:</p>
                    <p>City:</p>
                    <p>Zip:</p>
                  </div>
                  <div className="fw-semibold">
                    <p>Sajjad</p>
                    <p>demoemail@gmail.com</p>
                    <p>023 434 54354</p>
                    <p>Haydarabad, Road 34</p>
                    <p>3454</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageDashboard;
