import React from 'react';
import {View, StyleSheet} from 'react-native';
import Logo from '../../components/icons/logo';
import LisaB from '../../components/icons/lisa-b';
import Heading from './heading';
import Steps from './steps';

export const styles = StyleSheet.create({
  body: {
    marginHorizontal: 36,
  },
  header: {
    height: 68,
    backgroundColor: '#f7f8f9',
    shadowOffset: {height: 0},
  },
  card: {
    backgroundColor: '#f7f8f9',
  },
  assistant: {
    alignItems: 'center',
    marginTop: 48,
  },
  carousel: {
    alignItems: 'center',
  },
  steps: {
    marginHorizontal: 36,
    marginTop: 43,
  },
});

const Assistant = () => (
  <View style={styles.assistant}>
    <LisaB width={126} height={156} />
  </View>
);

const Screen = () => {
  return (
    <View>
      <View style={styles.body}>
        <Heading headline="Muito bem." subhead="Quantas sessões deseja?" />
        <Assistant />
      </View>
      <View style={styles.steps}>
        <Steps />
      </View>
    </View>
  );
};

const Title = () => {
  return (
    <View>
      <Logo width={30} height={13} />
    </View>
  );
};

export default {
  Screen,
  Title,
  styles,
};
