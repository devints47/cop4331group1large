import React, { Component } from 'react';
import { TouchableHighlight, AppRegistry, Text, View, TextInput, StyleSheet,AsyncStorage } from 'react-native';
import List from './router';
export default class addcharspanish extends Component{
    constructor(){
        super()

        this.state = {
            title: ''
        }
    }
    changeTitle(title){
        this.setState({title})
    }
    buttonPressed(){
        const arrayData = [];
        if(this.state.title){
            const data = {
                title: this.state.title
            }
            arrayData.push(data);
            try{
                AsyncStorage.getItem('database_form').then((value) => {
                    if(value !== null){
                        const d = JSON.parse(value);
                        d.push(data)
                        AsyncStorage.setItem('database_form', JSON.stringify(d)).then(() => {
                            this.props.navigator.push({
                                title: 'Character List',
                                component: List
                            })
                        })
                    } else {
                        AsyncStorage.setItem('database_form', JSON.stringify(arrayData)).then(() => {
                            this.props.navigator.push({
                                title: "Character List",
                                component: List
                            })
                        })
                    }
                })
            } catch(err){
                console.log(err)
            }
        }
    }
    render() {
        return(
            <View style = {styles.container}>
            <View>
                <Text style={styles.title}>Character creation</Text>
                <TextInput 
                style={styles.input}
                    placeholder="Title"
                    value={this.state.title}
                    onChangeText={(title)=> this.changeTitle(title)}
                    />
                <TouchableHighlight 
                style = {styles.button}
                onPress={() => this.buttonPressed()}
                >
                    <Text style={styles.textButton}> Confirm </Text>
                </TouchableHighlight>
            </View>
         </View>
        );
    }
}


const styles = StyleSheet.create ({
   container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
      marginTop: 30,
      paddingLeft: 15,
      paddingRight: 15
   },
   title: {
       textAlign: 'center',
       fontSize: 18,
       marginBottom: 5 
   },
   button: {
       backgroundColor: 'skyblue',
       paddingTop: 15,
       paddingBottom: 15
   },
   textButton: {
       textAlign: 'center',
       color: 'white'
   },
   input:{
       height: 40,
       borderColor: '#ccc',
       borderWidth: 2,
       marginBottom: 20
   }
});

AppRegistry.registerComponent('addchar', () => addchar)