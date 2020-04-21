import React from 'react';
import {View, StyleSheet} from 'react-native';
import Logo from '../components/icons/logo';
import Greeting from '../components/greeting';
import LisaA from '../components/icons/lisa-a';
import Carousel from './onboarding/carousel';

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
  heading: {
    marginTop: 48,
  },
  assistant: {
    alignItems: 'center',
    marginTop: 48,
  },
  carousel: {
    alignItems: 'center',
    height: 300,
  },
});

const Heading = () => (
  <View style={styles.heading}>
    <Greeting>Boa noite, Doutor.</Greeting>
    <Greeting>Escolha uma respiração.</Greeting>
  </View>
);

const Assistant = () => (
  <View style={styles.assistant}>
    <LisaA width={88} height={148} />
  </View>
);

const HomeScreen = () => {
  return (
    <View>
      <View style={styles.body}>
        <Heading />
        <Assistant />
      </View>
      <View style={styles.carousel}>
        <Carousel />
      </View>
    </View>
  );
};

export const HomeScreenTitle = () => {
  return (
    <View>
      <Logo width={30} height={13} />
    </View>
  );
};

export default HomeScreen;
