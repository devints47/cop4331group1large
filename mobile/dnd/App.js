
import React, { Component } from 'react';
import {Text,View,AppRegistry} from 'react-native';
import Login from './app/components/Login/Login';
import router from './app/components/Home/router'

import { createStackNavigator } from 'react-navigation'; 

const AppStackNavigator = createStackNavigator(
  {
  Home: Login,
  Router: router,
  }
);



export default class App extends React.Component{
  
  
  render() {

  return (
    <AppStackNavigator />
  );
  }
}

