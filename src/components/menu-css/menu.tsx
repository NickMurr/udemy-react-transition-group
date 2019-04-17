import cx from "classnames";
import React, { useState } from "react";
import CssTransition from "react-transition-group/CSSTransition";

const Menu = () => {
  const [showBallon, useShowBallon] = useState(false);
  const [highlitedMenuItem, useHighlitedMenuItem] = useState(false);

  const toggle = () => useShowBallon(!showBallon);

  const toggleHighlightedMenuItem = () => {
    useHighlitedMenuItem(!highlitedMenuItem);
  };
  return (
    <div className="menu-component">
      <div className="container">
        <button
          className={cx("toggler", { "toggler--active": showBallon })}
          onClick={toggle}
        >
          Menu
        </button>
        <CssTransition
          in={showBallon}
          timeout={350}
          classNames="balloon"
          unmountOnExit={true}
          onEntered={toggleHighlightedMenuItem}
          onExit={toggleHighlightedMenuItem}
        >
          <div className="menu">
            <ul className="list">
              <li className="list-item">Home</li>
              <li
                className={cx("list-item", {
                  "list-item--active": highlitedMenuItem,
                })}
              >
                Profile
              </li>
              <li className="list-item">Favourites</li>
              <li className="list-item">Sign Out</li>
            </ul>
          </div>
        </CssTransition>
      </div>
    </div>
  );
};

export default Menu;
