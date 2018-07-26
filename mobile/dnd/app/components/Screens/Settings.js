
import React, { Component } from 'react';
import {Text,View,AppRegistry,StyleSheet, TextInput,Image,TouchableHighlight,TouchableOpacity} from 'react-native';

import { FormInput, Button } from 'react-native-elements';
import * as Animate from 'react-native-animatable';


export default class Settings extends Component {
  
   constructor(props){
       super(props);

       this.state = {
        selectedCategory : 0
       };
   }
  

    render() {
    return (
        
        <View style={{alignItems: 'center', bottom: -155}}>
            
            <Text style = {styles.settingsText}>SETTINGS</Text>
            
            <TouchableOpacity style={{left:-150,bottom:190}} onPress={() => this.props.navigation.navigate('Router')}>
            <Image style = {{resizeMode: 'contain', width: 42, height: 54,left:5, bottom:10 }} source={require("../../assets/images/back.png")}/>
            </TouchableOpacity>

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

            <Button  
            buttonStyle={styles.button} 
            placeholderTextColor='rgba(124,110,95,0.8)'
            title='save'/>

        </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        padding:30,
        backgroundColor:'rgba(255,255,255,0.2)'
    },

    settingsText:{
        fontSize: 44,
        bottom: 150
    },
    input:{
        height:40,
        backgroundColor: 'rgba(124,110,95,0.4)',
        marginBottom:20,
        borderRadius: 5,
        height: 50,
        fontSize:20,
        width: 300,
        bottom: 30
    },
    button:{
        backgroundColor: 'rgba(54,47,39,0.5)',
        borderRadius: 10,
        width: 140,
        alignItems: 'center',
        bottom: 20
    }
});
AppRegistry.registerComponent('LoginForm', ()=>LoginForm)