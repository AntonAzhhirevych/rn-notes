import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import FormEditor from '../components/FormEditor';
import Todo from '../components/Todo';

// FlatList

// FlatList нужен для рендера колекций (економит память) подгружает постепенно
// data передаем масив елементов для рендера
// keyExtractor ключ для каждого елемента
// renderItem будет доступен каждый елемент инфо которого можем передавать в ui компонент

const MainScreen = ({ todos, addTodo, removeTodo, openTodo }) => (
  <View>
    <FormEditor onSubmit={addTodo} />
    {/* <ScrollView>
        {todos.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </ScrollView> */}
    <FlatList
      data={todos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Todo todo={item} onRemove={removeTodo} openTodo={openTodo} />}
    />
  </View>
);

const styles = StyleSheet.create({});

export default MainScreen;
