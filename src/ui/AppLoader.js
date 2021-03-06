import React from 'react';

import { StyleSheet, View, ActivityIndicator } from 'react-native';

const AppLoader = () => (
  <View style={styles.center}>
    <ActivityIndicator size="large" color="skyblue" />
  </View>
);

export default AppLoader;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
