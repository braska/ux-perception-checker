import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import DigitContainer from '../containers/DigitContainer';
import Button from './Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 600px;
  justify-content: center;
`;

const beforeCss = css`
  &:before {
    content: '✓';
    position: absolute;
    top: 0.5em;
    left: 0.5em;
    display: block;
    width: 1em;
    height: 1em;
    box-sizing: border-box;
    padding: 0.2em;
    border-radius: 100%;
  }
`;

const hoverCss = css`
  &:hover {
    background-color: ${({ selected }) => (selected ? '#7ac2ff' : '#eee')};
  }
`;

const getBackgroundColor = ({ selected, correct, isResultsShown }) => {
  if (isResultsShown) {
    if (selected && !correct) {
      return '#ff2723';
    }

    if (!selected && correct) {
      return '#ffcdcc';
    }

    if (selected && correct) {
      return '#009618';
    }
  }

  if (selected) {
    return '#007bff';
  }

  return 'none';
};

const Box = styled.div`
  flex: 0 0 200px;
  box-sizing: border-box;
  padding: 2em 1em;
  text-align: center;
  cursor: ${({ isResultsShown }) => (isResultsShown ? 'default' : 'pointer')};
  background-color: ${getBackgroundColor};
  color: ${({ selected }) => (selected ? '#fff' : 'inherit')};
  position: relative;
  border: 2px white solid;
  
  ${({ isResultsShown }) => (!isResultsShown && hoverCss)}
  
  ${({ selected }) => (selected && beforeCss)}
`;

const VerificationScreen = ({
  toggleDigit,
  selectedDigits,
  showResults,
  isResultsShown,
  digits,
  reset,
}) => (
  <Fragment>
    <p>Выберите цифры, которые были показаны на предыдущем шаге</p>
    <Wrapper>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(digit => (
        <Box
          key={digit}
          onClick={() => toggleDigit(digit)}
          selected={selectedDigits.includes(digit)}
          correct={digits.includes(digit)}
          isResultsShown={isResultsShown}
        >
          <DigitContainer value={digit} />
        </Box>
      ))}
    </Wrapper>
    {!isResultsShown && (
      <Button onClick={showResults}>Показать результаты</Button>
    )}
    {isResultsShown && (
      <Fragment>
        <ul>
          <li>
            Верно отмечено: {selectedDigits.filter(selectedDigit => digits.includes(selectedDigit)).length} из {digits.length}
          </li>
          <li>
            Ошибочно выбрано: {selectedDigits.filter(selectedDigit => !digits.includes(selectedDigit)).length}
          </li>
          <li>
            Недовыбрано: {digits.filter(digit => !selectedDigits.includes(digit)).length}
          </li>
        </ul>
        <Button onClick={reset}>Ок</Button>
      </Fragment>
    )}
  </Fragment>
);

VerificationScreen.propTypes = {
  toggleDigit: PropTypes.func.isRequired,
  showResults: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  isResultsShown: PropTypes.bool.isRequired,
  selectedDigits: PropTypes.arrayOf(PropTypes.number).isRequired,
  digits: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default VerificationScreen;
