import React from 'react';
import {Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Work Sans',
    fontWeight: '300',
    fontSize: 22,
    lineHeight: 25,
    letterSpacing: 0,
    color: '#141719',
    opacity: 0.5,
  },
});

const Greeting = ({children}) => <Text style={styles.title}>{children}</Text>;

export default Greeting;
