import { useState, useEffect } from "react";
import axios from "axios";
import "./category-menu-section.scss";
import { ReactComponent as Dropdown } from "../../assets/img/dropdown.svg";
import { ReactComponent as Arrowdown } from "../../assets/img/arrowdown.svg";
import { ReactComponent as Vegetable } from "../../assets/img/vegetable.svg";
import { ReactComponent as DropDownIcon } from "../../assets/img/drop-down-icon.svg";

const CategoryMenuSection = () => {
  const [visible, setVisible] = useState(false);
  const popupClassName = visible ? "" : "visually-hidden"; //jezeli jest fals to ukrywa jezeli true to nic

  const [menuCategoryItems, setMenuCategoryItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8100/api/v1/common/categories/").then((respons) => {
      setMenuCategoryItems(respons.data)
     
    })
  }, [])

  return (
    <>
      {visible ? (
        <div
          onClick={() => {
            setVisible(false);
          }}
          className="position-absolute top-0 start-0 w-100 h-100 opacity-0 z-2"
        ></div>
      ) : null}

      <div className="category-menu-section position-relative z-3">
        <button
          onClick={() => {
            setVisible(true);
          }}
          className=" d-flex  align-items-center justify-content-between  btn bg-white px-4 btn-allcategory border-bottom rounded-bottom-0"
        >
          <div>
            <Dropdown />
            <span className="ms-2">All Categories</span>
          </div>
          <span>
            <Arrowdown />
          </span>
        </button>
        {/* DropDownList */}
        <div className={popupClassName}>
          <ul className="list-group list-group-flush bg-white position-absolute-menu w-100">
            {menuCategoryItems.map((menuCategoryItem) => {
              return(
                <li key={menuCategoryItem.id} className="list-group-item">
                <a className="text-decoration-none" href="#product-sidebar.html">
                  <div className="d-flex justify-content-between px-2 py-2">
                    <div className="d-flex align-items-center">
                      
                      <i className={`icon me-3 ${menuCategoryItem.icon_name}`}></i>
                      <span>{menuCategoryItem.name}</span>
                    </div>
                    <div>
                      <DropDownIcon />
                    </div>
                  </div>
                </a>
              </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CategoryMenuSection;
