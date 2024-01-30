import React, { Component } from 'react';
import Statistics from './Statistics/Statistics.jsx';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  handleClickGood = () => {
    this.setState({ good: this.state.good + 1 });
  };
  handleClickBad = () => {
    this.setState({ bad: this.state.bad + 1 });
  };
  handleClickNeutral = () => {
    this.setState({ neutral: this.state.neutral + 1 });
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round(
      (100 * this.state.good) /
        (this.state.good + this.state.bad + this.state.neutral)
    );
  };

  render() {
    const totalFeedback = this.countTotalFeedback;
    const positivePercentage = this.countPositiveFeedbackPercentage;
    return (
      <div>
        <h2>Please leave feedback</h2>
        <div>
          <button type="button" onClick={this.handleClickGood}>
            Good
          </button>
          <button type="button" onClick={this.handleClickNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.handleClickBad}>
            Bad
          </button>
        </div>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={totalFeedback()}
          positivePercentage={positivePercentage()}
        ></Statistics>
      </div>
    );
  }
}
