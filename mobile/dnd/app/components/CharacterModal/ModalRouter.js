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
import CharacterInfo from './CharacterInfo';
import Ability from './Ability';

export default class ModalRouter extends Component{


    constructor(props){
        super(props);
        this.state={
            race: '',
            subrace: '',
            background:'',
            class:'Bard',
            equipment: [],
            skills:{},
            key: uuid.v1(),

        };
    }

    _displayRace = () => {
        this.refs.races.showAddModal();
    }

    _displayTest = (data) =>{
        //console.log(data)
        this.refs.char.showAddModal(data);
    }


    getRaceInfo(data){
    
        this.setState({race: data['race'], subrace: data['subrace'], background: data['background'],class:data['class']});
        console.log(data);
        this.refs.equip.showAddModal(data['class']);

    }
    getSkills(data){


        console.log('Get Skills Function')
        //console.log(data)

        this.setState({skills: data}, 
            function(){
            console.log(this.state.skills)
            this.finishCharacter();
            }
        );
        console.log('Updated State')
        this.refs.ability.showAddModal();

    }

    getEquipment(data){

        console.log('ModalRouter:');
        console.log(data);

        this.setState({equipment: data}, function(){
            console.log(this.state.equipment);
            this.refs.skills.showAddModal(this.state);
        });

       

    }

    openSkillsModal(){
        this.refs.skills.showAddModal();
    }

    finishCharacter(){

        character = this.state;
        chars.push(character);
        this.props.parentFlatList.refreshFlatList(character);       

    }


    render(){

        return(
        <View>
            <Races 
            ref={'races'} 
            updateVal={(val)=>this.getRaceInfo(val)} 
            parentFlatList={this.props.parentFlatList}
            updateVal={(data)=>this.getRaceInfo(data)}
            
            >
            </Races>
            <Equipment 
            ref={'equip'} 
            parentFlatList={this.props.parentFlatList} 
            selectClass={this.state.class}
            updateVal={(data)=>this.getEquipment(data)}

            >
            </Equipment>

            <Skills 
            ref={'skills'} 
            parentFlatList={this.props.parentFlatList} 
            selectClass={this.state.class}
            updateVal={(data)=>this.getSkills(data)}
            >
            </Skills>
            <CharacterInfo
            ref={'char'} 
            parentFlatList={this.props.parentFlatList} 
            selectClass={this.state.class}
            updateVal={(data)=>this.getSkills(data)}
            >
            </CharacterInfo>

        


            <Ability ref={'ability'} parentFlatList={this.props.parentFlatList} selectClass={this.state.class}>
            </Ability>
        </View>
        );

    }


}