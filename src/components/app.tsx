import React from "react";
import "../scss/main.scss";
import Menu from "./menu-css/menu";
import MenuStyled from "./menu/menu-styled";
// import Favourites from "./favourite";
// import Menu from "./menu";
// import MenuRouting from "./routing/menu-routing";
const App = () => {
  return (
    <div className="app">
      <MenuStyled />
      {/* <MenuRouting /> */}
      {/* <Favourites /> */}
    </div>
  );
};

export default App;
