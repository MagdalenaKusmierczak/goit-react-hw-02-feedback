import React, { Component } from 'react';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  handleClickGood = onCLick => {
    this.setState({ good: this.state.good + 1 });
  };
  handleClickBad = () => {
    this.setState({ bad: this.state.bad + 1 });
  };
  handleClickNeutral = () => {
    this.setState({ neutral: this.state.neutral + 1 });
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <ul>
          <button type="button" onClick={this.handleClickGood()}>
            Good
          </button>
          <button type="button" onClick={this.handleClickNeutral()}>
            Neutral
          </button>
          <button type="button" onClick={this.handleClickBad()}>
            Bad
          </button>
        </ul>
        <h2>Statistics</h2>
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
        </ul>
      </div>
    );
  }
}
