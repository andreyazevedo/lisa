import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  heading: {
    marginTop: 48,
  },
  headline: {
    fontFamily: 'Work Sans',
    fontWeight: '300',
    fontSize: 22,
    letterSpacing: 0,
    color: '#141719',
    opacity: 0.7,
  },
  subhead: {
    marginTop: 8,
  },
});

const Heading = ({headline, subhead}) => (
  <View style={styles.heading}>
    <Text style={styles.headline}>{headline}</Text>
    <Text style={[styles.headline, styles.subhead]}>{subhead}</Text>
  </View>
);

export default Heading;
