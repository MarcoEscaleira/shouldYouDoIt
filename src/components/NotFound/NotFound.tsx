import React from "react";
import { Container, Label, Text, Button } from "./styled-components";

const NotFound: React.FC = () => (
  <Container>
    <Label>404</Label>
    <Text>Oops, we can't seem to find the page you're looking for.</Text>
    <Button to="/">Home</Button>
  </Container>
);

export default NotFound;
