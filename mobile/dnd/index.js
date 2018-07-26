import { AppRegistry } from 'react-native';
import App from './App';
import { YellowBox } from 'react-native';


global.uri='https://devints47.pythonanywhere.com/';
//global.uri='https://514d5976.ngrok.io';
AppRegistry.registerComponent('dnd', () => App);


YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);