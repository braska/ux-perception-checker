import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSetting } from '../store/actions';
import Settings from '../components/Settings';

class SettingsContainer extends Component {
  static propsTypes = {
    setSetting: PropTypes.func.isRequired,
  };

  handleTimeoutChange = (event) => {
    const value = +event.target.value.replace(/[^0-9]/g, '');

    this.props.setSetting('timeout', +value);
  };

  handleNumberOfDigitsChange = (event) => {
    const value = +event.target.value.replace(/[^0-9]/g, '');

    this.props.setSetting('numberOfDigits', +value);
  };

  render() {
    return (
      <Settings
        {...this.props}
        handleTimeoutChange={this.handleTimeoutChange}
        handleNumberOfDigitsChange={this.handleNumberOfDigitsChange}
      />
    );
  }
}

export default connect(state => ({
  timeout: state.timeout,
  numberOfDigits: state.numberOfDigits,
  representation: state.representation,
  italic: state.italic,
  bold: state.bold,
  underline: state.underline,
  strikethrough: state.strikethrough,
}), {
  setSetting,
})(SettingsContainer);
