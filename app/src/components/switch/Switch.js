import { useState } from "react";
import "./switch.scss";

const Switch = () => {
    const [isActive, setIsActive] = useState(false)
  return (
    <span
      onClick={() => {
        setIsActive(!isActive);
      }}
      className={`switch-icon ${isActive ? "active" : ""}`}
    ></span>
  );
};

export default Switch;
