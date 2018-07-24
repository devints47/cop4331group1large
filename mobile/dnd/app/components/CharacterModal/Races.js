import React, {Component} from 'react';
import Modal from 'react-native-modalbox';
//import Button from 'react-native-button';
import {AppRegistry, FlatList, StyleSheet, Text, View, 
        Image, Alert, Platform, TouchableHighlight, Dimensions,
        TextInput,Button} from 'react-native';
import {races, subrace, background, chars,charclass} from '../../assets/data/races';
import {Dropdown} from 'react-native-material-dropdown';
import uuid from 'react-native-uuid';

var screen = Dimensions.get('window');


export default class Races extends Component{

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


    _renderSubRace(){

        disabled = subrace[this.state.selectedRace]['subrace'][0]['value'] === 'none'

        if(!disabled) setlabel = this.state.subracelabel;
        else {
            setlabel = 'No Subrace'
        }


        return(
            <Dropdown
            style={styles.race} 
            ref={'subdrop'}
            label={setlabel}
            data={subrace[this.state.selectedRace]['subrace']}
            disabled={disabled}
            itemCount={10}
            onChangeText = {(input)=>this.setState({selectedSubRace: input})}
            />

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
        //chars.push(newItem);
        // console.log(chars)    
        //this.props.parentFlatList.refreshFlatList(newKey);       
        
        
        this.setState({
            selectedBackground:'',
            selectedClass:'',
            selectedRace:'',
            selectedSubRace:'',
        });


        console.log('Here');
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
            onClosed={()=>{
               console.log('Modal Closed')
            }}
            coverScreen={true}
            swipeToClose={false}
            >

            <View styles={styles.dropdown}>
                <Text style={styles.header}> Character Creation </Text>
                <Dropdown
                style={styles.race} 
                ref={'racedrop'}
                label='Race'
                data={races}
                itemCount={10}
                onChangeText = {(input) => this.setState({selectedRace: input}) }
                />

                {this._renderSubRace()}


                <Dropdown
                style={styles.race} 
                ref={'backdrop'}
                label='Class'
                data={charclass}
                itemCount={10}
                onChangeText = {(input)=>this.setState({selectedClass: input})}
                />

                <Dropdown
                style={styles.race} 
                ref={'backdrop'}
                label='Background'
                data={background}
                itemCount={10}
                onChangeText = {(input)=>this.setState({selectedBackground: input})}
                />

                <Button title='Next' onPress={()=>this.updateState()}/>
            </View>
            
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
     padding:32,
    },

});