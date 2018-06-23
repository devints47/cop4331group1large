import { AppRegistry } from 'react-native';
import App from './App';
import { YellowBox } from 'react-native';


global.uri='https://b373bf15.ngrok.io';

AppRegistry.registerComponent('dnd', () => App);


YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);