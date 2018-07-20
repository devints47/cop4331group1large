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
import Equipment from './Equipment';

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


    render(){

        return(
        <View>
            <Races ref={'races'} updateVal={(val)=>this.getRaceInfo(val)} parentFlatList={this.props.parentFlatList}
            openEquipment={()=>this.refs.equip.showAddModal()}>
            </Races>
            <Equipment ref={'equip'} parentFlatList={this.props.parentFlatList}>
            </Equipment>
        </View>
        );

    }


}