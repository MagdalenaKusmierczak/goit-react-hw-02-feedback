import PropTypes from 'prop-types';
import { SectionWrapper, Title } from './Section.styled.jsx';

const Section = ({ title, children }) => {
  return (
    <SectionWrapper>
      <Title>{title}</Title>
      {children}
    </SectionWrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
