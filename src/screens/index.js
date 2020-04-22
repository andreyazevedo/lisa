import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingScreen, {OnboardingScreenTitle, styles} from './onboarding';

const Stack = createStackNavigator();

console.disableYellowBox = true;

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{
          headerStyle: styles.header,
          headerTitle: OnboardingScreenTitle,
          cardStyle: styles.card,
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
