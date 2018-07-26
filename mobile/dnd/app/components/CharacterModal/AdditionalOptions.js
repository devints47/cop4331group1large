import React, {Component} from 'react';
import Modal from 'react-native-modalbox';
//import Button from 'react-native-button';
import {AppRegistry, FlatList, StyleSheet, Text, View, 
        Image, Alert, Platform, TouchableHighlight, Dimensions,
        TextInput,Button,ScrollView} from 'react-native';
import {races, subrace, background, chars,charclass,classWeapons,backgroundSkills, classSkills, raceSkill, skillList} from '../../assets/data/races';
import {Dropdown} from 'react-native-material-dropdown';
import uuid from 'react-native-uuid';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import CheckboxFormX from 'react-native-checkbox-form';
import { runInThisContext } from 'vm';

const mockData = [
    {
        label: 'label1',
    },
    {
        label: 'label2',
    },
    {
        label: 'label3',
    },
];

var screen = Dimensions.get('window');


export default class AdditionalOptions extends Component{

    constructor(props){
        super(props);
        this.state={
            inputData: {race:'',subrace:'',background:'',class:''},
        }
        this.skills = JSON.parse(JSON.stringify(skillList));
    }

    showAddModal = (value) => {
        this.refs.myModal.open();
        console.log('Skills Modal:');
        this.setState({inputData: value}, function(){
            back = this.state.inputData['background']
            console.log(back)
            console.log(backgroundSkills[this.state.inputData['background']]['Skills'][0])
        });
        
    }

    _renderSkills(){

        

    }

    updateState(){

        console.log(this.skills)

        this.props.updateVal(this.skills);


        this.refs.myModal.close();          

    }

    _onSelect = ( item ) => {
    


        back = backgroundSkills[this.state.inputData['background']]['Skills'][0];


        for (i in item){
            if(item[i]['RNchecked'] || !item[i]['RNchecked']){
                this.skills[item[i].label] = item[i].RNchecked
            }
        }


        for(i in back){
            this.skills[back[i].label] = true
        }


        // console.log(this.skills)


      };

    render(){

        const { tag } = this.props;
        checked= this.state;

        return(
            <Modal
            ref={'myModal'}
            style={styles.modal}
            position='center'
            backdrop={true}
            coverScreen={true}
            swipeToClose={false}
            >

            <View><Text style={styles.header}>Additional Options</Text></View>

            <ScrollView contentContainerStyle={styles.contentContainer}>

            </ScrollView>            
            </Modal>
        );

    }    
}

const styles=StyleSheet.create({

    modal:{
        justifyContent : 'center',
        borderRadius: Platform.OS == 'ios' ? 30 : 10,
        shadowRadius: 10,
        width: screen.width - 80,
        height: 400,
        padding:32,
        
    },
    header:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    race:{

    },
    dropdown:{
     padding:32
    },

    contentContainer: {
        paddingVertical: 20,
      }

});

