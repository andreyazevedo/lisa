import React from 'react';
import {Provider} from 'react-redux';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './screens';
import store from './store';
import {loadConfig} from './actions/config';

const styles = StyleSheet.create({
  body: {
    height: 700,
  },
});

class App extends React.Component {
  componentDidMount() {
    store.dispatch(loadConfig());
  }

  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App;
