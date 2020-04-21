import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen, {HomeScreenTitle, styles} from './home';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: styles.header,
          headerTitle: HomeScreenTitle,
          cardStyle: styles.card,
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
