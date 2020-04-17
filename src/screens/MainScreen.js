import React, { useContext, useEffect, useCallback } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import FormEditor from '../components/FormEditor';
import Todo from '../components/Todo';
import { TodoContext } from '../context/todo/todoContext';
import { ScreenContext } from '../context/screen/screenContext';
import AppLoader from '../ui/AppLoader';
import AppError from '../ui/AppError';

// FlatList

// FlatList нужен для рендера колекций (економит память) подгружает постепенно
// data передаем масив елементов для рендера
// keyExtractor ключ для каждого елемента
// renderItem будет доступен каждый елемент инфо которого можем передавать в ui компонент

const MainScreen = () => {
  const { addTodo, removeTodo, todos, fetchTodo, loading, error } = useContext(TodoContext);
  const { changeScreen } = useContext(ScreenContext);

  const loadTodos = useCallback(async () => {
    await fetchTodo();
  }, [fetchTodo]);

  useEffect(() => {
    loadTodos();
  }, []);

  if (loading) {
    return <AppLoader />;
  }

  if (error) {
    console.log(error);
    return <AppError error={error} />;
  }

  return (
    <View>
      <FormEditor onSubmit={addTodo} />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Todo todo={item} onRemove={removeTodo} openTodo={changeScreen} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default MainScreen;
