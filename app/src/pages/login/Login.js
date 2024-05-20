import { useState } from "react";
import axios from "axios";
import HeaderTopSection from "../../components/header-top-section/HeaderTopSection";
import HeaderCenterSection from "../../components/header-center-section/HeaderCenterSection";
import HeaderBottomSection from "../../components/header-bottom-section/HeaderBottomSection";
import FooterSection from "../../components/footer-section/FooterSection";
import VectorLine from "../../assets/img/vector-line.png";
import AccountImg from "../../assets/img/account-img.png";
import BlogTitleSection from "../../components/blog-tittle-section/BlogTitleSection";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loginError, setLoginError] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const formData = {
      email,
      password,
    };

    axios
      .post("http://localhost:8100/api/v1/auth/login/", formData)
      .then((response) => {
        console.log("Użytkownik zarejestrowany!", response.data);
        navigate("/home");
      })
      .catch((error) => {
        if (error.response) {
          setLoginError(error.response.data.detail);
        }
      });
  };

  return (
    <>
      <HeaderTopSection />
      <HeaderCenterSection />
      <HeaderBottomSection />
      <BlogTitleSection />
      <div>
        <div className="auth-section">
          <div className="container">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-lg-6 col-xs-12">
                {/* formularz rejstracji */}
                <div className="review-form me-5">
                  <div className="d-flex flex-column align-items-center justify-content-center mb-3">
                    <h3 className="fw-bold m-0">Log in</h3>
                    <img src={VectorLine} />
                  </div>
                  <form onSubmit={onSubmitHandler}>
                    <div class="d-flex flex-column gap-3 mb-3 auth-wrrap">
                      <div className="w-100">
                        <label for="exampleInputEmail1" class="form-label">
                          Email**
                        </label>
                        <input
                          type="email"
                          className="form-control border-success"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="w-100">
                        <label
                          for="exampleInputPassword1"
                          className="form-label"
                        >
                          Password*
                        </label>
                        <input
                          type="password"
                          className="form-control border-success"
                          id="exampleInputPassword1"
                          placeholder="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div class="d-flex justify-content-between mb-3 form-check">
                      <div>
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                        />
                        <label
                          className="form-check-label text-secondary"
                          for="exampleCheck1"
                        >
                          Remember Me
                        </label>
                      </div>
                      <a className="text-success text-decoration-none" href="#">
                        Forgot password?
                      </a>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-success w-100 fw-bold p-2 mb-4"
                    >
                      Log in
                    </button>
                    <p className="text-center text-secondary">
                      Don't have an account ?{" "}
                      <Link
                        to="/registration"
                        className="fw-bold text-decoration-none"
                      >
                        Sing Up Free
                      </Link>
                    </p>
                    {loginError ? (
                      <p className="small text-danger">{loginError}</p>
                    ) : null}
                  </form>
                </div>
              </div>
              <div className="col-lg-6 col-xs-12">
                <img className="img-fluid accountImg-hiden" src={AccountImg} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
};

export default Login;
