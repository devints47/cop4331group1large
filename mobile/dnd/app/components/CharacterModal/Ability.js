import React, {Component} from 'react';
import Modal from 'react-native-modalbox';
//import Button from 'react-native-button';
import {AppRegistry, FlatList, StyleSheet, Text, View, 
        Image, Alert, Platform, TouchableOpacity, Dimensions,
        TextInput,Button,ScrollView,KeyboardAvoidingView} from 'react-native';
import {races, subrace, background, chars,charclass,classWeapons} from '../../assets/data/races';
import {Dropdown} from 'react-native-material-dropdown';
import uuid from 'react-native-uuid';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import Skills from './Skills';
import { TextField } from 'react-native-material-textfield';
import CheckboxFormX from 'react-native-checkbox-form';

var screen = Dimensions.get('window');

const abilityData = [
    {
        label: 'STR',
    },
    {
        label: 'DEX',
    },
    {
        label: 'CON',
    },
    {
        label: 'INT',
    },
    {
        label: 'WIS',
    },
    {
        label: 'CHR',
    },
];

export default class Ability extends Component{

    constructor(props){
        super(props);
        this.state={
            selectedRace: '',
            selectedSubRace: '',
            selectedBackground: '',
            selectedClass:'',
            subracelabel: 'Subrace',
            booler: false,
            booler2: false,
            booler3: false,
            strString: 'STR',
            dexString: 'DEX',
            conString: 'CON',
            intString: 'INT',
            wisString: 'WIS',
            chrString: 'CHR',
            maxPoints: '27',
        }

        // this.state = {dis: false};
        this.onButtonPress = this.onButtonPress.bind(this)
        this.onButtonPressTwo = this.onButtonPressTwo.bind(this)
        this.onButtonPressThree = this.onButtonPressThree.bind(this)
        this.onButtonPressFour = this.onButtonPressFour.bind(this)
    }

    onButtonPress(){
        this.setState({booler: true});
        this.setState({booler2: false});
        this.setState({booler3:true});
        this.setState({strString: 'STR'});
        this.setState({dexString: 'DEX'});
        this.setState({conString: 'CON'});
        this.setState({intString: 'INT'});
        this.setState({wisString: 'WIS'});
        this.setState({chrString: 'CHR'});
        this.setState({strString:'15'});
        this.setState({dexString:'14'});
        this.setState({conString:'12'});
        this.setState({intString:'13'});
        this.setState({wisString:'10'});
        this.setState({chrString:'8'});
    }

    onButtonPressTwo(){
        this.setState({booler: false});
        this.setState({booler2:false});
        this.setState({booler3:false});
        this.setState({strString: 'STR'});
        this.setState({dexString: 'DEX'});
        this.setState({conString: 'CON'});
        this.setState({intString: 'INT'});
        this.setState({wisString: 'WIS'});
        this.setState({chrString: 'CHR'});
    }

    onButtonPressFour(){
        this.setState({booler: true});
        this.setState({booler2: true});
        this.setState({booler3:false});
        this.setState({strString:'8'});
        this.setState({dexString:'8'});
        this.setState({conString:'8'});
        this.setState({intString:'8'});
        this.setState({wisString:'8'});
        this.setState({chrString:'8'});
    }

