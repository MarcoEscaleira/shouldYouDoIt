import React, { Component } from 'react';
import Form from './Form';
import Answer from './Answer';

const DEFAULT_STATE = {
  print: false,
  data: {},
  textInput: ''
}

class App extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleData = this.handleData.bind(this);
    
    this.state={ ...DEFAULT_STATE }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    
    const inputText = this.state.inputText;

    if (inputText === '') {
      alert("Please enter what you want to do");
      return;
    }

    this.setState(() => ({ print: true, data: {
      "answer" : "loading",
      "image": "./gifs/Blocks-1s.gif"
    } }));
    const request = async () => {
      const response = await fetch('https://yesno.wtf/api');
      const data = await response.json();
      this.setState(() => ({ print: true, data: {...data}}));
    }
    request();
  }

  handleData = () => this.setState(() => ({ ...DEFAULT_STATE }));

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
              handleData={this.handleData} 
              data={this.state.data} 
            />
          }
        </div>
      </div>
    );
  }
}

export default App;
