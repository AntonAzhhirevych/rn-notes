import React, { useContext } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import NavBar from './components/NavBar';
import MainScreen from './screens/MainScreen';
import TodoScreen from './screens/TodoScreen';
import { ScreenContext } from './context/screen/screenContext';

//Alert готовый компонент от react native

const MainLayaut = () => {
  const { todoId } = useContext(ScreenContext);

  return (
    <View style={styles.container}>
      <NavBar title="TODO App" />
      <View>{todoId ? <TodoScreen /> : <MainScreen />}</View>
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
