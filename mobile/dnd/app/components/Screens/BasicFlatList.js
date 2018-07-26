import React, { Component } from 'react';
import { AppRegistry, 
    FlatList, StyleSheet, Text, View, Image, Alert, 
    Platform, TouchableHighlight, Button, ImageBackground,
    AsyncStorage } from 'react-native';
import flatListData from './flatListData';
import Swipeout from 'react-native-swipeout';
import Races from '../CharacterModal/Races';
import Equipment from '../CharacterModal/Equipment';
import ActionButton, { ActionButtonItem } from 'react-native-action-button';
import {chars,races,classWeapons} from '../../assets/data/races';
import Icon from 'react-native-vector-icons/Ionicons';
import ModalRouter from '../CharacterModal/ModalRouter';

class FlatListItem extends Component {
    constructor(props) {
        super(props);   
        this.state = {
            activeRowKey: null,
        };          
    }

    render() {   


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



        const swipeSettings = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {
                if(this.state.activeRowKey != null) {
                    this.setState({ activeRowKey: null });
                }              
            },          
            onOpen: (secId, rowId, direction) => {
                this.setState({ activeRowKey: this.props.item.key });
            },      
            right: [
                { 
                    onPress: () => {    
                        const deletingRow = this.state.activeRowKey;          
                        Alert.alert(
                            'Alert',
                            'Are you sure you want to delete ?',
                            [                              
                              {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                              {text: 'Yes', onPress: () => {        
                                chars.splice(this.props.index, 1); 
                                //Refresh FlatList ! 
                                this.props.parentFlatList.refreshFlatList(deletingRow);
                              }},
                            ],
                            { cancelable: true }
                          ); 
                    }, 
                    text: 'Delete', type: 'delete' 
                }
            ],  
            rowId: this.props.index, 
            sectionId: 1    
        };


        return (  
            <Swipeout {...swipeSettings}>
                <ImageBackground 
                style={{
                flex: 1,
                flexDirection:'column',
                height:'100%',
                width:'100%',                       
                }}
                source={require('../../assets/images/ListBox.png')}
            >            
                    <View style={{
                            flex: 1,
                            flexDirection:'row',
                            // backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen': 'tomato'                
                    }}>
                        <TouchableHighlight onPress={()=>this.props.showChar(this.props.item)}>
                            <Image
                            source = {icons[this.props.item.race]}
                            style={{width:100, height:100, margin:5}}>
                            </Image>    
                        </TouchableHighlight> 
                        
                        <View style={{
                                flex: 1,
                                flexDirection:'column',   
                                flexGrow:1,                 
                            }}
                            >         
                                <Text style={{
                                    color:'black',
                                    paddingLeft:50,
                                    paddingBottom:10,
                                    fontSize:16
                                }}
                                >
                                    {this.props.item.race} {this.props.item.subrace}
                                </Text>
                                <Text style={{
                                    fontSize:15, 
                                    color:'red', 
                                    paddingLeft:50
                                }}
                                >
                                    {this.props.item.class} {this.props.item.background}
                                </Text>
                        </View>              
                    </View>

                </ImageBackground>   

            </Swipeout>      

            
            
        );
    }
}
const styles = StyleSheet.create({
    flatListItem: {
        color: 'black',
        paddingLeft: 20,
        fontSize: 16,  
    }
});

export default class BasicFlatList extends Component {
    constructor(props) {
        super(props);     
        this.state = ({
            deletedRowKey: null,            
        });
        this._onPressAdd = this._onPressAdd.bind(this);        
    }
    refreshFlatList = (activeKey) => {
        console.log(chars)
        this.setState((prevState) => {
            return {
                deletedRowKey: activeKey,
            };
        });


        this.refs.flatList.scrollToEnd();
    }
    _onPressAdd () {
        // alert("You add Item");
        this.refs.addModal.showAddModal();
    }

    render() {


    


      return (
        <View style={{flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0, backgroundColor: 'rgb(135,119,143)'}}>
            
            <View style={{
                backgroundColor: 'rgb(75,39,93)', 
                flexDirection: 'row',           
                alignItems: 'center',
                height: 55,
                justifyContent:'center'}}>
                <Text style={{
                    fontSize:25,
                    color:'white',
                }}>
                    Character Manager
                </Text>
    
            </View>

            <FlatList 
                ref={"flatList"}
                data={chars}
                extraData={this.state}
                renderItem={({item, index})=>{
                    //console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                    return (
                    <FlatListItem item={item} index={index} parentFlatList={this} showChar={(data)=>this.refs.modal._displayTest(data)}>

                    </FlatListItem>);
                }}
                keyExtractor={(item)=> item.toString()}
                >

            </FlatList>

            <ActionButton buttonColor="rgba(152,0,0,1)" onPress={() => this.refs.modal._displayRace()}>
            </ActionButton>


            <ModalRouter ref={'modal'} parentFlatList={this}>
            </ModalRouter>

            
        </View>
      );
    }
}