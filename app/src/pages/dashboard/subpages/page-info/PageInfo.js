import "./page-info.scss";
import UpLoad from "../../../../assets/img/upload.png";
import { ReactComponent as InputFile } from "../../../../assets/img/input-file.svg";

const PageInfo = () => {
  return (
    <div className="w-100">
      <div className="row">
        <div className="col-lg-7 gx-5">
          <form>
            <div class="d-flex align-items-center gap-3 mb-3 auth-wrrap">
              <div className="w-100">
                <label for="exampleInputEmail1" class="form-label">
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
                <label for="exampleInputEmail1" class="form-label">
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
            <div class="d-flex  align-items-center gap-3 mb-3 auth-wrrap">
              <div className="w-100">
                <label for="exampleInputPassword1" className="form-label">
                  Email*
                </label>
                <input
                  type="email"
                  className="form-control border-success"
                  id="email"
                  placeholder="user@gmail.com"
                />
              </div>
              <div className="w-100">
                <label for="exampleInputPassword1" className="form-label">
                  Phone*
                </label>
                <input
                  type="text"
                  className="form-control border-success"
                  id="exampleInputPassword1"
                  placeholder="+880388**0899"
                />
              </div>
            </div>
            <div class="mb-3">
              <div>
                <label for="exampleInputEmail1" class="form-label">
                  Country*
                </label>
                <select className="form-select border-success">
                  <option selected>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div class="mb-3">
              <div>
                <label for="exampleInputEmail1" class="form-label">
                  Address*
                </label>
                <input
                  type="email"
                  className="form-control border-success"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Your Address"
                />
              </div>
            </div>
            <div class="d-flex align-items-center gap-3 mb-3 auth-wrrap">
              <div className="w-100">
                <label for="exampleInputEmail1" class="form-label">
                  Town/City*
                </label>
                <select className="form-select border-success">
                  <option selected>London...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="w-100">
                <label for="exampleInputEmail1" class="form-label">
                 Postcode/ZIP*
                </label>
                <input
                  type="email"
                  className="form-control border-success "
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="0000"
                />
              </div>
            </div>
            <div className="my-4">
            <button
              type="button"
              className="btn text-danger px-4 py-2  fw-bold"
            >
              Cencel
            </button>
            <button
              type="submit"
              className="btn btn-success px-4 py-2 fw-bold"
            >
              Update Profile
            </button>
            </div>
          </form>
        </div>

        <div className="col-lg-5 gx-5">
          <div>
            <h5 className="fw-bold text-black">Update Logo</h5>
            <p>Profile of at least Size300x300. Gifs work too. Max 5mb</p>
          </div>
          <div className="d-flex justify-content-center align-items-center  position-relative">
            <img className="upload-img" src={UpLoad} />
            <div className="input-file-position">
              <label for="File" className="form-label label-uploade">
                <InputFile />
              </label>
              <input type="file" id="File" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageInfo;
