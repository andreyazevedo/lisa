import React from 'react';
import {View, StyleSheet} from 'react-native';
import Logo from '../../components/icons/logo';
import LisaA from '../../components/icons/lisa-a';
import Carousel from './carousel';
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
    <LisaA width={88} height={148} />
  </View>
);

const OnboardingScreen = () => {
  return (
    <View>
      <View style={styles.body}>
        <Heading />
        <Assistant />
      </View>
      <View style={styles.carousel}>
        <Carousel />
      </View>
      <View style={styles.steps}>
        <Steps />
      </View>
    </View>
  );
};

export const OnboardingScreenTitle = () => {
  return (
    <View>
      <Logo width={30} height={13} />
    </View>
  );
};

export default OnboardingScreen;
