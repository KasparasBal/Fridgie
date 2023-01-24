import FormVisibility from "../store/formVisibility-context";
import React, { useContext } from "react";
import SearchBar from "./SearchBar";
import funnel from "../assets/funnel.svg";

const Navbar = () => {
  const [formVisibility, setFormVisibility] = useContext(FormVisibility);
  const formHandler = () => {
    formVisibility === "formHidden"
      ? setFormVisibility("")
      : setFormVisibility("formHidden");
  };

  return (
    <nav className="nav">
      <SearchBar />
      <button className="nav_btn" onClick={formHandler}>
        +
      </button>
      <button className="nav_btn" onClick={formHandler}>
        <img className="nav_img" src={funnel} />
      </button>
    </nav>
  );
};

export default Navbar;
