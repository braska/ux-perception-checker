import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Countdown from 'react-countdown-now';
import DigitContainer from '../containers/DigitContainer';

const TestScreen = ({ goToNextStage, digits, timeout }) => (
  <Fragment>
    <Countdown
      date={Date.now() + timeout * 1000}
      onComplete={goToNextStage}
      precision={3}
      intervalDelay={0}
      renderer={({ seconds, milliseconds }) => (
        `${seconds}.${milliseconds}`
      )}
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
