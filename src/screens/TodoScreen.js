import React, { useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

import AppCard from '../ui/AppCard';
import EditModal from '../components/EditModal';
import { AppTextBold } from '../ui/AppTextBold';
import { AppButton } from '../ui/AppButton';

//width: Dimensions.get('window').width / 3

// Dimensions класс котрий следит за размером екрана
// --.get нужен для получения размера(window , screen) возвращает обьект
// --.width возвращает width который мы можем использовать (/ 3)

const TodoScreen = ({ todo, goBack, onRemove, onSave }) => {
  const [modal, setModal] = useState(false);

  const saveHandler = (title) => {
    onSave(todo.id, title);
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
          <AppButton onPress={goBack}>
            <AntDesign name="back" size={20} />
          </AppButton>
        </View>
        <View style={styles.button}>
          <AppButton color="skyblue" onPress={() => onRemove(todo.id)}>
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
    // padding: 10,
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
