import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';

const Wrapper = styled.div`
  
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2em;
`;

const LeftLabel = styled.div`
  margin-right: 0.5em;
`;

const RightLabel = styled.div`
  margin-left: 0.5em;
`;

const Settings = ({
  setSetting,
  handleTimeoutChange,
  handleNumberOfDigitsChange,
  timeout,
  numberOfDigits,
  representation,
  italic,
  bold,
  underline,
  strikethrough,
}) => (
  <Wrapper>
    <p>Выберите параметры испытания</p>

    <strong>Нотация</strong>
    <Row>
      <LeftLabel>Арабская</LeftLabel>
      <Toggle
        checked={representation}
        onChange={(e) => {
          setSetting('representation', e.target.checked);
        }}
      />
      <RightLabel>Пиктограммы</RightLabel>
    </Row>

    <strong>Курсив</strong>
    <Row>
      <LeftLabel>Нет</LeftLabel>
      <Toggle
        checked={italic}
        onChange={(e) => {
          setSetting('italic', e.target.checked);
        }}
      />
      <RightLabel>Да</RightLabel>
    </Row>

    <strong>Жирный</strong>
    <Row>
      <LeftLabel>Нет</LeftLabel>
      <Toggle
        checked={bold}
        onChange={(e) => {
          setSetting('bold', e.target.checked);
        }}
      />
      <RightLabel>Да</RightLabel>
    </Row>

    <strong>Подчёркнутый</strong>
    <Row>
      <LeftLabel>Нет</LeftLabel>
      <Toggle
        checked={underline}
        onChange={(e) => {
          setSetting('underline', e.target.checked);
        }}
      />
      <RightLabel>Да</RightLabel>
    </Row>

    <strong>Перечёркнутый</strong>
    <Row>
      <LeftLabel>Нет</LeftLabel>
      <Toggle
        checked={strikethrough}
        onChange={(e) => {
          setSetting('strikethrough', e.target.checked);
        }}
      />
      <RightLabel>Да</RightLabel>
    </Row>

    <strong>Длительность</strong>
    <Row>
      <input type="text" value={timeout} onChange={handleTimeoutChange} />
    </Row>

    <strong>Количество цифр</strong>
    <Row>
      <input type="text" value={numberOfDigits} onChange={handleNumberOfDigitsChange} />
    </Row>
  </Wrapper>
);

Settings.propTypes = {
  setSetting: PropTypes.func.isRequired,
  handleTimeoutChange: PropTypes.func.isRequired,
  handleNumberOfDigitsChange: PropTypes.func.isRequired,
  timeout: PropTypes.number.isRequired,
  numberOfDigits: PropTypes.number.isRequired,
  representation: PropTypes.bool.isRequired,
  italic: PropTypes.bool.isRequired,
  bold: PropTypes.bool.isRequired,
  underline: PropTypes.bool.isRequired,
  strikethrough: PropTypes.bool.isRequired,
};

export default Settings;
