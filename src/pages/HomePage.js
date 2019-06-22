import React, { Fragment } from "react";

import Form from "../components/Form";
import Answer from "../components/Answer";
import ErrorModal from "../components/ErrorModal";
import { useSelector } from "react-redux";

const Home = () => {
  const print = useSelector(state => state.print);
  return (
    <Fragment>
      <div className="container">
        <Form />
        {print && <Answer />}
      </div>
      <ErrorModal />
    </Fragment>
  );
};

export default Home;
