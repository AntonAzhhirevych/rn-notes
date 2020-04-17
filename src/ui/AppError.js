import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppText } from './AppText';
import { AppButton } from './AppButton';

const AppLoader = () => (
  <View style={styles.center}>
    <AppText style={styles.text}>Oh, something went wrong ...</AppText>
    <AppButton color="tomato">reload</AppButton>
  </View>
);

export default AppLoader;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 20,
  },
});
