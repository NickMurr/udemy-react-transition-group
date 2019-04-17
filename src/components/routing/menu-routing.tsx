import cx from "classnames";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  RouteComponentProps,
  Switch,
} from "react-router-dom";
import CSSTransition from "react-transition-group/CSSTransition";
import TransitionGroup from "react-transition-group/TransitionGroup";
import Favourites from "../favourite";
import Home from "./Home";
import Profile from "./Profile";

const Base = () => {
  return (
    <Router>
      <Route component={MenuRouting} />
    </Router>
  );
};

interface IProps extends RouteComponentProps {}
const MenuRouting = (props: IProps) => {
  const { location } = props;
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
        <CSSTransition
          in={showBallon}
          timeout={350}
          classNames="balloon"
          unmountOnExit={true}
          onEntered={toggleHighlightedMenuItem}
          onExit={toggleHighlightedMenuItem}
        >
          <div className="menu">
            <ul className="list">
              <li className="list-item">
                <Link onClick={toggle} to="/">
                  Home
                </Link>
              </li>
              <li
                className={cx("list-item", {
                  "list-item--active": highlitedMenuItem,
                })}
              >
                <Link onClick={toggle} to="/profile">
                  Profile
                </Link>
              </li>
              <li className="list-item">
                <Link onClick={toggle} to="/favourites">
                  Favourites
                </Link>
              </li>
            </ul>
          </div>
        </CSSTransition>
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="swipe" timeout={500}>
            <div className="swipe-container">
              <Switch location={location}>
                <Route exact={true} path="/" component={Home} />
                <Route exact={true} path="/profile" component={Profile} />
                <Route exact={true} path="/favourites" component={Favourites} />
              </Switch>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
};

export default Base;
