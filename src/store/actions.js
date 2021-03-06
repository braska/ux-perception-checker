export const GO_TO_NEXT_STAGE = 'GO_TO_NEXT_STAGE';
export const SET_SETTING = 'SET_SETTING';
export const GENERATE_DIGITS = 'GENERATE_DIGITS';
export const TOGGLE_DIGIT = 'TOGGLE_DIGIT';
export const SHOW_RESULTS = 'SHOW_RESULTS';

export function goToNextStage() {
  return {
    type: GO_TO_NEXT_STAGE,
  };
}

export function setSetting(key, value) {
  return {
    type: SET_SETTING,
    payload: {
      key,
      value,
    },
  };
}

export function generateDigits() {
  return {
    type: GENERATE_DIGITS,
  };
}

export function toggleDigit(digit) {
  return {
    type: TOGGLE_DIGIT,
    payload: {
      digit,
    },
  };
}

export function showResults() {
  return {
    type: SHOW_RESULTS,
  };
}
