import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Container } from "./styled-components";

import Form from "~/components/Form/Form";
import Answer from "~/components/Answer/Answer";
import ErrorModal from "~/components/ErrorModal/ErrorModal";
import { StoreState } from "~/store/";
import { getPrint } from "~/store/decisions/selectors";
import { getErrorModal } from "~/store/errorModal/selectors";

interface Props {
  print: boolean;
  errorModal: {
    isOpen: boolean;
    message: string;
  };
}

export const Home: React.FC<Props> = ({ print, errorModal }) => (
  <Fragment>
    <Container>
      <Form />
      {print && <Answer />}
    </Container>
    <ErrorModal show={errorModal.isOpen} text={errorModal.message} />
  </Fragment>
);

const mapStateToProps = (state: StoreState) => ({
  print: getPrint(state),
  errorModal: getErrorModal(state)
});

export default connect(mapStateToProps)(Home);
