import React, { useState, useContext } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import NavBar from './components/NavBar';
import MainScreen from './screens/MainScreen';
import TodoScreen from './screens/TodoScreen';
import { TodoContext } from './context/todo/todoContext';
import { ScreenContext } from './context/screen/screenContext';

//Alert готовый компонент от react native

const MainLayaut = () => {
  const { todos, addTodo, removeTodo, editTodo } = useContext(TodoContext);
  const { todoId, changeScreen } = useContext(ScreenContext);

  console.log(changeScreen);
  console.log('TODOID', todoId);
  // const [todoId, setTodoId] = useState(null);
  // const [todos, setTodos] = useState([]);
  // const [open, setOpen] = useState(null);

  const openTodo = (id) => {
    console.log('OPENTODO', id);
    // console.log(changeScreen());
  };

  // const removeTodo = (id) => {
  //   Alert.alert(
  //     'Delete element',
  //     'Delete this todo?',
  //     [
  //       {
  //         text: 'Cancel',
  //         style: 'cancel',
  //       },
  //       {
  //         text: 'delete',
  //         onPress: () => {
  //           setTodos((todos) => todos.filter((todo) => todo.id !== id));
  //           setTodoId(null);
  //         },
  //       },
  //     ],
  //     { cancelable: false },
  //   );
  // };

  const goBack = () => {
    changeScreen(null);
  };

  // const onSave = (id, title) => {
  //   setTodos((todos) =>
  //     todos.map((todo) => {
  //       if (todo.id === id) {
  //         todo.title = title;
  //       }
  //       return todo;
  //     }),
  //   );
  // };

  let content = todoId ? (
    <TodoScreen onRemove={removeTodo} goBack={goBack} todo={todoId} onSave={editTodo} />
  ) : (
    <MainScreen todos={todos} addTodo={addTodo} removeTodo={removeTodo} openTodo={openTodo} />
  );

  return (
    <View style={styles.container}>
      <NavBar title="TODO App" />
      <View>{content}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export default MainLayaut;
