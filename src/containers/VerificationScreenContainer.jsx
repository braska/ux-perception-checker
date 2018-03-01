import { connect } from 'react-redux';
import { toggleDigit, showResults, goToNextStage } from '../store/actions';
import VerificationScreen from '../components/VerificationScreen';

export default connect(state => ({
  digits: state.digits,
  selectedDigits: state.selectedDigits,
  isResultsShown: state.isResultsShown,
}), {
  toggleDigit,
  showResults,
  reset: goToNextStage,
})(VerificationScreen);