import React, {Component} from 'react';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import {AppRegistry, FlatList, StyleSheet, Text, View, 
        Image, Alert, Platform, TouchableHighlight, Dimensions,
        TextInput} from 'react-native';
import {races} from '../../assets/data/races';
import {Dropdown} from 'react-native-material-dropdown';

var screen = Dimensions.get('window');


export default class AddModal extends Component{

    constructor(props){
        super(props);
        this.state={
            selectedRace: '',

        }
    }

    showAddModal = () => {
        this.refs.myModal.open();
        //console.log(races);
    }

    _selectRace(input){
        this.setState({selectedRace: input})
        console.log(this.state.selectedRace)
    }

    render(){

        return(
            <Modal
            ref={'myModal'}
            style={styles.modal}
            position='center'
            backdrop={true}
            onClosed={()=>{
               alert('Modal Closed!')
            }}
            >

            <Text style={styles.header}> Character Creation </Text>
            <Dropdown
            style={styles.race} 

            label='Race'
            data={races}
            itemCount={10}
            onChangeText = {(input) => this._selectRace(input) }
            />
            <Dropdown
            style={styles.race} 
            label='Subclass'
            data={races}
            itemCount={10}
            />

            </Modal>
        );

    }    
}

const styles=StyleSheet.create({

    modal:{
        justifyContent : 'center',
        borderRadius: Platform.OS == 'ios' ? 30 : 0,
        shadowRadius: 10,
        width: screen.width - 80,
        height: 200,
    },
    header:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    race:{

    }

});

