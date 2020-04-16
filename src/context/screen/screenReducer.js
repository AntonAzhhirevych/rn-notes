import types from '../types';

export const screenReducer = (state, { type, payload }) => {
  switch (type) {
    case types.CHANGE_SCREEN:
      return payload;
    default:
      return state;
  }
};
