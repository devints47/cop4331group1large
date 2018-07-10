import React, { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

class MainAppPage extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    
    headerLeft: (
      <View style={{ paddingHorizontal: 10 }}>
        <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
          <Icon name="menu" size={30} color="blue"/>
        </TouchableOpacity>
      </View>
    )
  });
  render() {
    return (
      <View style={styles.container}>
        <Text>Main Page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

MainAppPage.defaultProps = {};

MainAppPage.propTypes = {};

export default MainAppPage;
