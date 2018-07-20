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
    }

    showAddModal = () => {
        this.refs.myModal.open();
        //console.log(races);
    }

    _renderEquipment(){

        var empt = [];
        var milf = "Bard";

        for(var i in classWeapons[milf]['Equipment'])
        {
            empt.push(<View>
                <Text>Choose one</Text>
                <RadioForm style={{ alignItems: 'flex-start' }}
                radio_props={classWeapons[milf]['Equipment'][i]}
                onPress={(value) => {this.setState({value:value})}}
                />
                </View>
                )
        }

        return( 
            empt
        );

    }

    updateState(){

        sub = this.state.selectedSubRace;

        if(sub=== ''){
            sub='None';
        }

        const newKey = uuid.v1();
        const newItem = {
            key: newKey,
            race: this.state.selectedRace,
            subrace: sub,
            background: this.state.selectedBackground,
            class: this.state.selectedClass,
        };    
        chars.push(newItem);
        // console.log(chars)    
        this.props.parentFlatList.refreshFlatList(newKey);       
        
        
        this.setState({
            selectedBackground:'',
            selectedClass:'',
            selectedRace:'',
            selectedSubRace:'',
        });


        this.refs.myModal.close();          

    }

    render(){

        return(
            <Modal
            ref={'myModal'}
            style={styles.modal}
            position='center'
            backdrop={true}
            >

            <View>
            <Text style={styles.header}> Character Creation </Text>
            </View>

            <ScrollView contentContainerStyle={styles.contentContainer}>
            {this._renderEquipment()}
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
