import React, { useReducer } from 'react';
import { TodoContext } from './todoContext';
import { todoReducer } from './todoReducer';
// import { addTodo, removeTodo, editTodo } from './todoActions';
import types from '../types';

export const TodoState = ({ children }) => {
  const initialState = {
    todos: [
      { id: 1, title: 'Learn react native' },
      { id: 2, title: 'Hello word' },
    ],
  };
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (title) =>
    dispatch({
      type: types.ADD_TODO,
      payload: title,
    });

  const removeTodo = (id) =>
    dispatch({
      type: types.REMOVE_TODO,
      payload: id,
    });

  const editTodo = (id, title) =>
    dispatch({
      type: types.EDIT_TODO,
      payload: { id, title },
    });

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
