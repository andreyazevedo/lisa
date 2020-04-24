import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  countText: {
    color: '#333',
    fontFamily: 'Work Sans',
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 14,
  },
  buttonText: {
    color: '#30c5ca',
    fontFamily: 'Work Sans',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 16,
  },
});

const Steps = ({navigation}) => (
  <View style={styles.container}>
    <Text style={styles.countText}>1/2</Text>
    <Text
      onPress={() => navigation.navigate('OnboardingB')}
      style={styles.buttonText}>
      Continuar
    </Text>
  </View>
);

export default Steps;
