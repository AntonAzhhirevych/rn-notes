import React, { useReducer } from 'react';
import types from '../types';

import { ScreenContext } from './screenContext';
import { screenReducer } from './screenReducer';

export const ScreenState = ({ children }) => {
  const [state, dispatch] = useReducer(screenReducer, null);

  const changeScreen = (id) => dispatch({ type: types.CHANGE_SCREEN, payload: id });

  console.log('S.T.A.T.E', state);

  return (
    <ScreenContext.Provider value={{ todoId: state, changeScreen }}>
      {children}
    </ScreenContext.Provider>
  );
};
