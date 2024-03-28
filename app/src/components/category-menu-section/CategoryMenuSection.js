import "./category-menu-section.scss";
import { ReactComponent as Dropdown } from "../../assets/img/dropdown.svg";
import { ReactComponent as Arrowdown } from "../../assets/img/arrowdown.svg";
import { ReactComponent as Vegetable } from "../../assets/img/vegetable.svg";
import { ReactComponent as DropDownIcon } from "../../assets/img/drop-down-icon.svg";

const CategoryMenuSection = () => {
  return (
    <div className="category-menu-section position-relative">
      <button className=" d-flex  align-items-center justify-content-between  btn bg-white px-4 btn-allcategory border-bottom rounded-bottom-0">
        <div>
          <Dropdown />
          <span className="ms-2">All Categories</span>
        </div>
        <span>
          <Arrowdown />
        </span>
      </button>
      {/* DropDownList */}

      {/* <ul className="list-group list-group-flush bg-white position-absolute-menu w-100">
        <li className="list-group-item">
          <a className="text-decoration-none" href="#product-sidebar.html">
            <div className="d-flex justify-content-between px-2 py-2">
              <div className="d-flex align-items-center">
                <Vegetable className="me-3 icon" />
                <span>Vegrtable</span>
              </div>
              <div>
                <DropDownIcon />
              </div>
            </div>
          </a>
        </li>
        <li className="list-group-item">
          <a className="text-decoration-none" href="#product-sidebar.html">
            <div className="d-flex justify-content-between px-2 py-2">
              <div className="d-flex align-items-center">
                <Vegetable className="me-3 icon" />
                <span>Fruits</span>
              </div>
              <div>
                <DropDownIcon />
              </div>
            </div>
          </a>
        </li>
        <li className="list-group-item">
          <a className="text-decoration-none" href="#product-sidebar.html">
            <div className="d-flex justify-content-between px-2 py-2">
              <div className="d-flex align-items-center">
                <Vegetable className="me-3 icon" />
                <span>Juice</span>
              </div>
              <div>
                <DropDownIcon />
              </div>
            </div>
          </a>
        </li>
        <li className="list-group-item">
          <a className="text-decoration-none" href="#product-sidebar.html">
            <div className="d-flex justify-content-between px-2 py-2">
              <div className="d-flex align-items-center">
                <Vegetable className="me-3 icon" />
                <span>Meat</span>
              </div>
              <div>
                <DropDownIcon />
              </div>
            </div>
          </a>
        </li>
        <li className="list-group-item">
          <a className="text-decoration-none" href="#product-sidebar.html">
            <div className="d-flex justify-content-between px-2 py-2">
              <div className="d-flex align-items-center">
                <Vegetable className="me-3 icon" />
                <span>Smoothie</span>
              </div>
              <div>
                <DropDownIcon />
              </div>
            </div>
          </a>
        </li>
        <li className="list-group-item">
          <a className="text-decoration-none" href="#product-sidebar.html">
            <div className="d-flex justify-content-between px-2 py-2">
              <div className="d-flex align-items-center">
                <Vegetable className="me-3 icon" />
                <span>Vegrtable</span>
              </div>
              <div>
                <DropDownIcon />
              </div>
            </div>
          </a>
        </li>
        <li className="list-group-item">
          <a className="text-decoration-none" href="#product-sidebar.html">
            <div className="d-flex justify-content-between px-2 py-2">
              <div className="d-flex align-items-center">
                <Vegetable className="me-3 icon" />
                <span>Vegrtable</span>
              </div>
              <div>
                <DropDownIcon />
              </div>
            </div>
          </a>
        </li>
        <li className="list-group-item">
          <a className="text-decoration-none" href="#product-sidebar.html">
            <div className="d-flex justify-content-between px-2 py-2">
              <div className="d-flex align-items-center">
                <Vegetable className="me-3 icon" />
                <span>Vegrtable</span>
              </div>
              <div>
                <DropDownIcon />
              </div>
            </div>
          </a>
        </li>
        <li className="list-group-item">
          <a className="text-decoration-none" href="#product-sidebar.html">
            <div className="d-flex justify-content-between px-2 py-2">
              <div className="d-flex align-items-center">
                <Vegetable className="me-3 icon" />
                <span>Vegrtable</span>
              </div>
              <div>
                <DropDownIcon />
              </div>
            </div>
          </a>
        </li>
        <li className="list-group-item">
          <a className="text-decoration-none" href="#product-sidebar.html">
            <div className="d-flex justify-content-between px-2 py-2">
              <div className="d-flex align-items-center">
                <Vegetable className="me-3 icon" />
                <span>Vegrtable</span>
              </div>
              <div>
                <DropDownIcon />
              </div>
            </div>
          </a>
        </li>
      </ul> */}
    </div>
  );
};

export default CategoryMenuSection;
