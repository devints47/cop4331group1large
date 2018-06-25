import React, { Component } from "react";
import { Text, TouchableOpacity, View, AppRegistry, ListView,StyleSheet} from "react-native";
import Modal from "react-native-modal";

const users = [
  { name: 'John Doe' },
  { name: 'Rick James' },
  { name: 'Bob Hope' },
  { name: 'Janet Doe' }
]

export default class addchar extends Component {
  constructor(){
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      userDataSource: ds.cloneWithRows(users),
    };
  }

  renderRow(user, sectionId, rowId, highlightRow){
    return(
    <View>
      <Text>{user.name}</Text>
      </View>
    )
  }
  render() {
    return (
      <ListView 
        dataSource={this.state.userDataSource}
        renderRow={this.renderRow.bind(this)}
      />
    );
  }
}

AppRegistry.registerComponent('addchar', () => addchar)