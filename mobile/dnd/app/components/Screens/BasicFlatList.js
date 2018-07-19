import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert, Platform, TouchableHighlight } from 'react-native';
import flatListData from './flatListData';
import Swipeout from 'react-native-swipeout';
import AddModal from '../Home/AddModal';
import ActionButton from 'react-native-action-button';
import {chars,races} from '../../assets/data/races';

class FlatListItem extends Component {
    constructor(props) {
        super(props);   
        this.state = {
            activeRowKey: null,
        };          
    }
    render() {   
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
                <View style={{
                flex: 1,
                flexDirection:'column',                                
                }}
            >            
                    <View style={{
                            flex: 1,
                            flexDirection:'row',
                            // backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen': 'tomato'                
                            backgroundColor: 'antiquewhite',
                            padding:10,
                    }}>            
                       
                        <View style={{
                                flex: 1,
                                flexDirection:'column',   
                                flexGrow:1,                 
                            }}
                            onClick>         
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
                    <View style={{
                        height: 1,
                        backgroundColor:'white'                            
                    }}>
                
                    </View>

                </View>   

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
        <View style={{flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0, backgroundColor: 'rgba(150,97,107,1)'}}>
            
            <View style={{
                backgroundColor: 'rgba(69,45,49,0.9)', 
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
                    <FlatListItem item={item} index={index} parentFlatList={this}>

                    </FlatListItem>);
                }}
                keyExtractor={(item)=> item.toString()}
                >

            </FlatList>

            <ActionButton buttonColor="rgba(231,76,60,1)" onPress={() => this.refs.addModal.showAddModal()}>
                </ActionButton>

            <AddModal ref={'addModal'} parentFlatList={this} >

            </AddModal>
        </View>
      );
    }
}