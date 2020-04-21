import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './screens';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.body}>
            <Navigator />
          </View>
        </ScrollView>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  body: {
    height: 700,
  },
});

export default App;
