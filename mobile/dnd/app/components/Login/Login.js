import React, { Component } from 'react';
import {
  Text,
  View,
  AppRegistry,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  Alert,
  ImageBackground,
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

      <ImageBackground
      source={require('../../assets/images/background.png')}
      style={{height:'100%',width:'100%'}}
      >

          	<Animate.View style={styles.container} animation='zoomIn' iterationCount={1}>
                <Image
                source={require('../../assets/images/dragon.png')}
                style={styles.logo}
                />
                <Text style={styles.text}>
                  4d20
                </Text>
            </Animate.View> 
            
        <View >

        <Animate.View style={styles.buttons} animation='slideInUp' iterationCount={1} >
                  <Button 
                    buttonStyle = {styles.loginButton}
                    backgroundColor = 'rgba(54,47,39,0.5)'
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
                    backgroundColor = 'rgba(54,47,39,0.5)'
                    borderRadius={10}
                    fontWeight = 'bold'
                    onPress = {this.onButtonPressTwo}
                    title={'Sign up'}
                    clear
                    activeOpacity = {0.7}
                  />
        </Animate.View>
        
        {this.state.isShowingText == false ? <LoginForm navigation={this.props.navigation}/> : <SignupForm navigation={this.props.navigation}/>}
        </View>

      </ImageBackground>
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
		height:'70%',
    width:'90%',
    flex:1,
  },
	text:{
		color:'rgba(34,24,13,0.4)',
		justifyContent: 'center',
    textAlign: 'center',
    padding:1,
    fontSize:25,
    fontWeight:'bold',
  },
  buttons:{
    alignSelf: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
    flexGrow:1,
  }

});


AppRegistry.registerComponent('Login', ()=>Login)

