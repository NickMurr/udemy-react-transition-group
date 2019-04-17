import React, { useState } from "react";
import { Container, List, ListItem, Menu, Toggler } from "./components";
const MenuStyled = () => {
  const [showBallon, useShowBallon] = useState(false);
  const [highlitedMenuItem, useHighlitedMenuItem] = useState(false);

  const toggle = () => useShowBallon(!showBallon);

  const toggleHighlightedMenuItem = () => {
    useHighlitedMenuItem(!highlitedMenuItem);
  };
  return (
    <Container>
      <Toggler active={showBallon} onClick={toggle}>
        Menu
      </Toggler>
      <Menu in={showBallon} timeout={350} unmountOnExit={true}>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Profile</ListItem>
          <ListItem>Favorites</ListItem>
          <ListItem>Sign out</ListItem>
        </List>
      </Menu>
    </Container>
  );
};

export default MenuStyled;
