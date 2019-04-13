import React from "react";
import "../scss/main.scss";
import Favourites from "./favourite";
import Menu from "./menu";
const App = () => {
  return (
    <div className="app">
      {/* <Menu /> */}
      <Favourites />
    </div>
  );
};

export default App;
