import React, { Component } from 'react'
import { AsyncStorage,AppRegistry, Text, View, TextInput, StyleSheet } from 'react-native'

class addchar extends Component {
   state = {
      name: ''
   }
   componentDidMount = () => AsyncStorage.getItem('name').then((value) => this.setState({ 'name': value }))

   setName = (value) => {
      AsyncStorage.setItem('name', value);
      this.setState({ 'name': value });
   }

   _submitForm = () => {
       const { name } = this.state
   };

   render() {

      return (
         <View style = {styles.container}>
            <TextInput style = {styles.textInput} autoCapitalize = 'none' 
               onChangeText = {this.setName}
               onSubmitEditing = {this._submitForm}/>
            <Text>
               {this.state.name}
            </Text>
         </View>
      )
   }
}
export default addchar

const styles = StyleSheet.create ({
   container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 50
   },
   textInput: {
      margin: 15,
      height: 35,
      borderWidth: 1,
      backgroundColor: '#7685ed'
   }
})

AppRegistry.registerComponent('addchar', () => addchar)