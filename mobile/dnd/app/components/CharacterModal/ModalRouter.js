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
import Skills from './Skills';
import Ability from './Ability';

export default class ModalRouter extends Component{


    constructor(props){
        super(props);
        this.state={
            race: '',
            subrace: '',
            background:'',
            class:'Bard',
            
        };
    }

    _displayRace = () => {
        this.refs.races.showAddModal();
    }


    getRaceInfo(data){
    
        this.setState({race: data['race'], subrace: data['subrace'], background: data['background'],class:data['class']});
        console.log(data);
        this.refs.ability.showAddModal(data['class']);
        
    }

    openSkillsModal(){
        this.refs.skills.showAddModal();
    }


    render(){

        return(
        <View>
            <Races 
            ref={'races'} 
            updateVal={(val)=>this.getRaceInfo(val)} 
            parentFlatList={this.props.parentFlatList}
            updateVal={(data)=>this.getRaceInfo(data)}>
            </Races>
            <Equipment 
            ref={'equip'} 
            parentFlatList={this.props.parentFlatList} 
            selectClass={this.state.class}
            
            
            >
                
            </Equipment>

            <Skills ref={'skills'} parentFlatList={this.props.parentFlatList} selectClass={this.state.class}>
            </Skills>

            <Ability ref={'ability'} parentFlatList={this.props.parentFlatList} selectClass={this.state.class}>
            </Ability>
        </View>
        );

    }


}