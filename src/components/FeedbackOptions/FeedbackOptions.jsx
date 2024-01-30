import PropTypes from 'prop-types';
import { OptionsWrapper, Button } from './FeedbackOptions.styled.jsx';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionsWrapper>
      {options.map(option => (
        <Button
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      ))}
    </OptionsWrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
