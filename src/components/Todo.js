import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { AppText } from '../ui/AppText';

//TouchableOpacity
//TouchableOpacity поведение и возможность конроля над елементами (wrappr над елементами)
//onPress нажатие
//onLongPress длительное нажатие

const Todo = ({ todo, onRemove, openTodo }) => (
  <TouchableOpacity
    style={styles.btn}
    onPress={() => openTodo(todo.id)}
    onLongPress={() => onRemove(todo.id)}
  >
    <View style={styles.todo}>
      <AppText style={styles.text}>{todo.title}</AppText>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: 'skyblue',
    marginBottom: 10,
  },
  text: {
    color: '#fff',
  },
});

export default Todo;
