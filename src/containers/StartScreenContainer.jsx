import { connect } from 'react-redux';
import { goToNextStage } from '../store/actions';
import StartScreen from '../components/StartScreen';

export default connect(state => ({
  denyNextStage: state.denyNextStage,
}), {
  start: goToNextStage,
})(StartScreen);
