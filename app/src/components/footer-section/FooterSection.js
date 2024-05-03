import "./footer-section.scss";
import { ReactComponent as Envelope } from "../../assets/img/envelope.svg";
import { ReactComponent as IconLocation } from "../../assets/img/icon-location.svg";
import { ReactComponent as Instagram } from "../../assets/img/instagram.svg";
import Logo from "../../assets/img/logo.png";
import Payment from "../../assets/img/payment-img.png";

const FuterSection = () => {
  return (
    <div className="product-footer-section">
      <div className="d-flex align-items-center justify-content-center footer-top-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-8">
              <div className="footer-wrapper d-flex flex-column justify-content-center align-items-center">
                <div className="footer-wrapper-content text-center">
                  <h3 className="text-white fw-bold mb-2">
                    Get <span className="text-warning">20%</span> Off Discount
                    Coupon
                  </h3>
                  <p className="text-white  mb-4">
                    by Subscribe our Newsletter
                  </p>
                </div>
                <div className="footer-wrapper-email w-75">
                  <form>
                    <div className="input-group">
                      <span className="input-group-text border-0 bg-white">
                        <Envelope />
                      </span>
                      <input
                        type="email"
                        className="form-control border-0 p-3"
                        placeholder="EMAIL ADDRESS"
                      />
                      <button
                        class="btn btn-warning px-4 fw-semibold"
                        type="button"
                      >
                        Get the Coupon
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-down-section">
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-3 col-sm-6">
              <div className="mb-5">
                <img src={Logo} />
              </div>
              <div>
                <ul className="text-white list-unstyled text">
                  <li className="mb-3">
                    <a  href="order.html">
                      Track Order
                    </a>
                  </li>
                  <li className="mb-3">
                    <a  href="order.html">
                      Delivery & Returns
                    </a>
                  </li>
                  <li className="mb-3">
                    <a  href="order.html">
                      Warranty
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div>
                <h4 className="text-white fw-bold mb-3">About As</h4>
                <ul className="text-white list-unstyled text">
                  <li className="mb-3">
                    <a  href="order.html">
                      Rave’s Story
                    </a>
                  </li>
                  <li className="mb-3">
                    <a  href="order.html">
                      Coporate News
                    </a>
                  </li>
                  <li className="mb-3">
                    <a  href="order.html">
                      Investors
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div>
                <h4 className="text-white fw-bold mb-3">Useful Links</h4>
                <ul className="text-white list-unstyled text">
                  <li className="mb-3">
                    <a  href="order.html">
                      Secure Payment
                    </a>
                  </li>
                  <li className="mb-3">
                    <a  href="order.html">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="mb-3">
                    <a  href="order.html">
                      Terms of Use
                    </a>
                  </li>
                  <li className="mb-3">
                    <a  href="order.html">
                      Archived Products
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div>
                <div>
                  <h4 className="text-white fw-bold mb-3">Contact Info</h4>
                  <div className="d-flex align-items-start justify-content-start gap-2">
                    <div>
                      <IconLocation />
                    </div>
                    <div className="ms-3">
                      <h4 className="text-white fw-bold mb-3">Adress:</h4>
                      <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-start justify-content-start gap-2">
                  <div>
                    <IconLocation />
                  </div>
                  <div className="ms-3">
                    <h4 className="text-white fw-bold mb-3">Phone::</h4>
                    <p>+880171889547</p>
                  </div>
                </div>
                <div className="d-flex align-items-start justify-content-start gap-2">
                  <div>
                    <IconLocation />
                  </div>
                  <div className="ms-3">
                    <h4 className="text-white fw-bold mb-3">Email:</h4>
                    <p>Demo@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="d-flex justify-content-between align-items-center footer-end-section mt-4 mb-4">
            <div className="d-flex align-items-center">
              <a className="me-3">
                <Instagram />
              </a>
              <a className="me-3">
                <Instagram />
              </a>
              <a className="me-3">
                <Instagram />
              </a>
              <p className="m-0">
                ©2024
                <a
                  className="text-decoration-none fw-bold text-success"
                  href="#"
                >
                    Quomodosoft 
                </a> 
                 All rights reserved
              </p>
            </div>
            <img src={Payment}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuterSection;
