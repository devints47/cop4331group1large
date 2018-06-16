import React, { Component } from 'react';
import {
  Text,
  View,
  AppRegistry,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  Alert,
} from 'react-native';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import * as Animate from 'react-native-animatable';

import { FormInput, Button } from 'react-native-elements';

export default class Login extends Component {

  constructor(props){
    super(props);

    this.state = {isShowingText: false};
    this.onButtonPress = this.onButtonPress.bind(this)
    this.onButtonPressTwo = this.onButtonPressTwo.bind(this)
  };  

 onButtonPress(){
  this.setState(prevState => ({
    isShowingText: false
  }));
 }

 onButtonPressTwo(){
  this.setState(prevState => ({
    isShowingText: true
  }));
 }
  
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

        <View style={{flexDirection: 'row'}}>
                  <Button 
                    buttonStyle = {styles.loginButton}
                    backgroundColor = 'transparent'
                    title={'Login'}
                    onPress = {this.onButtonPress}
                    fontWeight = 'bold'
                    clear
                    activeOpacity = {0.7}
                    containerStyle={{flex: 1}}
                  />
                  <Button
                   buttonStyle = {styles.signupButton}
                   backgroundColor = 'transparent'
                    fontWeight = 'bold'
                    onPress = {this.onButtonPressTwo}
                    title={'Sign up'}
                    alignItems = 'right'
                    clear
                    activeOpacity = {0.7}
                    containerStyle={{flex: 1}}
                  />
        </View>
        
        {this.state.isShowingText == false ? <LoginForm/> : <SignupForm/>}

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
  },
  loginButton: {
    right : -30,
    height : 50,
    width : 90,
  },
  signupButton: {
    right : -80,
    height : 50,
    width : 90,
  },
});


AppRegistry.registerComponent('Login', ()=>Login)

