import types from '../types';

const handlers = {
  [types.CHANGE_SCREEN]: (state, { id }) => id,
  DEFAULT: (state) => state,
};

export const screenReducer = (state, action) => {
  console.log('REDUCER ACTION', action.type);
  console.log('REDUCER ACTION', action.id);

  console.log('REDUCER STATE', state);

  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
