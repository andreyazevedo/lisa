import React from 'react';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  radio: {
    width: 16,
    height: 16,
    borderRadius: 16,
    borderColor: '#ddd',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  active: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#30c5ca',
  },
});

const Radio = ({active}) => (
  <View style={styles.radio}>
    <View style={active ? styles.active : null} />
  </View>
);

Radio.defaultProps = {
  active: false,
};

export default Radio;
