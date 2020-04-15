import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import { AppTextBold } from '../ui/AppTextBold';

export const AppButton = ({ children, onPress, color = 'skyblue' }) => {
  //Platform.OS определяет на какой платформе работает приложение
  //TouchableNativeFeedback специальный елемент для android (ios не доступен) который по своему отображает touchable ефект.

  const Wrapper = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

  return (
    <Wrapper onPress={onPress} activeOpacity={0.8}>
      <View style={{ ...styles.button, backgroundColor: color }}>
        <AppTextBold style={styles.text}>{children}</AppTextBold>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});
