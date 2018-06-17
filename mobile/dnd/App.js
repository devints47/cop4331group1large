
import React, { Component } from 'react';
import {Text,View,AppRegistry} from 'react-native';
import Login from './app/components/Login/Login';

import { createStackNavigator } from 'react-navigation'; 

const RootStack = createStackNavigator({
Home: Login
},
{
  intialRoutName: 'Home',
}
);



export default class App extends React.Component{
  render() {
    return <RootStack/>;
  }
}

