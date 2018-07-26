
import React, { Component } from 'react';
import {Text,View,AppRegistry,StyleSheet, TextInput,AsyncStorage,Alert} from 'react-native';

import { FormInput, Button } from 'react-native-elements';
import * as Animate from 'react-native-animatable';


export default class LoginForm extends Component {
  
   constructor(props){
       super(props);

       this.state = {
        selectedCategory : 0,
        user: '',
        pass:'',
       };
   }

   handleAdd(){

    const button = this;
    const data = {'username': this.state.user, 'password':this.state.pass};
    const json = JSON.stringify(data);
    console.log(json);


    fetch(global.uri + '/login_mobile',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body: json,
        credentials: 'same-origin',
    })
    .then((res)=>{
        token=JSON.stringify(res.headers.map['set-cookie'])
        AsyncStorage.setItem('@app:session', token);
        console.log(token);
        return res.json()
    })
    .then((res)=>{
        if(res['id']){
            console.log('Logged in!')
            AsyncStorage.setItem('user_id', res['id']);
            button.props.navigation.navigate('Router')
        }
        else{
            console.log('User/Pass Error')
            Alert.alert('Incorrect User/Pass!!')
        }
        console.log(res)
    })
    .catch((res)=>{
        console.log('error')
        console.log(res)
    }).done();



}


    getUserID(){

        data = ''

        const button = this;

        try {
            AsyncStorage.getItem('@app:session').then(token => {
                console.log('Read cookie')
                console.log(JSON.parse(token))
                data=JSON.parse(token)
              });
        } catch (error) {
            console.log('Cookie Not Found')
        }

        fetch(global.uri + '/test', 
        {
            method: 'GET',
            headers:
            {
                'Cookie': data
            },
            credentials: 'same-origin',
        }).then((response)=>{
            console.log(response)
            return response.json()
        }).then((res)=>{
            console.log(res)
        }).catch(()=>{
            console.log('ERROR')
        });

        button.props.navigation.navigate('Router')



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

            <Button  
            buttonStyle={styles.button} 
            placeholderTextColor='rgba(124,110,95,0.8)'
            onPress={()=> this.handleAdd() }
            title='login'/>

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
AppRegistry.registerComponent('LoginForm', ()=>LoginForm)