import "./header-top-section.scss";
import { ReactComponent as Phone } from "../../assets/img/phone.svg";
import { ReactComponent as Envelope } from "../../assets/img/envelope.svg";


const HeaderTopSection = () => {
  return (
    <div className="header-top-section">
      <div className="container d-flex flex-wrap justify-content-between py-3 fw-medium "> 
      <div>
        <a className="me-3 text-decoration-none" href="#">
          <span>Account</span>
        </a>
        <a className="me-3 text-decoration-none"  href="#">
          <span>Track Order</span>
        </a>
        <a className= "text-decoration-none" href="#">
          <span>Support</span>
        </a>
      </div>
      <div className="d-flex flex-wrap">
        <a className=" me-3 text-decoration-none"  href="#">
          <span className="me-2">
            <Phone />
          </span>
          <span>+00645 4568</span>
        </a>
        <div className="me-3 devider"></div>
        <a className="text-decoration-none"  href="#">
          <span className="me-2">
            <Envelope />
          </span>
          <span>Youremail@gmail.com</span>
        </a>
      </div>
      </div>
    </div>
  );
};

export default HeaderTopSection;
