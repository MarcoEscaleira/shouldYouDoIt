import React, { Component, Fragment } from 'react';

import Form from '../components/Form';
import Answer from '../components/Answer';
import ErrorModal from '../components/ErrorModal';
import {connect} from "react-redux";


class Home extends Component {

  render() {
    return (
      <Fragment>
        <div className="container">
          <Form />
          { this.props.print &&
            <Answer />
          }
        </div>
        <ErrorModal />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  print: state.print
});

export default connect(mapStateToProps)(Home);
