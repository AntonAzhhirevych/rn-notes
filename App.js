import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import NavBar from './src/components/NavBar';
import MainScreen from './src/screens/MainScreen';
import TodoScreen from './src/screens/TodoScreen';

// 'expo-font' библиотека для работы с шрифтами
// AppLoading елемент для асигхронной обработки
// --startAsync запуск асинхронной функции
// --onError если startAsync вернет ошибку можем обработать
// --onFinish действие по завершению

//loadApplication асинхронная загрузка шрифтов

//Alert готовый компонент от react native

const loadApplication = async () => {
  await Font.loadAsync({
    'ralewey-regular': require('./assets/fonts/Raleway-Regular.ttf'),
    'ralewey-bold': require('./assets/fonts/Raleway-Bold.ttf'),
  });
};

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([
    { id: 1, title: 'Купить хлеб' },
    { id: 2, title: 'Выучить React Native' },
  ]);

  const [open, setOpen] = useState(null);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onError={(err) => console.log(err)}
        onFinish={() => setIsReady(true)}
      />
    );
  }

  const addTodo = (title) => {
    const todo = {
      id: Date.now().toString(),
      title,
    };

    setTodos((state) => [...state, todo]);
    console.log(todos);
  };

  const openTodo = (id) => {
    setTodoId(id);
    setOpen(todos.find((todo) => todo.id === id));
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
          onPress: () => {
            setTodos((todos) => todos.filter((todo) => todo.id !== id));
            setTodoId(null);
          },
        },
      ],
      { cancelable: false },
    );
  };

  const goBack = () => {
    setTodoId(null);
  };

  const onSave = (id, title) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = title;
        }
        return todo;
      }),
    );
  };

  return (
    <View style={styles.container}>
      <NavBar title="TODO App" />
      {todoId ? (
        <TodoScreen onRemove={removeTodo} goBack={goBack} todo={open} onSave={onSave} />
      ) : (
        <MainScreen todos={todos} addTodo={addTodo} removeTodo={removeTodo} openTodo={openTodo} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
