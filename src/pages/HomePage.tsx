import React from 'react';
import { useSelector } from 'react-redux';

import Form from '../components/Form';
import Answer from '../components/Answer';
import { DecisionsState } from '~store/decisions';

const Home: React.FC = () => {
  const print = useSelector<DecisionsState, boolean>(state => state.print);

  return (
    <section className="container">
      <Form />
      {print && <Answer />}
    </section>
  );
};

export default Home;
