import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Modal, Alert } from 'react-native';
import { AppButton } from '../ui/AppButton';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

//ICONS
//@expo/vector-icons библиотека expo которая предоставляет большой выбор icons
//AntDesign, MaterialIcons название групы icons, используя атрибут name можем добавлять нужную нам icon из даной групы
//size={...} для розмера icon

const EditModal = ({ visible, onCancel, value, onSave }) => {
  const [title, setTitle] = useState(value);

  const saveHandler = () => {
    console.log(title.trim().length);
    if (title.trim().length < 3) {
      Alert.alert('Error', `Min length title 3 characters, now ${title.trim().length}`);
    } else {
      onSave(title);
    }
  };

  // при нажатии отмена обновляєм стейт преведущим значением

  const cancelHandler = () => {
    setTitle(value);
    onCancel();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <View style={styles.wrap}>
        <TextInput
          style={styles.input}
          onChangeText={setTitle}
          value={title}
          placeholder="Enter edit title..."
        />
        <View style={styles.buttons}>
          <AppButton title="cancel" onPress={cancelHandler} color="tomato">
            <MaterialIcons name="cancel" size={20} />
          </AppButton>
          <AppButton title="save" onPress={saveHandler} color="skyblue">
            <AntDesign name="save" size={20} />
          </AppButton>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  buttons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  input: {
    width: '70%',
    borderBottomColor: 'skyblue',
    borderBottomWidth: 2,
    marginBottom: 20,
    color: '#fff',
  },
});

export default EditModal;
