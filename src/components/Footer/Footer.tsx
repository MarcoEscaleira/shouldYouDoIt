import React from "react";
import { Container, Text, NameLink, Heart } from "./styled-components";

const Footer: React.FC = () => (
  <Container>
    <Text>
      Made with <Heart>&#x2665;</Heart> by&nbsp;
      <NameLink href="https://github.com/marcoescaleira">
        Marco Escaleira
      </NameLink>
      &nbsp;&&nbsp;
      <NameLink href="https://github.com/MarceloSilva00">
        Marcelo Silva
      </NameLink>
    </Text>
  </Container>
);

export default Footer;
