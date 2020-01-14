import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { UnaryFn, NullaryFn, BinaryFn } from "../../utils/functionalTypes";
import { actions as decisionsActions, selectors } from "../../store/decisions";
import { actions as errorModalActions } from "../../store/errorModal";
import { API_URL } from "../../config";
import { StoreState } from "../../store";

import {
  Container,
  Title,
  FormContainer,
  Input,
  Submit
} from "./styled-components";

type SetDataType = BinaryFn<string, string, void>;
type ResetDataType = NullaryFn<void>;
type SetLoadingAnimationType = NullaryFn<void>;

type Props = {
  setData: SetDataType;
  resetData: ResetDataType;
  setLoadingAnimation: SetLoadingAnimationType;
  oldTextInput: string;
  openErrorModal: UnaryFn<string, void>;
};

const request = async (textInput: string, setData: SetDataType) => {
  const response = await fetch(`${API_URL}/?search=${textInput}`, {
    headers: {
      "Content-Type": "application/json"
    }
  });
  const data = await response.json();

  setData(data, textInput);
};

const handleTextInput = (
  textInput: string,
  setTextInput: UnaryFn<string, void>
) => {
  if (!textInput || /^[a-z\d\-_\s]+$/i.test(textInput)) {
    setTextInput(textInput.trim());
  }
};

const handleFormSubmit = (
  event,
  resetData: ResetDataType,
  textInput: string,
  oldTextInput: string,
  setLoadingAnimation: SetLoadingAnimationType,
  openErrorModal: UnaryFn<string, void>,
  setData: SetDataType
) => {
  event.preventDefault();
  resetData();

  if (!textInput) {
    openErrorModal("Please enter what you want to do.");
    return;
  }

  if (oldTextInput === textInput) {
    openErrorModal("Please do another thing!");
    return;
  }

  setLoadingAnimation();

  request(textInput, setData);
};

const Form: React.FC<Props> = ({
  resetData,
  oldTextInput,
  setLoadingAnimation,
  openErrorModal,
  setData
}) => {
  const [textInput, setTextInput] = useState<string>("");

  return (
    <Fragment>
      <Container>
        <Title>What do you want to do?</Title>
        <FormContainer
          onSubmit={e =>
            handleFormSubmit(
              e,
              resetData,
              textInput,
              oldTextInput,
              setLoadingAnimation,
              openErrorModal,
              setData
            )
          }
          autoComplete="off"
        >
          <Input
            type="text"
            name="toDo"
            value={textInput}
            onChange={e => handleTextInput(e.target.value, setTextInput)}
            data-testid="input"
          />
          <Submit type="submit">Decide</Submit>
        </FormContainer>
      </Container>
    </Fragment>
  );
};

const mapStateToProps = (state: StoreState) => ({
  oldTextInput: selectors.getOldTextInput(state)
});

const mapDispatchToProps = {
  resetData: decisionsActions.resetData,
  setLoadingAnimation: decisionsActions.setLoadingAnimation,
  setData: decisionsActions.setData,
  openErrorModal: errorModalActions.openModal
};

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(Form);
