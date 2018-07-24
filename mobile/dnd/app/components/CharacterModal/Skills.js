import React, {Component} from 'react';
import Modal from 'react-native-modalbox';
//import Button from 'react-native-button';
import {AppRegistry, FlatList, StyleSheet, Text, View, 
        Image, Alert, Platform, TouchableHighlight, Dimensions,
        TextInput,Button,ScrollView} from 'react-native';
import {races, subrace, background, chars,charclass,classWeapons,backgroundSkills} from '../../assets/data/races';
import {Dropdown} from 'react-native-material-dropdown';
import uuid from 'react-native-uuid';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import CheckboxFormX from 'react-native-checkbox-form';

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


export default class Skills extends Component{

    constructor(props){
        super(props);
        this.state={
            inputData: {race:'',subrace:'',background:'',class:''},
        }
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

    _onSelect = ( item ) => {
        console.log(item);
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

            <View><Text style={styles.header}>Skills</Text></View>

            <ScrollView contentContainerStyle={styles.contentContainer}>

           <View>
            <Text style={{fontSize: 15,
            fontWeight: 'bold',
            textAlign: 'left',}}>Skills from background</Text>
            </View>

            <View>
              
              <CheckboxFormX
                  dataSource={backgroundSkills[this.state.inputData['background']]['Skills'][0]}
                  contentContainerStyle={{alignItems: 'flex-start'}}
                  itemShowKey="label"
                  itemCheckedKey="RNchecked"
                  iconSize={28}
                  onChecked={(item) => this._onSelect(item)}
              />
             </View>

           <View>
             <Text style={{fontSize: 15,
             fontWeight: 'bold',
             textAlign: 'left',}}>Skills from subclass</Text>
            </View>

            <View>
              
              <CheckboxFormX
                  dataSource={backgroundSkills[this.state.inputData['background']]['Skills'][0]}
                  contentContainerStyle={{alignItems: 'flex-start'}}
                  itemShowKey="label"
                  itemCheckedKey="RNchecked"
                  iconSize={28}
                  onChecked={(item) => this._onSelect(item)}
              />
          </View>

           <View>
            <Text style={{fontSize: 15,
            fontWeight: 'bold',
            textAlign: 'left',}}>Skills from class</Text>
            </View>

            <View>
              
              <CheckboxFormX
                  dataSource={backgroundSkills[this.state.inputData['background']]['Skills'][0]}
                  contentContainerStyle={{alignItems: 'flex-start'}}
                  itemShowKey="label"
                  itemCheckedKey="RNchecked"
                  iconSize={28}
                  onChecked={(item) => this._onSelect(item)}
              />
          </View>
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

