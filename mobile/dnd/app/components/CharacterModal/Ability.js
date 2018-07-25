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
            booler: false,
            booler2: false,
            booler3: false,
            strString: 'STR',
            dexString: 'DEX',
            conString: 'CON',
            intString: 'INT',
            wisString: 'WIS',
            chrString: 'CHR',
            totalPoints: '0',
        }

        // this.state = {dis: false};
        this.onButtonPress = this.onButtonPress.bind(this)
        this.onButtonPressTwo = this.onButtonPressTwo.bind(this)
        this.onButtonPressThree = this.onButtonPressThree.bind(this)
        this.onButtonPressFour = this.onButtonPressFour.bind(this)
        
        this.inc1 = this.inc1.bind(this)
        this.dec1 = this.dec1.bind(this)

        this.inc2 = this.inc2.bind(this)
        this.dec2 = this.dec2.bind(this)

        this.inc3 = this.inc3.bind(this)
        this.dec3 = this.dec3.bind(this)

        this.inc4 = this.inc4.bind(this)
        this.dec4 = this.dec4.bind(this)

        this.inc5 = this.inc5.bind(this)
        this.dec5 = this.dec5.bind(this)

        this.inc6 = this.inc6.bind(this)
        this.dec6 = this.dec6.bind(this)
    }

    inc1(){

        var temp = parseInt(this.state.strString);
        
        if(temp + 1 > 15){
            Alert.alert('The ability should be between 8 and 15');
            return;
        }

        temp += 1;
        this.setState({strString:temp.toString()})
        this.setState({totalPoints:(parseInt(this.state.totalPoints)+1).toString()});
    }

    dec1(){
        var temp = parseInt(this.state.strString);
        
        if(temp-1 < 8){
            Alert.alert('The ability should be between 8 and 15');
            return;
        }

        temp -= 1;
        this.setState({strString:temp.toString()})
        this.setState({totalPoints:(parseInt(this.state.totalPoints)-1).toString()});
    }

    inc2(){

        var temp = parseInt(this.state.dexString);
        
        if(temp + 1 > 15){
            Alert.alert('The ability should be between 8 and 15');
            return;
        }

        temp += 1;
        this.setState({dexString:temp.toString()})
        this.setState({totalPoints:(parseInt(this.state.totalPoints)+1).toString()});
    }

    dec2(){
        var temp = parseInt(this.state.dexString);
        
        if(temp-1 < 8){
            Alert.alert('The ability should be between 8 and 15');
            return;
        }

        temp -= 1;
        this.setState({dexString:temp.toString()})
        this.setState({totalPoints:(parseInt(this.state.totalPoints)-1).toString()});
    }

    inc3(){

        var temp = parseInt(this.state.conString);
        
        if(temp + 1 > 15){
            Alert.alert('The ability should be between 8 and 15');
            return;
        }

        temp += 1;
        this.setState({conString:temp.toString()})
        this.setState({totalPoints:(parseInt(this.state.totalPoints)+1).toString()});
    }

    dec3(){
        var temp = parseInt(this.state.conString);
        
        if(temp-1 < 8){
            Alert.alert('The ability should be between 8 and 15');
            return;
        }

        temp -= 1;
        this.setState({conString:temp.toString()})
        this.setState({totalPoints:(parseInt(this.state.totalPoints)-1).toString()});
    }

    inc4(){

        var temp = parseInt(this.state.intString);
        
        if(temp + 1 > 15){
            Alert.alert('The ability should be between 8 and 15');
            return;
        }

        temp += 1;
        this.setState({intString:temp.toString()})
        this.setState({totalPoints:(parseInt(this.state.totalPoints)+1).toString()});
    }

    dec4(){
        var temp = parseInt(this.state.intString);
        
        if(temp-1 < 8){
            Alert.alert('The ability should be between 8 and 15');
            return;
        }

        temp -= 1;
        this.setState({intString:temp.toString()})
        this.setState({totalPoints:(parseInt(this.state.totalPoints)-1).toString()});
    }

    inc5(){

        var temp = parseInt(this.state.wisString);
        
        if(temp + 1 > 15){
            Alert.alert('The ability should be between 8 and 15');
            return;
        }

        temp += 1;
        this.setState({wisString:temp.toString()})
        this.setState({totalPoints:(parseInt(this.state.totalPoints)+1).toString()});
    }

    dec5(){
        var temp = parseInt(this.state.wisString);
        
        if(temp-1 < 8){
            Alert.alert('The ability should be between 8 and 15');
            return;
        }

        temp -= 1;
        this.setState({wisString:temp.toString()})
        this.setState({totalPoints:(parseInt(this.state.totalPoints)-1).toString()});
    }

    inc6(){

        var temp = parseInt(this.state.chrString);
        
        if(temp + 1 > 15){
            Alert.alert('The ability should be between 8 and 15');
            return;
        }

        temp += 1;
        this.setState({chrString:temp.toString()})
        this.setState({totalPoints:(parseInt(this.state.totalPoints)+1).toString()});
    }

    dec6(){
        var temp = parseInt(this.state.chrString);
        
        if(temp-1 < 8){
            Alert.alert('The ability should be between 8 and 15');
            return;
        }

        temp -= 1;
        this.setState({chrString:temp.toString()})
        this.setState({totalPoints:(parseInt(this.state.totalPoints)-1).toString()});
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


    updateState(){

        
        data = 
        {
            'str' : this.state.strString,
            'dex' : this.state.dexString,
            'con' : this.state.conString,
            'int' : this.state.intString,
            'wis' : this.state.wisString,
            'chr' : this.state.chrString,

        }

        console.log(data);
        this.props.updateVal(data)

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
            swipeToClose={false}
            >

            <View style={{bottom:10}}>
            <Text style={styles.header}>Ability</Text>
            </View>

            <ScrollView>
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

            <View style={{bottom: -10}}>
            <Text style={{fontSize:11}}>DEX +1     INT +2</Text> 
            </View>

            <View styles={{bottom:-200}}>
            <TextField
            label='STR'
            value={str}
            fontSize= {12}
            labelHeight= {20}
            onChangeText={ (str) => this.setState({str}) }
            disabled = {this.state.booler}
            label = {this.state.strString}
            />
            </View>
            
             
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

            <View style={{bottom: 1, flexDirection: "row"}}>
            
            {this.state.booler2 == true ? <Text style={{fontSize:11}}>                                Points used: {this.state.totalPoints}/27</Text> : <Text> </Text>}

            {this.state.booler3 == true ?
            <View style={{ marginVertical: 10, bottom: 15}} >
              <Text style={{fontSize:10}}>Choose Two Abilities To Swap:</Text>

              <CheckboxFormX
                  style={{ width: 350 - 30,alignContent:'center' }}
                  dataSource={abilityData}
                  itemShowKey="label"
                  itemCheckedKey="RNchecked"
                  iconSize={12}
                  fontSize={10}
                  formHorizontal={true}
                  labelHorizontal={false}
              />
            
          </View>

            : <View><Text>  </Text></View>}
        
        </View>


            {(this.state.booler2 == true && this.state.booler3 == false) ? <View style={{flexDirection: "row", left: 195,bottom: 340, height: 40}}>
                <TouchableOpacity onPress={this.dec1}><Text style={styles.button}>-</Text></TouchableOpacity>
                <Text>   </Text>
                <TouchableOpacity onPress={this.inc1}><Text style={styles.button}>+</Text></TouchableOpacity>
            </View> : <Text></Text>}


            {(this.state.booler2 == true && this.state.booler3 == false) ?<View style={{flexDirection: "row", left: 195,bottom: 325, height: 40}}>
                <TouchableOpacity onPress={this.dec2}><Text style={styles.button}>-</Text></TouchableOpacity>
                <Text>   </Text>
                <TouchableOpacity onPress={this.inc2}><Text style={styles.button}>+</Text></TouchableOpacity>
            </View>: <Text></Text>}

            {(this.state.booler2 == true && this.state.booler3 == false) ?<View style={{flexDirection: "row", left: 195,bottom: 311, height: 40}}>
                <TouchableOpacity onPress={this.dec3}><Text style={styles.button}>-</Text></TouchableOpacity>
                <Text>   </Text>
                <TouchableOpacity onPress={this.inc3}><Text style={styles.button}>+</Text></TouchableOpacity>
            </View>: <Text></Text>}

            {(this.state.booler2 == true && this.state.booler3 == false) ?<View style={{flexDirection: "row", left: 195,bottom: 297, height: 40}}>
                <TouchableOpacity onPress={this.dec4}><Text style={styles.button}>-</Text></TouchableOpacity>
                <Text>   </Text>
                <TouchableOpacity onPress={this.inc4}><Text style={styles.button}>+</Text></TouchableOpacity>
            </View>: <Text></Text>}

            {(this.state.booler2 == true && this.state.booler3 == false) ?<View style={{flexDirection: "row", left: 195,bottom: 284, height: 40}}>
                <TouchableOpacity onPress={this.dec5}><Text style={styles.button}>-</Text></TouchableOpacity>
                <Text>   </Text>
                <TouchableOpacity onPress={this.inc5}><Text style={styles.button}>+</Text></TouchableOpacity>
            </View>: <Text></Text>}

            {(this.state.booler2 == true && this.state.booler3 == false) ?<View style={{flexDirection: "row", left: 195,bottom: 270, height: 40}}>
                <TouchableOpacity onPress={this.dec6}><Text style={styles.button}>-</Text></TouchableOpacity>
                <Text>   </Text>
                <TouchableOpacity onPress={this.inc6}><Text style={styles.button}>+</Text></TouchableOpacity>
            </View>: <Text></Text>}


             <Button title='Next' onPress={()=>this.updateState()}/>

            </ScrollView>

                        
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

