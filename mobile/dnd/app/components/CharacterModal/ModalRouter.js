import React, {Component} from 'react';
import Modal from 'react-native-modalbox';
//import Button from 'react-native-button';
import {AppRegistry, FlatList, StyleSheet, Text, View, 
        Image, Alert, Platform, TouchableHighlight, Dimensions,
        TextInput,Button} from 'react-native';
import {races, subrace, background, chars,charclass} from '../../assets/data/races';
import {Dropdown} from 'react-native-material-dropdown';
import uuid from 'react-native-uuid';
import Races from './Races';

export default class ModalRouter extends Component{


    constructor(props){
        super(props);
        this.state={
            race: '',
            subrace: '',
            background:'',
        };
    }

    _displayRace = () => {
        this.refs.races.showAddModal();
    }


    getRaceInfo(data){
        this.setState({race: data['race'], subrace: data['subrace'], background: data['background']});
        console.log(this.state.race);
    }


    return(){


        <Races ref={'races'} updateVal={(val)=>this.getRaceInfo(val)}>
        </Races>

    }


}