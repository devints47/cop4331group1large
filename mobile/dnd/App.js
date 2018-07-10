import React, { Component } from 'react';
import {Text,View,AppRegistry} from 'react-native';
import Login from './app/components/Login/Login';
import router from './app/components/Home/router';
import Stats from './app/components/Screens/Stats';
import Settings from './app/components/Screens/Settings';
import Skills from './app/components/Screens/Skills';
import Equipment from './app/components/Screens/Equipment';
import Character from './app/components/Screens/Character';
import Summary from './app/components/Screens/Summary'; 
import { createStackNavigator,DrawerNavigator,StackNavigator} from 'react-navigation'; 


const AppStackNavigator = createStackNavigator(
  {
  Home: Login,
  Router: router,
  Stats: Stats,
  Skills: Skills,
  Equipment: Equipment,
  Character: Character,
  Summary: Summary,
  Settings: Settings
  },
  {
    headerMode:'none'
  }
);


export default class App extends React.Component{
  
  render() {

  return (
    <AppStackNavigator/>
  );
  }
}


