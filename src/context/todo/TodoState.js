import React, { useReducer, useContext } from 'react';
import { Alert } from 'react-native';
import { TodoContext } from './todoContext';
import { todoReducer } from './todoReducer';
// import { addTodo, removeTodo, editTodo } from './todoActions';
import types from '../types';
import { ScreenContext } from '../screen/screenContext';

export const TodoState = ({ children }) => {
  const initialState = {
    todos: [],
    loading: false,
    error: null,
  };

  const { changeScreen } = useContext(ScreenContext);
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (title) =>
    dispatch({
      type: types.ADD_TODO,
      payload: title,
    });

  const removeTodo = (id) => {
    const todo = state.todos.find((todo) => todo.id === id);

    Alert.alert(
      'Delete element',
      'Delete this todo?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'delete',
          onPress: () => {
            changeScreen(null);
            dispatch({
              type: types.REMOVE_TODO,
              payload: id,
            });
          },
        },
      ],
      { cancelable: false },
    );
  };

  const editTodo = (id, title) =>
    dispatch({
      type: types.EDIT_TODO,
      payload: { id, title },
    });

  const showLoader = () => dispatch({ type: types.SHOW_LOADER });
  const hideLoader = () => dispatch({ type: types.HIDE_LOADER });
  const showRrror = () => dispatch({ type: types.SHOW_ERROR, payload: error });
  const clearRrror = () => dispatch({ type: types.CLEAR_ERROR });

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        removeTodo,
        editTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
