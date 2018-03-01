import {GENERATE_DIGITS, GO_TO_NEXT_STAGE, SET_SETTING} from './actions';

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
  numberOfDigits: 9,
  digits: [],
  representation: false,
  italic: false,
  bold: false,
  underline: false,
  strikethrough: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GO_TO_NEXT_STAGE:
      return state.stage === 3 ? { ...initialState } : {
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
    default:
      return state;
  }
}