import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';
import { Modal, Text, TouchableOpacity } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';


export default class router extends Component {

  constructor(props){
    super(props);
    this.state = {
    //  name: this.props.user.name
    }
  }
  render() {

  //  console.log(this.props);
    return (
      
      <View style={{ flex: 1, backgroundColor: '#f3f3f3' }}>
        {

         <Text>
                 {this.state.name}
           </Text>
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
});



AppRegistry.registerComponent('router', () => router)