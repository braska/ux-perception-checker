import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import DigitContainer from '../containers/DigitContainer';
import Countdown from './Countdown';

const TestScreen = ({ goToNextStage, digits, timeout }) => (
  <Fragment>
    <Countdown
      timeout={timeout}
      onComplete={goToNextStage}
    />
    {digits.map(digit => (
      <DigitContainer value={digit} key={digit} />
    ))}
  </Fragment>
);

TestScreen.propTypes = {
  goToNextStage: PropTypes.func.isRequired,
  timeout: PropTypes.number.isRequired,
  digits: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default TestScreen;
