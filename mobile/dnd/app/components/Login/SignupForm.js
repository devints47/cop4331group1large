import React, { Component } from 'react';
import {Text,View,AppRegistry,StyleSheet, TextInput} from 'react-native';

import { FormInput, Button } from 'react-native-elements';
import * as Animate from 'react-native-animatable';


export default class SignupForm extends Component {
  
   constructor(props){
       super(props);

       this.state = {
        user: '',
        pass: '',
        confirm_pass: '',
        selectedCategory : 0
       };
   }

   handleAdd(){
    console.log(this.state.user);
    console.log(this.state.pass);
    console.log(this.state.confirm_pass);

    const button = this;
    const data = {
        username: this.state.user, 
        password:this.state.pass, 
        confirm_password: this.state.confirm_pass,
    };
    const json = JSON.stringify(data);
    console.log(json);

    fetch(global.uri + '/register1',{
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: json
    })
    .then((response)=>response.json())
    .then((res)=>{
        console.log(res)
        if(res.res == 'Registration Successful!'){
          console.log(res.res)
          
          button.props.navigation.navigate('Router')
        }
        else alert(res.res)
    })
    .catch(()=>{
        console.log('Registration Error')
    }).done();


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
            onChangeText={(text) => this.setState({user:text}) }
            />

            <TextInput 
            placeholder='password'
            placeholderTextColor='rgba(124,110,95,0.8)'
            style={styles.input}
            secureTextEntry
            returnKeyType='go'
            underlineColorAndroid='rgba(0,0,0,0)'
            ref={(input)=>this.passwordInput=input}
            onChangeText={(text) => this.setState({pass:text}) }
            />

            <TextInput 
            placeholder='confirm password'
            placeholderTextColor='rgba(124,110,95,0.8)'
            style={styles.input}
            secureTextEntry
            returnKeyType='go'
            underlineColorAndroid='rgba(0,0,0,0)'
            ref={(input)=>this.passwordInput=input}
            onChangeText={(text) => this.setState({confirm_pass:text}) }
            />

            <Button  
            buttonStyle={styles.button} 
            placeholderTextColor='rgba(124,110,95,0.8)'
            title='signup'
            onPress={()=> this.handleAdd() }
            />

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