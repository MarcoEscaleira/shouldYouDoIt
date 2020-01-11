import React from 'react';
import { connect } from 'react-redux';
import { StoreState } from 'store';
import loadingGif from '~/assets/gifs/loading.gif';
import { actions, selectors, DecisionsStateData } from '../store/decisions';
// TODO: Check import export of types not working
import { ResetData } from '../store/decisions/actions';

export interface Props {
  resetData: ResetData;
  data: DecisionsStateData
}

const Answer: React.FC<Props> = ({
  resetData,
  data: { msg, img }
}) => (
  <div className="answer">
    <h1 className="answer__title">{msg}</h1>
    <img src={img || loadingGif} alt="Should You Do It gif" className="answer__image" />
    <button onClick={resetData} className="answer__btn">
      Clean
    </button>
  </div>
);

Answer.defaultProps = {
  data: { msg: 'loading', img: '' }
}

const mapStateToProps = (state: StoreState) => ({
  data: selectors.getData(state)
});

const mapDispatchToProps = {
  resetData: actions.resetData
};

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(Answer);
