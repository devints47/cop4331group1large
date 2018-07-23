import React, { Component } from 'react';
import {Text,View,AppRegistry,StyleSheet, TextInput} from 'react-native';

import { FormInput, Button } from 'react-native-elements';
import * as Animate from 'react-native-animatable';


export default class SignupForm extends Component {
  
   constructor(props){
       super(props);

       this.state = {

        selectedCategory : 0
       };
   }
  
    render() {
    return (
        <Animate.View 
        animation='slideInUp'
        iterationCount={1}
        style={styles.container}>
            
            <TextInput 
            placeholder='username'
            placeholderTextColor='rgba(124,110,95,0.8)'
            style={styles.input}
            returnKeyType='next'
            onSubmitEditing={()=> this.passwordInput.focus()}
            keyboardType='email-address'
            autoCapitalize='none'
            autoCorrect={false}
            underlineColorAndroid='rgba(0,0,0,0)'
            />

            <TextInput 
            placeholder='password'
            placeholderTextColor='rgba(124,110,95,0.8)'
            style={styles.input}
            secureTextEntry
            returnKeyType='go'
            underlineColorAndroid='rgba(0,0,0,0)'
            ref={(input)=>this.passwordInput=input}
            />

            <TextInput 
            placeholder='confirm password'
            placeholderTextColor='rgba(124,110,95,0.8)'
            style={styles.input}
            secureTextEntry
            returnKeyType='go'
            underlineColorAndroid='rgba(0,0,0,0)'
            ref={(input)=>this.passwordInput=input}
            />

            <Button  
            buttonStyle={styles.button} 
            placeholderTextColor='rgba(124,110,95,0.8)'
            title='signup'/>

        </Animate.View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        padding:30,
        backgroundColor:'rgba(255,255,255,0.2)'
    },
    input:{
        height:40,
        backgroundColor: 'rgba(124,110,95,0.4)',
        marginBottom:20,
        borderRadius: 5,
        height: 50,
        fontSize:20,
    },
    button:{
        backgroundColor: 'rgba(54,47,39,0.5)',
        borderRadius: 10,
    }
});
AppRegistry.registerComponent('SignupForm', ()=>SignupForm)