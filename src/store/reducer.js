import {
  GENERATE_DIGITS,
  GO_TO_NEXT_STAGE,
  SET_SETTING,
  TOGGLE_DIGIT,
  SHOW_RESULTS,
} from './actions';

const generateUniqRandomDigit = (alreadyAvailableDigits) => {
  const randomDigit = Math.floor(Math.random() * 10);

  if (alreadyAvailableDigits.includes(randomDigit)) {
    return generateUniqRandomDigit(alreadyAvailableDigits);
  }

  return randomDigit;
};

const initialState = {
  stage: 0,
  timeout: 5,
  numberOfDigits: 7,
  digits: [],
  representation: false,
  italic: false,
  bold: false,
  underline: false,
  strikethrough: false,
  denyNextStage: false,
  selectedDigits: [],
  isResultsShown: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GO_TO_NEXT_STAGE:
      return state.stage === 2 ? { ...initialState } : {
        ...state,
        stage: state.stage + 1,
      };
    case SET_SETTING: {
      const newState = {
        ...state,
        [action.payload.key]: action.payload.value,
      };

      if (action.payload.key === 'underline' && action.payload.value) {
        newState.strikethrough = false;
      }

      if (action.payload.key === 'strikethrough' && action.payload.value) {
        newState.underline = false;
      }

      newState.denyNextStage = !newState.timeout || !newState.numberOfDigits || newState.numberOfDigits > 9

      return newState;
    }
    case GENERATE_DIGITS: {
      const digits = [];

      for (let i = 0; i < state.numberOfDigits; i++) {
        digits.push(generateUniqRandomDigit(digits));
      }

      return {
        ...state,
        digits,
      }
    }
    case TOGGLE_DIGIT:
      return {
        ...state,
        selectedDigits: (() => {
          const index = state.selectedDigits.indexOf(action.payload.digit);
          if (index === -1) {
            return [...state.selectedDigits, action.payload.digit];
          }

          const newSelectedDigits = [...state.selectedDigits];
          newSelectedDigits.splice(index, 1);
          return newSelectedDigits;
        })()
      };
    case SHOW_RESULTS:
      return {
        ...state,
        isResultsShown: true,
      };
    default:
      return state;
  }
}
