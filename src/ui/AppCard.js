import React from 'react';
import { StyleSheet, View } from 'react-native';

const AppCard = (props) => {
  return <View style={styles.default}>{props.children}</View>;
};

const styles = StyleSheet.create({
  default: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'tomato',
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
  },
});

export default AppCard;
