import React, {Component} from 'react';
import Modal from 'react-native-modalbox';
//import Button from 'react-native-button';
import {AppRegistry, FlatList, StyleSheet, Text, View, 
        Image, Alert, Platform, TouchableHighlight, Dimensions,
        TextInput,Button} from 'react-native';
import {races, subrace, background} from '../../assets/data/races';
import {Dropdown} from 'react-native-material-dropdown';

var screen = Dimensions.get('window');


export default class AddModal extends Component{

    constructor(props){
        super(props);
        this.state={
            selectedRace: '',
            selectedSubRace: '',
            selectedBackground: '',
            subracelabel: 'Subrace',

        }
    }

    showAddModal = () => {
        this.refs.myModal.open();
        //console.log(races);
    }

    _renderSubRace(){

        
        disabled = subrace[this.state.selectedRace][0]['value'] === 'none'

        if(!disabled) setlabel = this.state.subracelabel;
        else setlabel = 'No Subrace'


        return(
            <Dropdown
            style={styles.race} 
            ref={'subdrop'}
            label={setlabel}
            data={subrace[this.state.selectedRace]}
            disabled={disabled}
            itemCount={10}
            onChangeText = {(input)=>this.setState({selectedSubRace: input})}
            />

        );

    }

    updateState(){
        var data = {race: this.state.selectedRace, subrace: this.state.selectedSubRace, background: this.state.selectedBackground}
        this.props.updateVal(data);
        console.log('back');
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
            label='Background'
            data={background}
            itemCount={10}
            onChangeText = {(input)=>this.setState({selectedBackground: input})}
            />

            <Button title='Next' onPress={()=>this.updateState()}/>

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
    },
    header:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    race:{

    }

});

