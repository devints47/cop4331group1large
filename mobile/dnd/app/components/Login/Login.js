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

import {withNavigation} from 'react-navigation';

class Login extends Component {

  static navigationOptions = {
    header: null,
  }


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

        <Animate.View style={styles.buttons} animation='slideInUp' iterationCount={1} >
                  <Button 
                    buttonStyle = {styles.loginButton}
                    backgroundColor = 'rgba(255,255,255,0.2)'
                    borderRadius={10}
                    title={'Login'}
                    onPress = {this.onButtonPress}
                    fontWeight = 'bold'
                    clear
                    activeOpacity = {0.7}
                    textAlign='center'
                  />
                  <Button
                    buttonStyle = {styles.signupButton}
                    backgroundColor = 'rgba(255,255,255,0.2)'
                    borderRadius={10}
                    fontWeight = 'bold'
                    onPress = {this.onButtonPressTwo}
                    title={'Sign up'}
                    clear
                    activeOpacity = {0.7}
                  />
        </Animate.View>
        
        {this.state.isShowingText == false ? <LoginForm navigation={this.props.navigation}/> : <SignupForm/>}

      </KeyboardAvoidingView>
    );
  }
}

export default withNavigation(Login);

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
  buttons:{
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexGrow:1,
  }

});


AppRegistry.registerComponent('Login', ()=>Login)

