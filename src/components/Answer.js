import React from 'react'
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {actions} from "../store/decisions";


const Answer = ({handleState, data: {msg, img}}) => (
  <div className="answer">
    <h1 className="answer__title">{ (msg === 'loading') ? "Loading" : msg }</h1>
    <img 
      src={img}
      alt="Should You Do It gif"
      className="answer__image"
    />
    <button 
      onClick={handleState}
      className="answer__btn"
    >
      Clean
    </button>
  </div>
);

Answer.propTypes = {
  handleState: PropTypes.func,
  data: PropTypes.object
};

const mapStateToProps = state => ({
  data: state.data
});

const mapDispatchToProps = {
  handleState: actions.resetState
};

export default connect(mapStateToProps, mapDispatchToProps)(Answer);