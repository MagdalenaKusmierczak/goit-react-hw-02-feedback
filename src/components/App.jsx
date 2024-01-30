import React, { Component } from 'react';
import Statistics from './Statistics/Statistics.jsx';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions.jsx';
import Section from './Section/Section.jsx';
import Notification from './Notification/Notification.jsx';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }
  onLeaveFeedback = state => {
    this.setState(prevState => ({ [state]: prevState[state] + 1 }));
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
    const feedbackOptions = Object.keys(this.state);
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbackOptions}
          onLeaveFeedback={this.onLeaveFeedback}
        ></FeedbackOptions>
        {totalFeedback() === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={totalFeedback()}
            positivePercentage={positivePercentage()}
          ></Statistics>
        )}
      </Section>
    );
  }
}
