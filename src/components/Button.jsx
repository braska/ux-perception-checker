import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ disabled }) => (disabled ? '#aaa' : '#007bff')};
  color: #fff;
  border-radius: 0.25em;
  padding: 0.7em 1em;
  border: none;
  font-size: 1em;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
`;

export default Button;
