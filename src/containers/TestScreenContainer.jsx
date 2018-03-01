import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goToNextStage, generateDigits } from '../store/actions';
import TestScreen from '../components/TestScreen';

class TestScreenContainer extends Component {
  componentWillMount() {
    this.props.generateDigits();
  }

  render() {
    return (
      <TestScreen
        {...this.props}
      />
    );
  }
}

export default connect(state => ({
  digits: state.digits,
  timeout: state.timeout,
  numberOfDigits: state.numberOfDigits,
}), {
  goToNextStage,
  generateDigits,
})(TestScreenContainer);

