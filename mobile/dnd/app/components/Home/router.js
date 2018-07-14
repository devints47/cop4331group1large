import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,TouchableOpacity,Animated,Image,Button,FlatList
} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import Swipeout from 'react-native-swipeout';

const Sliding_Drawer_Width = 250;

export default class App extends Component{

  constructor(props)
    {
        super(props);
        this.state = ({
            deletedRowKey: null,            
        });
        this.Animation = new Animated.Value(0);
        this.Sliding_Drawer_Toggle = true;
    }

    ShowSlidingDrawer = () =>
    {
        if( this.Sliding_Drawer_Toggle === true )
        {
                Animated.timing(
                    this.Animation,
                    {
                        toValue: 1,
                        duration: 500
                    }
                ).start(() =>
                {
                    this.Sliding_Drawer_Toggle = false;
                });

        }
        else
        {
                Animated.timing(
                    this.Animation,
                    {
                        toValue: 0,
                        duration: 500
                    }
                ).start(() =>
                {
                    this.Sliding_Drawer_Toggle = true;
                });
        }
    }

  render(){
    const Animation_Interpolate = this.Animation.interpolate(
      {
          inputRange: [ 0, 1 ],
          outputRange: [ -(Sliding_Drawer_Width - 32), 0 ]
      });

  return(
    <View style={styles.container}>

        <ActionButton buttonColor="rgba(231,76,60,1)" onPress={() => this.props.navigation.navigate('BasicFlatList')}>
        
        </ActionButton>

    
      <Animated.View style = {[ styles.Root_Sliding_Drawer_Container, { transform: [{ translateX: Animation_Interpolate }]}]}>


    <View style = { styles.Main_Sliding_Drawer_Container }>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')}>
          <Text style= {{fontSize:30}}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
          <Text style= {{fontSize:30}}>Logout</Text>
        </TouchableOpacity>

        </View>


      <TouchableOpacity onPress = { this.ShowSlidingDrawer}>
        <Image source={require('../../assets/images/icon.png')}  style = {{resizeMode: 'contain', width: 38, height: 36,left:10,bottom: -3 }} />
      </TouchableOpacity>


    </Animated.View>

    </View>
  );
}
}

const styles = StyleSheet.create({
  container:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems:'center'

    },
    Root_Sliding_Drawer_Container:
      {
          position: 'absolute',
          flexDirection: 'row',
          left: 0,
          top: 0,
          //top: (Platform.OS == 'ios') ? 20 : 0,
          width: Sliding_Drawer_Width,
          height:'100%'
      },

      Main_Sliding_Drawer_Container:
      {
          flex: 1,
          backgroundColor: 'gray',
          paddingHorizontal: 10,
          justifyContent: 'center',
          alignItems: 'center'
      },

      TextStyle: {

          fontSize: 20,
          padding: 10,
          textAlign: 'center',
          color: 'black'
      },
      flatListItem: {
        color: 'white',
        padding: 10,
        fontSize: 16,  
    }

});
