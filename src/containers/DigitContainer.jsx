import { connect } from 'react-redux';
import Digit from '../components/Digit';

export default connect(state => ({
  representation: state.representation,
  italic: state.italic,
  bold: state.bold,
  underline: state.underline,
  strikethrough: state.strikethrough,
}))(Digit);
