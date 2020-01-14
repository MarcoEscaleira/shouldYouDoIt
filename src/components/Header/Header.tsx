import React from "react";
import {
  Container,
  Nav,
  List,
  Item,
  Link,
  TitleSpan
} from "./styled-components";

const Header: React.FC = () => (
  <Container>
    <Nav>
      <Link to="/" exact isTitle>
        Should You <TitleSpan>Do It</TitleSpan>
      </Link>
      <List>
        <Item>
          <Link to="/" exact isNavLink activeClassName="activeHeaderLink">
            Home
          </Link>
        </Item>
        <Item>
          <Link to="/gallery" isNavLink activeClassName="activeHeaderLink">
            Gallery
          </Link>
        </Item>
      </List>
    </Nav>
  </Container>
);

export default Header;
