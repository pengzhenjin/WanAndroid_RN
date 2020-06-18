/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/store';
import AppRoute from './src/AppRoute';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppRoute/>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
