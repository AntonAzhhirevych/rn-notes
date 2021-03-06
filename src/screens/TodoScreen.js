import React, { useState, useContext } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

import AppCard from '../ui/AppCard';
import EditModal from '../components/EditModal';
import { AppTextBold } from '../ui/AppTextBold';
import { AppButton } from '../ui/AppButton';
import { TodoContext } from '../context/todo/todoContext';
import { ScreenContext } from '../context/screen/screenContext';

//width: Dimensions.get('window').width / 3

// Dimensions класс котрий следит за размером екрана
// --.get нужен для получения размера(window , screen) возвращает обьект
// --.width возвращает width который мы можем использовать (/ 3)

const TodoScreen = () => {
  const [modal, setModal] = useState(false);
  const { todos, editTodo, removeTodo } = useContext(TodoContext);
  const { todoId, changeScreen } = useContext(ScreenContext);

  const todo = todos.find((todo) => todo.id === todoId);

  const saveHandler = async (title) => {
    await editTodo(todo.id, title);
    setModal(false);
  };

  return (
    <View>
      <EditModal
        visible={modal}
        value={todo.title}
        onCancel={() => setModal(false)}
        onSave={saveHandler}
      />
      <AppCard>
        <View style={styles.textContainer}>
          <AppTextBold style={styles.text}>{todo.title}</AppTextBold>
        </View>

        <View>
          <AppButton color="tomato" onPress={() => setModal(true)}>
            <FontAwesome name="edit" size={20} />
          </AppButton>
        </View>
      </AppCard>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <AppButton onPress={() => changeScreen(null)}>
            <AntDesign name="back" size={20} />
          </AppButton>
        </View>
        <View style={styles.button}>
          <AppButton color="skyblue" onPress={() => removeTodo(todo.id)}>
            <AntDesign name="delete" size={20} />
          </AppButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 20,
  },
  textContainer: {
    width: '70%',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: Dimensions.get('window').width / 3,
  },
});

export default TodoScreen;
