import { connect } from 'react-redux';
import { goToNextStage } from '../store/actions';
import StartScreen from '../components/StartScreen';

export default connect(null, {
  start: goToNextStage,
})(StartScreen);
