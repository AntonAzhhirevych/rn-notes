import React, { useReducer } from 'react';
import types from '../types';

import { ScreenContext } from './screenContext';
import { screenReducer } from './screenReducer';

// задача компонента создать состояние и методы работы с ним и передать (свойства, методы) в value контекста ниже лежащим компонентам

export const ScreenState = ({ children }) => {
  //useReducer - хук который изменяет состояние (отправляет action через функцию dispatch )
  const [state, dispatch] = useReducer(screenReducer, null);

  const changeScreen = (id) => dispatch({ type: types.CHANGE_SCREEN, payload: id });

  return (
    <ScreenContext.Provider value={{ todoId: state, changeScreen }}>
      {children}
    </ScreenContext.Provider>
  );
};
