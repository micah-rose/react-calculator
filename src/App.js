import React, {Component} from 'react';
import './App.css';
import Result from './components/Result';
import Keypad from './components/Keypad';

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: ""
    }
  }

  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || "") + ""
      })
    } catch (e) {
      this.setState({
        result: "error"
      })
    }
  }

  render() {
    return (
      <div>
        <div className = "calculator-body">
          <h1>Simple Calculator</h1>
          <Result result={this.state.result} />
          <Keypad onClick={this.onClick} />
        </div>
      </div>
    )
  }
}

export default App;
