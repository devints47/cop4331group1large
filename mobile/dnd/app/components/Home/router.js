import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';
import { Modal, AsyncStorage, Text, TouchableOpacity } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import addchar from "./addchar";


export default class router extends Component {
static navigationOptions = {
  title: 'Main Page',
};
  constructor(){
    super()
    this.state = {
      list: ''
    }
    try{

    AsyncStorage.getItem('database_form').then((value) => {
        this.setState({
          list: JSON.parse(value)
        })
      }) 
    }catch(err){
      console.log(err)
    }
  }
  parseData(){
    if(this.state.list){
      return this.state.list.map((data, i) => {
        return (
          <View 
          style = {styles.dataList}
          key={i}>
          <Text>
            {data.title}
          </Text>

          </View>
        )
      })
    }
  }
  render() {
   // const data = JSON.stringify(this.state.list)

  //  console.log(this.props);
    return (
      
      <View style={{ flex: 1, backgroundColor: '#f3f3f3' }}>
        {

       // <Text>
                 this.parseData()
        //   </Text>
        }
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#1abc9c' title="Add Character" onPress={() => this.props.navigation.navigate('Router')}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#FF0000' title="Delete Character" onPress={() => this.props.navigation.navigate('Router')}>
            <Icon name="md-remove" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#9b59b6' title="All Characters" onPress={() =>this.props.navigation.navigate('Router')}>
            <Icon name="md-list" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>

        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  dataList: {
    marginTop: 5,
    marginBottom: 5,
  }
});



AppRegistry.registerComponent('router', () => router)