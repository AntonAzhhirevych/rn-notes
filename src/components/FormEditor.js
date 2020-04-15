import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Keyboard } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { AppButton } from '../ui/AppButton';

//Keyboard класс для управления поведением клавиатуры
//Keyboard.dismiss() авто закрытие клавиатуры после добавления текста

const FormEditor = ({ onSubmit, removeTodo }) => {
  const [value, setValue] = useState('');

  const handleChangeText = (value) => {
    setValue(value);
  };

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      console.log('add');
      setValue('');
      Keyboard.dismiss();
    } else {
      console.log('err');
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={handleChangeText}
        placeholder="Enter the title..."
        value={value}
      />

      <AppButton onPress={pressHandler}>
        <AntDesign name="pluscircleo" size={20} />
      </AppButton>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  input: {
    width: '60%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomColor: 'skyblue',
    borderWidth: 2,
    color: '#fff',
  },
  button: {
    fontSize: 20,
    width: 50,
    height: 50,
    justifyContent: 'center',
  },
});

export default FormEditor;
