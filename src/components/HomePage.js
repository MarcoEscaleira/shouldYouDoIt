import React, { Component, Fragment } from 'react';
import Form from './Form';
import Answer from './Answer';
import ErrorModal from './ErrorModal';

const DEFAULT_STATE = {
  print: false,
  data: {},
  oldTextInput: '',
  textInput: '',
  typeError: {
    showModal: false,
    text: ''
  }
};

class Home extends Component {
  state = {
    ...DEFAULT_STATE
  };
  
  handleFormSubmit = (e) => {
    e.preventDefault();

    this.handleData();
    
    const inputText = e.target.toDo.value.trim();

    // Check if input is empty
    if (!inputText) {
      this.handleData();
      this.handleTypeError("Please enter what you want to do");
      return;
    }

    // Check if input is same as before
    if (this.state.oldTextInput === inputText) {
      this.handleData();
      this.handleTypeError("Please do another thing!");
      return;
    }

    //Loading animation 
    this.setState(() => ({ print: true, data: {
      "msg": "loading",
      "img": "./gifs/Blocks-1s-200px.gif"
    } }));
    
    const request = async () => {
      const response = await fetch(`https://shouldyoudoit.herokuapp.com/?search=${inputText}`, {
        headers: {
          "Content-Type": "application/json",
        }
      });
      const data = await response.json();
      this.setState(() => ({ print: true, data, oldTextInput: inputText }));
    };
    request();
  };

  handleState = () => this.setState(() => ({ ...DEFAULT_STATE }));
  
  handleData = () => this.setState(() => ({ 
    print: false,
    data: {}
  }));

  handleTypeError = (text = '') => this.setState(() => ({
    typeError: {
      showModal: true,
      text
    }
  }));

  closeTypeError = () => this.setState(() => ({
    typeError: {
      showModal: false,
      text: ''
    }
  }));

  handleTextInput = (e) => {
    const textInput = e.target.value;
    if(!textInput || textInput.match(/\w+/)) {
      this.setState(() => ({ textInput }));
    }
  };

  render() {
    return (
      <Fragment>
        <div className="container">
          <Form 
            handleFormSubmit={this.handleFormSubmit} 
            handleTextInput={this.handleTextInput} 
            text={this.state.textInput}
          />
          { this.state.print &&
            <Answer 
              handleData={this.handleState} 
              data={this.state.data} 
            />
          }
        </div>
        <ErrorModal 
          show={this.state.typeError.showModal}
          text={this.state.typeError.text}
          closeCallback= {this.closeTypeError}
        />
      </Fragment>
    );
  }
}

export default Home;
