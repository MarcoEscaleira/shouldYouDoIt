import React, { Component } from 'react';
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
}

class App extends Component {
  state = {
    ...DEFAULT_STATE
  }
  
  handleFormSubmit = (e) => {
    e.preventDefault();

    this.handleData();
    
    const inputText = e.target.toDo.value;

    // Check if input is empty
    if (!inputText) {
      this.handleState();
      this.handleTypeError("Please enter what you want to do");
      return;
    }

    // Check if input is same as before
    if (this.state.oldTextInput === inputText) {
      this.handleState();
      this.handleTypeError("Please do another thing!");
      return;
    }

    //Loading animation 
    this.setState(() => ({ print: true, data: {
      "answer": "loading",
      "image": "./gifs/Blocks-1s-200px.gif"
    } }));
    
    const request = async () => {
      const response = await fetch('https://shouldyoudoit.herokuapp.com/');
      const data = await response.json();
      this.setState(() => ({ print: true, data, oldTextInput: inputText }));
    }
    request();
  }

  handleState = () => this.setState(() => ({ ...DEFAULT_STATE }));
  
  handleData = () => this.setState(() => ({ data: {} }));

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
    this.setState(() => ({ textInput }));
  };

  render() {
    return (
      <div className="app">
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
      </div>
    );
  }
}

export default App;
