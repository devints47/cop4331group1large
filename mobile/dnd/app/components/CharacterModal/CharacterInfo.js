import React, {Component} from 'react';
import Modal from 'react-native-modalbox';
//import Button from 'react-native-button';
import {AppRegistry, FlatList, StyleSheet, Text, View, 
        Image, Alert, Platform, TouchableHighlight, Dimensions,
        TextInput,Button, ScrollView, ImageBackground} from 'react-native';
import {races, subrace, background, chars,charclass} from '../../assets/data/races';
import {Dropdown} from 'react-native-material-dropdown';
import uuid from 'react-native-uuid';

var screen = Dimensions.get('window');


export default class CharacterInfo extends Component{

    constructor(props){
        super(props);
        this.state={
            info : {}
        }
    }

    showAddModal = (data) => {
        this.setState({info: data}, this.refs.myModal.open())
        this.refs.myModal.open();
        //console.log(races);
    }


    updateState(){
        this.refs.myModal.close();

    }

    showEquip(milf){
        
        var empt = []

        empt.push(<Text style={{bottom:200}}>{milf}</Text>)

        return(empt);
    }

    showSkills(milf){
        
        var empt = []

        console.log('Skills')
        console.log(this.state.info.race)
        console.log(this.state.info.skills)

        for(var i in this.state.info.skills)
        {
            console.log('itr')
            console.log(this.state.info.skills[i])
            if(this.state.info.skills[i]){
                empt.push(<Text style={{bottom:200}}>{i}</Text>)
            }
        }

        return(empt);
    }
    

    render(){

        const icons = 
        {
            'Dwarf': require('../../assets/images/icons/Dwarf.png'),
            'Elf': require('../../assets/images/icons/Elf.png'),
            'Halfling': require('../../assets/images/icons/Halfling.png'),
            'Human': require('../../assets/images/icons/Human.png'),
            'Dragonborn': require('../../assets/images/icons/Dragonborn.png'),
            'Gnome': require('../../assets/images/icons/Gnome.png'),
            'Half-Elf': require('../../assets/images/icons/Half-Elf.png'),
            'Half-Orc': require('../../assets/images/icons/Halfling.png'),
            'Tiefling': require('../../assets/images/icons/Tiefling.png'),
            
        }

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
            <TouchableHighlight onPress={()=>this.refs.stats.open()}>
            <ImageBackground source={require('../../assets/images/Card.png')}
            style={{height:'100%',width:'100%'}}
            >  
            <Text style={{
                fontSize:32, 
                position: 'absolute', 
                top:15, 
                bottom:10, 
                left:20 ,
                right:10, 
                color:'antiquewhite', 
                fontFamily:'Arial' }}>
                {this.state.info.race}
            </Text>
            <Image
            source={icons[this.state.info['race']]}
            style={{
                height:'50%',
                width:'75%',
                position:'absolute',
                top:45,
                left:50,
            }}
            >
            </Image>
            <Text style={{
                fontSize:22, 
                position: 'absolute', 
                top:275, 
                bottom:10, 
                left:125 ,
                right:10, 
                color:'antiquewhite'}}>
                {this.state.info.race} {this.state.info.subrace}{"\n"}
                {this.state.info.class}
            </Text>
            <Text style={{
                fontSize:22, 
                position: 'absolute', 
                top:370, 
                bottom:10, 
                left:125 ,
                right:10, 
                color:'antiquewhite'}}>
                {this.state.info.background}
            </Text>

             </ImageBackground>
            </TouchableHighlight>


            <Modal
            ref={'stats'}
            style={styles.modal2}
            position='center'
            backdrop={true}
            onClosed={()=>{
               console.log('Modal Closed')
            }}
            coverScreen={true}
            swipeToClose={false}

            >

            <View style={{bottom:-100}}>
            <View style={{bottom:10}}>
      
            <Text style={styles.header}>Character Creation</Text>
            
            </View>
            
            
            <View>
            <Text style={{fontSize: 16, bottom: 200}}>Equipment: </Text>
            <Text>  </Text>
            {this.showEquip()}
            <Text>  </Text>
            </View>


            <View>
            <Text style={{fontSize: 16, bottom: 200}}>Skills: </Text>
            <Text>  </Text>
            {this.showSkills()}
            <Text>  </Text>
            </View>


            <View>
            <Text style={{fontSize: 16, bottom: 200}}>Abilities: </Text>
            <Text>  </Text>
            <Text>STR:</Text>
            <Text>DEX:</Text>
            <Text>CON:</Text>
            <Text>INT:</Text>
            <Text>WIS:</Text>
            <Text>CHR:</Text>
            <Text>  </Text>
            </View>
            
            </View>
            
            </Modal>
            
           </Modal>


           
        );

    }    
}

const styles=StyleSheet.create({

    modal:{
        justifyContent : 'center',
        borderRadius: Platform.OS == 'ios' ? 30 : 10,
        shadowRadius: 30,
        width: screen.width - 50,
        height: 500,
        padding:0,
        backgroundColor:'rgb(75,39,93)',
        
    },
    modal2:{
        justifyContent : 'center',
        borderRadius: Platform.OS == 'ios' ? 30 : 10,
        shadowRadius: 30,
        width: screen.width - 50,
        height: 500,
        padding:0,
        
    },
    header:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        bottom: 200
    },
    race:{

    },
    dropdown:{
     padding:32,
    },

});