import cx from "classnames";
import React, { useState } from "react";
import CssTransition from "react-transition-group/CSSTransition";

const Menu = () => {
  const [showBallon, useShowBallon] = useState(false);
  const toggle = () => useShowBallon(!showBallon);
  return (
    <div className="container">
      <button
        className={cx("toggler", { "toggler--active": showBallon })}
        onClick={toggle}
      >
        Menu
      </button>
      {showBallon && (
        <div className="menu">
          <ul className="list">
            <li className="list-item">Home</li>
            <li className="list-item">Profile</li>
            <li className="list-item">favourites</li>
            <li className="list-item">Sign Out</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
