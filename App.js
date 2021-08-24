import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Navigation/index'
import { Provider } from 'react-redux';
import store from './src/store';
import { StatusBar } from 'react-native';

export default class App extends React.Component {
  UNSAFE_componentWillMount() {
    console.disableYellowBox = true
  }
  render() {
    return (
      <Provider store={store}>
        <StatusBar backgroundColor="#F2F3F5" barStyle="dark-content" />
        <Routes />
      </Provider>
    );
  }
}

