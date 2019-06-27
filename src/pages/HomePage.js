import React from 'react';
import { useSelector } from 'react-redux';

import Form from '../components/Form';
import Answer from '../components/Answer';

const Home = () => {
  const print = useSelector(state => state.print);
  return (
    <div className="container">
      <Form />
      {print && <Answer />}
    </div>
  );
};

export default Home;
