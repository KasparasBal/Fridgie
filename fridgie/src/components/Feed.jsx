import { useState } from "react";
import hamburger from "../assets/hamburger.svg";

const Feed = () => {
  const [buttonClass, setButtonClass] = useState("rows");
  const [itemClass, setItemClass] = useState("row");
  const handleDisplayType = () => {
    buttonClass === "rows" ? setButtonClass("cards") : setButtonClass("rows");
  };

  return (
    <main className="feed">
      <button
        className={`feed_sort-btn ${buttonClass}`}
        onClick={handleDisplayType}
      ></button>
      <ul className="feed_content">
        <li className={`${itemClass}`}>
          <span className="row_image">
            <img className="row_image_comp" src={hamburger} />
          </span>
          <span>Frozen Burger Patties</span>
          <span className="row_opened">5 days</span>
          <span className="row_amount">3x</span>
        </li>
        <li className={`${itemClass}`}>
          <span className="row_image">
            <img className="row_image_comp" src={hamburger} />
          </span>
          <span>Frozen Burger Patties</span>
          <span className="row_opened">5 days</span>
          <span className="row_amount">3x</span>
        </li>
        <li className={`${itemClass}`}>
          <span className="row_image">
            <img className="row_image_comp" src={hamburger} />
          </span>
          <span>Frozen Burger Patties</span>
          <span className="row_opened">5 days</span>
          <span className="row_amount">3x</span>
        </li>
      </ul>
    </main>
  );
};

export default Feed;
