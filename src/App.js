import React, { Component } from 'react';
import Button from './Button';
import './App.css';

class App extends Component {
  constructor(props){
    super();
    this.state = {
      count: 0
    }
  }

  incrementCounter = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  
  decrementCounter = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    let { count } = this.state
    return (
      <div className="container">
        <div className="jumbotron">
          <div className="App">
            <center>
              <h2>Count: { count }</h2>
              <Button 
                title = { "Increment" }
                task = { this.incrementCounter }
              />
              <Button
                title = { "Decrement" }
                task = { this.decrementCounter }
              />
            </center>
          </div>
        </div>
      </div>
    );
  }
}

export default App;