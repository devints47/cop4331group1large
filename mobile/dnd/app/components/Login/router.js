import React, { Component } from 'react';
import {Text,View,AppRegistry,StyleSheet, TextInput} from 'react-native';

export default class router extends Component {
  render() {
    return (
      <Text>Hello world!</Text>
    );
  }
}

AppRegistry.registerComponent('router', ()=>router)