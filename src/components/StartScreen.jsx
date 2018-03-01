import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SettingsContainer from '../containers/SettingsContainer';
import Button from './Button';

const Title = styled.h1`
  
`;

const Message = styled.p`
  
`;

const StartScreen = ({
  start,
}) => (
  <Fragment>
    <Title>Тест на восприятие</Title>
    <Message>
      В ходе испытания Вам будет предложен набор цифр.<br />
      В течении установленного времени Вам необходимо запомнить данные цифры.<br />
      После Вам будет необходимо указать, какие цифры были в наборе.
    </Message>
    <SettingsContainer />
    <Button onClick={start}>Начать испытание</Button>
  </Fragment>
);

StartScreen.propTypes = {
  start: PropTypes.func.isRequired,
};

export default StartScreen;
