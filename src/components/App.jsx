import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StartScreenContainer from '../containers/StartScreenContainer';
import TestScreenContainer from '../containers/TestScreenContainer';
import VerificationScreenContainer from '../containers/VerificationScreenContainer';

const Wrapper = styled.div`
  margin: 1em;
`;

const App = ({ stage }) => (
  <Wrapper>
    {stage === 0 && (
      <StartScreenContainer />
    )}
    {stage === 1 && (
      <TestScreenContainer />
    )}
    {stage === 2 && (
      <VerificationScreenContainer />
    )}
  </Wrapper>
);

App.propTypes = {
  stage: PropTypes.number.isRequired,
};

export default App;
