import React, { Component } from 'react';
import Form from './Form';
import Answer from './Answer';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleData = this.handleData.bind(this);
    
    this.state={ print: false, data: {} }
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

    try {
      fetch('https://yesno.wtf/api')
        .then((response) => response.json())
        .then((data) => {
          this.setState(() => ({ data: {...data}}));
          this.setState(() => ({ print: true}));
        });
    } catch(e) {
      console.log(e);
    }
  }

  handleData = () => {
    this.setState(() => ({ data: {} }));
    this.setState(() => ({ print: false}));
  }

  render() {
    return (
      <div className="app">
        <div className="container">
          <Form handleFormSubmit={this.handleFormSubmit}/>
          { this.state.print === true &&
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
