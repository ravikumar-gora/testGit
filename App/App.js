import React,{useEffect,useState} from 'react';
import 'react-native-gesture-handler';
import { Text, View, TextInput,StyleSheet } from 'react-native';
import { createAppContainer, createAppNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CreateAccount from "./screens/CreateAccount";
import SignIn from "./screens/SignIn";
import Home from './screens/Home';
import { LogBox } from 'react-native';
import {connect} from 'react-redux';
import { ReasolveAuth } from "./actions";
import {Provider,useSelector} from 'react-redux';
LogBox.ignoreLogs(['Sending...']);



const AppNav =  (props)=>{
  const token = useSelector(state => state.token)

  useEffect(() => {
    props.ReasolveAuth(); 
})

const App0 =
createAppContainer(
createStackNavigator({
  SignIn: {
    screen:SignIn
  },
  CreateAccount: {
    screen:CreateAccount
  },
})
)

const App1 = 
createAppContainer(
createStackNavigator({
  Home: {
    screen:Home
  },
}))

return   (
token ? (
    <App1/>
):(
    <App0/>
))}

const mapStateToProps = state => {
    return {
      token: state.token,
    }
  }

export default connect(mapStateToProps,{ReasolveAuth})(AppNav);
