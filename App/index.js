import 'react-native-gesture-handler';
import React,{useEffect,useState} from 'react';

import { Text, View, TextInput,StyleSheet } from 'react-native';
import { createAppContainer, createAppNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CreateAccount from "./screens/CreateAccount";
import SignIn from "./screens/SignIn";
import Home from './screens/Home';
import { LogBox } from 'react-native';
import {Provider,useSelector} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import { ReasolveAuth } from "./actions";
LogBox.ignoreLogs(['Sending...']);
import AppNav  from './App.js'

  const AppNavigator = ()=>{
    return   (
  <Provider store={createStore(reducers,applyMiddleware(thunk))}>
  <AppNav/>
  </Provider>
)
}
export default AppNavigator;