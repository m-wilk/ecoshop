import "./header-nav-menu.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const HeaderNawMenu = () => {
  const [navItems, setNavItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8100/api/v1/common/menu/").then((respons) => {
      setNavItems(respons.data);
      
    });
  }, []);

  return (
    <ul className="nav d-flex align-items-center">
      {navItems.map((navItem) => {
        return (
          <li key={navItem.id} className="nav-item">
            <a className="nav-link text-white fw-bold" href="#">
              <span>{navItem.label}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default HeaderNawMenu;
