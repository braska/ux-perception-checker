import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCountdown = styled.div.attrs({
  style: ({ value }) => ({
    width: `${value * 100}%`,
  }),
})`
  height: 0.5em;
  background-color: #009618;
  transition: width ${({ timeout }) => timeout * 1000}ms linear;
`;

class Countdown extends Component {
  static propTypes = {
    onComplete: PropTypes.func.isRequired,
    timeout: PropTypes.number.isRequired,
  };

  state = {
    value: 1,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        value: 0,
      });
      setTimeout(() => {
        this.props.onComplete();
      }, this.props.timeout * 1000);
    }, 100);
  }

  render() {
    return <StyledCountdown {...this.props} value={this.state.value} />
  }
}

export default Countdown;
