import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Form from '../components/Form';
import Answer from '../components/Answer';

const Home = () => {
  const print = useSelector(state => state.print);
  return (
    <Fragment>
      <div className="container">
        <Form />
        {print && <Answer />}
      </div>
    </Fragment>
  );
};

export default Home;
