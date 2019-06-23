import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actions, selectors } from '../store/decisions';

const Answer = ({
  resetData,
  data: { msg = 'loading', img = './gifs/Blocks-1s-200px.gif' }
}) => (
  <div className="answer">
    <h1 className="answer__title">{msg}</h1>
    <img src={img} alt="Should You Do It gif" className="answer__image" />
    <button onClick={resetData} className="answer__btn">
      Clean
    </button>
  </div>
);

Answer.propTypes = {
  resetData: PropTypes.func,
  data: PropTypes.object
};

const mapStateToProps = state => ({
  data: selectors.getData(state)
});

const mapDispatchToProps = {
  resetData: actions.resetData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Answer);
