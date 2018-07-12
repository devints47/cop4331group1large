
import React, { Component } from 'react';
import {Text,View,AppRegistry} from 'react-native';
import Login from './app/components/Login/Login';
import router from './app/components/Home/router';
import addchar from './app/components/Home/addchar';



import { createStackNavigator } from 'react-navigation'; 

const AppStackNavigator = createStackNavigator(
  {
  Home: router,
  Router: addchar,
  }
);



export default class App extends React.Component{


  render() {

  return (
    <AppStackNavigator />
  );
  }
}

