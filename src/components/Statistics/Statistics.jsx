import PropTypes from 'prop-types';
import { Wrapper, StatisticsTitle, List } from './Statistics.styled.jsx';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Wrapper>
      <StatisticsTitle>Statistics</StatisticsTitle>
      <List>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>
          Positive feedback: {}
          {isNaN(positivePercentage) ? '0' : positivePercentage}%
        </li>
      </List>
    </Wrapper>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
