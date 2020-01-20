import React from "react";
import { connect } from "react-redux";
import { StoreState } from "~store";
import { Container, Title, Image, CleanButton } from "./styled-components";
import { actions, selectors, DecisionsStateData } from "~store/decisions";
import { NullaryFn } from "~utils/functionalTypes";
// @ts-ignore
import loadingGif from "~assets/gifs/loading.gif";

export interface Props {
  resetData: NullaryFn<void>;
  data: DecisionsStateData;
}

const Answer: React.FC<Props> = ({ resetData, data: { msg, img } }) => (
  <Container>
    <Title>{msg || "Prepairing your answer..."}</Title>
    <Image src={img || loadingGif} alt="Should You Do It gif" />
    <CleanButton onClick={resetData}>Clean</CleanButton>
  </Container>
);

Answer.defaultProps = {
  data: { msg: "loading", img: "" }
};

const mapStateToProps = (state: StoreState) => ({
  data: selectors.getData(state)
});

const mapDispatchToProps = {
  resetData: actions.resetData
};

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(Answer);
