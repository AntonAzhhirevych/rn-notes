import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { AppTextBold } from '../ui/AppTextBold';

// Platform.select определяет на какой платформе работает приложение и в зависимости от результата возвращает ключ
// таким образом мы можем задавать индивидуальные стили компонентов для разных платформ

const NavBar = ({ title }) => {
  return (
    <View
      style={{
        ...styles.navBar,
        ...Platform.select({
          ios: styles.navBarIos,
          android: styles.navBarAndroid,
        }),
      }}
    >
      <AppTextBold style={styles.text}>{title}</AppTextBold>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },

  navBarAndroid: {
    backgroundColor: 'skyblue',
  },
  navBarIos: {
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'skyblue',
  },

  text: {
    color: '#fff',
    fontSize: 24,
  },
});

export default NavBar;
