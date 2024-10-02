// Custom hooks for input component

import { useState, useReducer } from 'react';

const initialInputState = {
  value: '',
  isTouched: false,
};

interface InputState {
  value: string;
  isTouched: boolean;
}

type InputAction =
  | { type: 'INPUT'; value: string }
  | { type: 'BLUR' }
  | { type: 'RESET' };

const inputStateReducer = (state: InputState, action: InputAction): InputState => {
  if (action.type === 'INPUT') {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === 'BLUR') {
    return { value: state.value, isTouched: true };
  }
  if (action.type === 'RESET') {
    return { value: '', isTouched: false };
  }
  return initialInputState;
};

//const useInput = (validateValue: (value: string) => boolean) => {
const useInput = (inputType: string) => {
  const isEmail = (value: string) => value.includes('@');
  const numbersOnly = (value: string) => /^[0-9() -.]+$/.test(value);
  const isPassword = (value: string) => /^(?=.*[A-Za-z])(?=.*\d).{7,}$/.test(value);

  const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);

  let valueIsValid = true;

  if (inputType === 'email') {
    valueIsValid = isEmail(inputState.value);
  }

  if (inputType === 'number') {
    valueIsValid = numbersOnly(inputState.value);
  }

  if (inputType === 'password') {
    valueIsValid = isPassword(inputState.value);
  }

  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'INPUT', value: event.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: 'BLUR' });
  };

  const inputReset = () => {
    dispatch({ type: 'RESET' });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    inputReset,
  };
};

export default useInput;