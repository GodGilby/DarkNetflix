import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './components/MainScreen';
import { StackNavigator } from 'react-navigation';
import { apiMiddle, reducer } from './reducers/redux';
import {createStore, applyMiddleware}from 'redux';
import { Provider } from 'react-redux';

const store = createStore(reducer,{},applyMiddleware(apiMiddle));
store.dispatch({type: 'CONSUMIR_API'});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <AppStackNavigator/>
      </Provider>
    );
  }
}

const AppStackNavigator = StackNavigator({
  Main: {
    screen: MainScreen
  }
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
