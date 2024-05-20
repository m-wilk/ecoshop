import "./seller.scss";
import HeaderTopSection from "../../components/header-top-section/HeaderTopSection";
import HeaderCenterSection from "../../components/header-center-section/HeaderCenterSection";
import HeaderBottomSection from "../../components/header-bottom-section/HeaderBottomSection";
import FooterSection from "../../components/footer-section/FooterSection";
import UpLoad from "../../assets/img/upload.png";
import { ReactComponent as InputFile } from "../../assets/img/input-file.svg";
import SallerCover from "../../assets/img/sallers-cover.png";
import BlogTitleSection from "../../components/blog-tittle-section/BlogTitleSection";
import { Link } from "react-router-dom";

const Seller = () => {
  return (
    <>
      <HeaderTopSection />
      <HeaderCenterSection />
      <HeaderBottomSection />
      <BlogTitleSection title="Become A Seller!" />
      <div className="seller-section">
        <div className="container">
          <div className="seller-application-section">
            <div className="row">
              <div className="col-lg-7 text-secondary gx-5">
                <div className="row gy-5">
                  <div className="col-lg-12">
                    <div className="seller-information">
                      <h5 className="fw-bold text-black">Seller Information</h5>
                      <p>
                        Fill the form below or write us We will help you as soon
                        as possible
                      </p>
                    </div>
                    <form>
                      <div className="d-flex flex-column gap-3 mb-3 auth-wrrap">
                        <div className="w-100">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            Email Adress**
                          </label>
                          <input
                            type="email"
                            className="form-control border-success"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter your email addrress"
                          />
                        </div>
                        <div className="w-100">
                          <label
                            htmlFor="exampleInputPassword1"
                            className="form-label"
                          >
                            Phone*
                          </label>
                          <input
                            type="text"
                            className="form-control border-success"
                            id="exampleInputPassword1"
                            placeholder="+88013**977957"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-12">
                    <div className="seller-information">
                      <h5 className="fw-bold text-black">Shop Information</h5>
                      <p>
                        Fill the form below or write us We will help you as soon
                        as possible
                      </p>
                    </div>

                    <form>
                      <div className="d-flex flex-column gap-3 mb-3 auth-wrrap">
                        <div className="w-100">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            Shop Name**
                          </label>
                          <input
                            type="text"
                            className="form-control border-success"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Name"
                          />
                        </div>
                        <div className="w-100">
                          <label
                            htmlFor="exampleInputPassword1"
                            className="form-label"
                          >
                            Address*
                          </label>
                          <input
                            type="text"
                            className="form-control border-success"
                            id="exampleInputPassword1"
                            placeholder="Address"
                          />
                        </div>
                      </div>
                      <div className="form-check mb-4 mt-4">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                        />
                        <label
                          className="form-check-label text-secondary mb-2"
                          htmlFor="exampleCheck1"
                        >
                          I agree all terms and condition in Ecoshop
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-success w-100 fw-bold p-2"
                      >
                        Create Seller Account
                      </button>
                      <p className="text-secondary mt-4">
                        Already have an Account? &nbsp;
                        <Link
                          to="/login"
                          className="fw-bold text-decoration-none"
                        >
                          Log in
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 text-secondary gx-5 mt-3">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="seller-information">
                      <h5 className="fw-bold text-black">Update Logo</h5>
                      <p>
                        Profile of at least Size300x300. Gifs work too.Max 5mb
                      </p>
                    </div>
                    <div className="d-flex justify-content-center align-items-center  position-relative">
                      <img className="upload-img" src={UpLoad} />
                      <div className="input-file-position">
                        <label
                          htmlFor="File"
                          className="form-label label-uploade"
                        >
                          <InputFile />
                        </label>
                        <input type="file" id="File" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 gy-5">
                    <div className="seller-information">
                      <h5 className="fw-bold text-black">Update Cover</h5>
                      <p>Cover of at least Size 1170x920</p>
                    </div>
                    <div className="d-flex justify-content-center align-items-center  position-relative">
                      <img className="upload-cover" src={SallerCover} />
                      <div className="input-file2-position">
                        <label
                          htmlFor="File"
                          className="form-label label-uploade"
                        >
                          <InputFile />
                        </label>
                        <input type="file" id="File" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
};

export default Seller;
