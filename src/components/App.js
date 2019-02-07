import React, { Component } from 'react';
import Form from './Form';
import Answer from './Answer';

const DEFAULT_STATE = {
  print: false,
  data: {}
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
    
    if (this.state.print === true) {
      this.handleData();
    }
    
    if (e.target.toDo.value === '') {
      alert("Please enter what you want to do");
      return;
    }

    const request = async () => {
      const response = await fetch('https://yesno.wtf/api');
      const data = await response.json();
      this.setState(() => ({ print: true, data: {...data}}));
    }
    request();
  }

  handleData = () => this.setState(() => ({ ...DEFAULT_STATE }));

  render() {
    return (
      <div className="app">
        <div className="container">
          <Form handleFormSubmit={this.handleFormSubmit}/>
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
