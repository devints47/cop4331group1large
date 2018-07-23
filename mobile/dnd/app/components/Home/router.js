import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,TouchableOpacity,Animated,Image,Button,FlatList
} from 'react-native';
import ActionButton from 'react-native-action-button';

import Races from '../CharacterModal/Races';
import BasicFlatList from '../Screens/BasicFlatList';
import Modal from 'react-native-modal';
import Swipeout from 'react-native-swipeout';

const Sliding_Drawer_Width = 250;

export default class App extends Component{

  constructor(props)
    {
        super(props);
        this.state = ({
            deletedRowKey: null,            
        });


        this.state={
            race: 'Race',
            subrace: 'Subrace',
            background: 'Background',
        }


    }



    _addChar(){
        //this.props.navigation.navigate('Character')
        this.refs.addModal.showAddModal()
    }

    getRaceInfo(data){
        this.setState({race: data['race'], subrace: data['subrace'], background: data['background']});
        console.log(this.state.race);
    }

  render(){

  return(

        <BasicFlatList style={styles.list}>


        <Races ref={'addModal'} updateVal={(val)=>this.getRaceInfo(val)}>
        </Races>

       
        
        <ActionButton buttonColor="rgba(231,76,60,1)" onPress={() => this._addChar() }>
          
          {/*<ActionButton buttonColor="rgba(231,76,60,1)" onPress={() => this.props.navigation.navigate('BasicFlatList')}>*/}

        </ActionButton>


        </BasicFlatList>
    
  );
}
}

const styles = StyleSheet.create({
  container:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems:'center'

    },
      TextStyle: {

          fontSize: 20,
          padding: 10,
          textAlign: 'center',
          color: 'black'
      },
      flatListItem: {
        color: 'white',
        padding: 10,
        fontSize: 16,  
      },
      list:{
          flex:1
      },

});
