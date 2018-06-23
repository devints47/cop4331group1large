import React, { Component } from 'react';
import {Text,View,AppRegistry} from 'react-native';
import Login from './app/components/Login/Login';
import MainAppPage from './app/components/Home/MainAppPage';
import router from './app/components/Home/router';
import { createStackNavigator,DrawerNavigator,StackNavigator} from 'react-navigation'; 


const AppStackNavigator = createStackNavigator(
  {
  Home: Login,
  Router: MainAppPage,
  }
);

const MainScreenNavigator = StackNavigator({
  MainAppPage: { screen: MainAppPage },
  Home: {screen: Login},
  Router: {screen : MainAppPage}

});

const Drawer = DrawerNavigator(
  {
    Main: { screen: MainScreenNavigator }
  },
  {
    contentComponent: router,
    drawerWidth: 200
  }
);

class App extends React.Component{
  
  
  render() {

  return (
    <AppStackNavigator/>
  );
  }
}

export default App;