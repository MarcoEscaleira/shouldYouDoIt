import React from "react";
import { connect } from "react-redux";
import { actions } from "../../store/errorModal";
import { NullaryFn } from "../../utils/functionalTypes";
import {
  Container,
  Overlay,
  Content,
  Title,
  Text,
  Button
} from "./styled-components";

interface Props {
  show: boolean;
  text: string;
  closeModal: NullaryFn<void>;
}

const ErrorModal: React.FC<Props> = ({ show, text, closeModal }) => (
  <Container isHidden={!show}>
    <Overlay onClick={closeModal}>
      <Content>
        <Title>Oops!</Title>
        <Text>{text}</Text>
        <Button onClick={closeModal}>Okay</Button>
      </Content>
    </Overlay>
  </Container>
);

ErrorModal.defaultProps = {
  show: false
};

const mapDispatchToProps = {
  closeModal: actions.closeModal
};

export default connect(null, mapDispatchToProps)(ErrorModal);
