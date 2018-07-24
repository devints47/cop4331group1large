import React, {Component} from 'react';
import Modal from 'react-native-modalbox';
//import Button from 'react-native-button';
import {AppRegistry, FlatList, StyleSheet, Text, View, 
        Image, Alert, Platform, TouchableHighlight, Dimensions,
        TextInput,Button,ScrollView} from 'react-native';
import {races, subrace, background, chars,charclass,classWeapons} from '../../assets/data/races';
import {Dropdown} from 'react-native-material-dropdown';
import uuid from 'react-native-uuid';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import Skills from './Skills';

var screen = Dimensions.get('window');


export default class Equipment extends Component{

    constructor(props){
        super(props);
        this.state={
            selectedRace: '',
            selectedSubRace: '',
            selectedBackground: '',
            selectedClass:'',
            subracelabel: 'Subrace',
        }
        this.equipment = {};
        this.length = 0;
    }

    showAddModal = (value) => {
        this.refs.myModal.open();
        //console.log(races);
        this.setState({selectedClass:value});
    }

    _renderEquipment(){

        var empt = [];
        var milf = this.state.selectedClass;
        console.log('Here')

        // var oldData = classWeapons[milf]['Equipment'];
        // console.log(oldData);



        for(var i in classWeapons[milf]['Equipment'])
        {

            var oldData = classWeapons[milf]['Equipment'][i];

            var newData = oldData.map(function(item){
                
                data = i + ',' + item.label;
                
                return{
                    label: item.label,
                    value: data,
                };
            });
            console.log(newData);

            this.length = parseInt(i) + 1;

            var label = i.toString();

            empt.push(<View key={uuid.v1()} style={{padding:10}}>
                <Text>Choose one</Text>
                <RadioForm style={{ alignItems: 'flex-start' }}
                buttonColor='rgba(150,97,107,1)'
                selectedButtonColor='rgba(69,45,49,0.9)'
                radio_props={newData}
                initial={-1}
                accessibilityLabel= {label}
                onPress={(value) => this._onEquipmentSelect(value)}
                />
                </View>
                )
        }

        return( 
            empt
        );

    }

    _onEquipmentSelect(value){

        data = value.split(',')
        group = data[0];
        label = data[1];

        this.equipment[group]=label;


        console.log(this.equipment);

        equip=this.equipment;        
       
    }

    updateState(){


        equip = this.equipment;
        len = this.length;

       
        
        var newItem = []

        for (i in equip){
            newItem.push(equip[i]);
        }


        if(newItem.length != len){
            Alert.alert('Select All Items!');
            return;
        }

        this.props.updateVal(newItem);
        

        this.refs.myModal.close();       
        

    }

    render(){

        return(
            <Modal
            ref={'myModal'}
            style={styles.modal}
            position='center'
            backdrop={true}
            coverScreen={true}
            swipeToClose={false}
            >

            <View>
            <Text style={styles.header}> Character Creation </Text>
            </View>

            <ScrollView contentContainerStyle={styles.contentContainer}>
            {this._renderEquipment()}

            <Button title='Next' onPress={()=>this.updateState()}/>
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
        paddingVertical: 20
      }

});

