import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled(({ italic, bold, underline, strikethrough, ...rest }) => <div {...rest} />)`
  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  text-decoration: ${({ underline, strikethrough }) => (underline ? 'underline' : (strikethrough ? 'line-through' : 'none'))};
  font-size: 30px;
`;

const Digit = ({
  value,
  representation,
  italic,
  bold,
  underline,
  strikethrough,
}) => (
  <Wrapper
    italic={italic}
    bold={bold}
    underline={underline}
    strikethrough={strikethrough}
  >
    {
      representation
      ? '❤'.repeat(value || 10)
      : value
    }
  </Wrapper>
);

Digit.propTypes = {
  value: PropTypes.number.isRequired,
  representation: PropTypes.bool.isRequired,
  italic: PropTypes.bool.isRequired,
  bold: PropTypes.bool.isRequired,
  underline: PropTypes.bool.isRequired,
  strikethrough: PropTypes.bool.isRequired,
};

export default Digit;