    onButtonPressThree(){
        this.setState({booler: true});
        this.setState({booler2: false});
        this.setState({booler3: true});
        var num1 = Math.floor(Math.random() * 14) + 5;
        var num2 = Math.floor(Math.random() * 14) + 5;
        var num3 = Math.floor(Math.random() * 14) + 5;
        var num4 = Math.floor(Math.random() * 14) + 5;
        var num5 = Math.floor(Math.random() * 14) + 5;
        var num6 = Math.floor(Math.random() * 14) + 5;
        this.setState({strString: num1.toString()});
        this.setState({dexString: num2.toString()});
        this.setState({conString: num3.toString()});
        this.setState({intString: num4.toString()});
        this.setState({wisString: num5.toString()});
        this.setState({chrString: num6.toString()});
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
                return{
                    label: item.label,
                    value: item.label,
                };
            });
            console.log(newData);


            empt.push(<View key={uuid.v1()} style={{padding:10}}>
                <Text>Choose one</Text>
                <RadioForm style={{ alignItems: 'flex-start' }}
                buttonColor='rgba(150,97,107,1)'
                selectedButtonColor='rgba(69,45,49,0.9)'
                radio_props={newData}
                initial={-1}
                onPress={(value) => console.log(value)}
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

        let {str,dex,con,int,wis,chr} = this.state;
    

        return(

            <KeyboardAvoidingView behavior='padding' style={styles.main}>
            <Modal
            ref={'myModal'}
            style={styles.modal}
            position='center'
            backdrop={true}
            coverScreen={true}
            >

            <View style={{bottom:6}}>
            <Text style={styles.header}>Ability</Text>
            </View>

            <View style={{flexDirection: "row", left: 6,bottom: -5}}>
            
                <TouchableOpacity onPress={this.onButtonPressTwo}
                style={styles.button}
                >
             <Text style={{fontSize: 11}}>Custom</Text>
                </TouchableOpacity>
 
                <Text>  </Text>

                <TouchableOpacity onPress={this.onButtonPress}
                style={styles.button}
                >
             <Text style={{fontSize: 11}}>Preset</Text>
                </TouchableOpacity>
                
                <Text>  </Text>

                <TouchableOpacity onPress={this.onButtonPressThree}
                style={styles.button}
                
                >
             <Text style={{fontSize: 11}}>Roll</Text>
               
                </TouchableOpacity>

                <Text>  </Text>

                <TouchableOpacity onPress={this.onButtonPressFour}
                style={styles.button}
                >
             <Text style={{fontSize: 11}}>Point-Buy</Text>
                </TouchableOpacity>
            
            </View>
            
            <TextField
            label='STR'
            value={str}
            fontSize= {12}
            labelHeight= {20}
            onChangeText={ (str) => this.setState({str}) }
            disabled = {this.state.booler}
            label = {this.state.strString}
            />

            
             
            <TextField
            label='DEX'
            value={dex}
            fontSize= {12}
            labelHeight= {20}
            onChangeText={ (str) => this.setState({dex}) }
            disabled = {this.state.booler}
            label = {this.state.dexString}
            
            />
             
            <TextField
            label='CON'
            value={con}
            fontSize= {12}
            labelHeight= {20}
            onChangeText={ (str) => this.setState({con}) }
            disabled = {this.state.booler}
            label = {this.state.conString}
            />
                
            <TextField
            label='INT'
            value={int}
            fontSize= {12}
            disabled = {true}
            labelHeight= {20}
            onChangeText={ (str) => this.setState({int}) }
            disabled = {this.state.booler}
            label = {this.state.intString}
            /> 

            
          <TextField
            label='WIS'
            value={wis}
            fontSize= {12}
            labelHeight= {20}
            onChangeText={ (str) => this.setState({wis}) }
            disabled = {this.state.booler}
            label = {this.state.wisString}
            />

            <TextField
            label='CHR'
            value={chr}
            fontSize= {12}
            labelHeight= {20}
            onChangeText={ (str) => this.setState({chr}) }
            disabled = {this.state.booler}
            label = {this.state.chrString}
            />

            <View style={{bottom: -10}}>
            <Text style={{fontSize:11}}>DEX +1     INT +2</Text> 
            {this.state.booler2 == true ? <Text style={{fontSize:11}}>Points used: 0/{this.state.maxPoints}</Text> : <Text> </Text>}
            </View>
            

            {this.state.booler3 == true ?
            <View style={{ marginVertical: 10, bottom: 10}} >
              <Text style={{fontSize:10}}>Choose Two Abilities To Swap:</Text>

              <CheckboxFormX
                  style={{ width: 350 - 30,alignContent:'center' }}
                  dataSource={abilityData}
                  itemShowKey="label"
                  itemCheckedKey="RNchecked"
                  iconSize={12}
                  fontSize={12}
                  formHorizontal={true}
                  labelHorizontal={false}
              />
            
          </View>

            : <View><Text>  </Text></View>}
                        
            </Modal>
            </KeyboardAvoidingView>
            
        );

    }    
}

const styles=StyleSheet.create({

    main:{
        backgroundColor:'#d2c4b4',
        flex:1,
    },
    modal:{
        justifyContent : 'center',
        borderRadius: Platform.OS == 'ios' ? 30 : 10,
        shadowRadius: 10,
        width: screen.width - 40,
        height: 500,
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
      },
      button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
      },

});

