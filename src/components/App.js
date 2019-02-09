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
    status: false,
    text: ''
  }
}

class App extends Component {
  state = {
    ...DEFAULT_STATE
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    
    const inputText = e.target.toDo.value;

    // Check if input is empty
    if (!inputText) {
      this.handleData();
      this.activateTypeError("Please enter what you want to do");
      return;
    }

    // Check if input is same as before
    if (this.state.oldTextInput === inputText) {
      this.activateTypeError("Please do another thing!");
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

  handleData = () => this.setState(() => ({ ...DEFAULT_STATE }));

  handleTextInput = (e) => {
    const textInput = e.target.value;
    this.setState(() => ({ textInput }));
  };

  activateTypeError = (text) => {
    this.setState(() => ({ typeError: { status: true, text } }));
  }

  handleTypeError = () => {
    this.setState(() => ({ typeError: { status: false } }));
  }

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
              handleData={this.handleData} 
              data={this.state.data} 
            />
          }
        </div>
        <ErrorModal 
          handleTypeError={this.handleTypeError} 
          typeError={this.state.typeError} 
        />
      </div>
    );
  }
}

export default App;
