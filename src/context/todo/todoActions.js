import types from '../types';

export const addTodo = (todo) =>
  dispatch({
    type: types.ADD_TODO,
    payload: todo,
  });

export const removeTodo = (id) =>
  dispatch({
    type: types.ADD_TODO,
    payload: id,
  });

export const editTodo = (id, title) =>
  dispatch({
    type: types.ADD_TODO,
    payload: { id, title },
  });
