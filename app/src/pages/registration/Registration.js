import { useState } from "react";
import axios from "axios";
import HeaderTopSection from "../../components/header-top-section/HeaderTopSection";
import HeaderCenterSection from "../../components/header-center-section/HeaderCenterSection";
import HeaderBottomSection from "../../components/header-bottom-section/HeaderBottomSection";
import FooterSection from "../../components/footer-section/FooterSection";
import VectorLine from "../../assets/img/vector-line.png";
import AccountImg from "../../assets/img/account-img.png";
import { Link, useNavigate } from "react-router-dom";


const Registration = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();
  const [registerErrors, setRegisterErrors] = useState({});

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const formData = {
      name: "a",
      surname: "a",
      email,
      password,
      password2,
    };

    axios
      .post("http://localhost:8100/api/v1/auth/register/", formData)
      .then((response) => {
        console.log("Użytkownik zarejestrowany!", response.data);
        navigate("/login")
      })
      .catch((error) => {
        if (error.response) {
          setRegisterErrors(error.response.data);
        }
      });
  };
  console.log(registerErrors);
  return (
    <>
      <HeaderTopSection />
      <HeaderCenterSection />
      <HeaderBottomSection />
    
      <div className="auth-section">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-lg-6 col-xs-12">
              {/* formularz rejstracji */}
              <div className="review-form me-5">
                <div className="d-flex flex-column align-items-center justify-content-center mb-3">
                  <h3 className="fw-bold m-0">Create Account</h3>
                  <img src={VectorLine} />
                </div>
                <form onSubmit={onSubmitHandler}>
                  <div className="d-flex align-items-center gap-3 mb-3 auth-wrrap">
                    <div className="w-100">
                      <label htmlFor="exampleInputEmail1" className="form-label">
                        First Name*
                      </label>
                      <input
                        type="text"
                        className="form-control border-success"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder=" First Name"
                      />
                    </div>
                    <div className="w-100">
                      <label htmlFor="exampleInputEmail1" className="form-label">
                        Last Name*
                      </label>
                      <input
                        type="email"
                        className="form-control border-success "
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <div>
                      <label htmlFor="exampleInputEmail1" className="form-label">
                        Email*
                      </label>
                      <input
                        type="email"
                        className="form-control border-success"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="user@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        // formNoValidate
                      />
                      {Array.isArray(registerErrors.email)
                        ? registerErrors.email.map((error) => (
                            <p className="small text-danger">{error}</p>
                          ))
                        : null}
                    </div>
                  </div>
                  <div className="d-flex  align-items-center gap-3 mb-3 auth-wrrap">
                    <div className="w-100">
                      <label htmlFor="exampleInputPassword1" className="form-label">
                        Password*
                      </label>
                      <input
                        type="password"
                        className="form-control border-success"
                        id="exampleInputPassword1"
                        placeholder="*****"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      {Array.isArray(registerErrors.password)
                        ? registerErrors.password.map((error) => (
                            <p className="small text-danger">{error}</p>
                          ))
                        : null}
                    </div>
                    <div className="w-100">
                      <label htmlFor="exampleInputPassword1" className="form-label">
                        Retype Password*
                      </label>
                      <input
                        type="password"
                        className="form-control border-success"
                        id="exampleInputPassword1"
                        placeholder="*****"
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                      />
                      {Array.isArray(registerErrors.password2)
                        ? registerErrors.password2.map((error) => (
                            <p className="small text-danger">{error}</p>
                          ))
                        : null}
                    </div>
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label
                      className="form-check-label text-secondary"
                      htmlFor="exampleCheck1"
                    >
                      I agree all terms and condition in{" "}
                      <span className="fw-bold">EcoShop.</span>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-success w-100 fw-bold p-2 mb-4"
                  >
                    Create an Account
                  </button>
                  <p className="text-center text-secondary">
                    Already have an account ?{" "}
                    <Link to="/login" className="fw-bold text-decoration-none">
                      Log in
                    </Link>
                  </p>
                </form>
              </div>
            </div>
            <div className="col-lg-6 col-xs-12">
              <img className="img-fluid accountImg-hiden" src={AccountImg} />
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
};

export default Registration;
