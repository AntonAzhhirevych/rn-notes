import React, { useReducer, useContext } from 'react';
import { Alert } from 'react-native';
import types from '../types';
import { TodoContext } from './todoContext';
import { todoReducer } from './todoReducer';
import { ScreenContext } from '../screen/screenContext';
import { Http } from '../../http';

export const TodoState = ({ children }) => {
  const initialState = {
    todos: [],
    loading: false,
    error: null,
  };

  // useContext доступ к контексту (consumer)
  const { changeScreen } = useContext(ScreenContext);
  const [state, dispatch] = useReducer(todoReducer, initialState);

  //todos.json формат .json нужен для работы с firebase

  const addTodo = async (title) => {
    const data = await Http.post('https://react-native-notes-27ba1.firebaseio.com/todos.json', {
      title,
    });

    dispatch({
      type: types.ADD_TODO,
      payload: { title, id: data.name },
    });
  };

  const removeTodo = (id) => {
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
          onPress: async () => {
            changeScreen(null);

            await Http.delete(`https://react-native-notes-27ba1.firebaseio.com/todos/${id}.json`);
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

  const editTodo = async (id, title) => {
    try {
      await Http.patch(`https://react-native-notes-27ba1.firebaseio.com/todos/${id}.json`, {
        title,
      });

      dispatch({
        type: types.EDIT_TODO,
        payload: { id, title },
      });
    } catch (err) {
      showRrror(err);
    }
  };

  const fetchTodo = async () => {
    showLoader();

    try {
      const data = await Http.get('https://react-native-notes-27ba1.firebaseio.com/todos.json');

      const todos = Object.keys(data).map((key) => ({ ...data[key], id: key }));

      dispatch({ type: types.FETCH_TODOS, payload: todos });
    } catch (err) {
      showRrror(err);
    } finally {
      hideLoader();
    }
  };

  const showLoader = () => dispatch({ type: types.SHOW_LOADER });
  const hideLoader = () => dispatch({ type: types.HIDE_LOADER });
  const showRrror = (error) => dispatch({ type: types.SHOW_ERROR, payload: error });
  const clearRrror = () => dispatch({ type: types.CLEAR_ERROR });

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        error: state.error,
        loading: state.loading,
        addTodo,
        removeTodo,
        editTodo,
        fetchTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
