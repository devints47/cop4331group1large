
import React, { Component } from 'react';
import {
  Text,
  View,
  AppRegistry,
  StyleSheet,
  KeyboardAvoidingView,
  Image
} from 'react-native';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import * as Animate from 'react-native-animatable';

const TabSelector = ({ selected }) => {
  return (
    <View style={styles.selectorContainer}>
      <View style={selected && styles.selected}/>
    </View>
  );
};

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.main}>
          	<Animate.View style={styles.container} animation='zoomIn' iterationCount={1}>
				<Image
				source={require('../../assets/images/logo.png')}
				style={styles.logo}
				/>
				<Text style={styles.text}>
					Dungeons and Dragons
				</Text>

          	</Animate.View>

			<View style={styles.formContainer}>
				<LoginForm/>
			</View>

      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    main:{
        backgroundColor:'#d2c4b4',
        flex:1,
    },
    container:{
      alignItems:'center',
      flexGrow:1,
      justifyContent:'center',
	},
	logo:{
		height:200,
		width:200
	},
	text:{
		color:'rgba(34,24,13,0.4)',
		justifyContent: 'center',
		textAlign: 'center'
	}
});


AppRegistry.registerComponent('Login', ()=>Login)

