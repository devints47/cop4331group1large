import React, { Component } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from "react-native";

import { NavigationActions } from "react-navigation";

class router extends Component {
  _navigate(route) {
    return this.props.navigation.dispatch(
      NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: `${route}` })]
      })
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.menuItem}
        >
          <Text style={styles.menuItemText}>Character List</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
        >
          <Text style={styles.menuItemText}>Settings</Text>
        </TouchableOpacity>
      
        <TouchableOpacity
          style={styles.menuItem}
        >
          <Text style={styles.menuItemText}>Log Out</Text>
        </TouchableOpacity>

      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100
  },
  menuItem: {
    padding: 10,
    justifyContent: "center",
    backgroundColor: "transparent",
    marginBottom: 2
  },

  Logout: {
    padding: 10,
    justifyContent: "center",
    backgroundColor: "red",
    marginBottom: 2
  },
  menuItemText: {
    fontSize: 20
  }
});

router.defaultProps = {};

router.propTypes = {};

export default router;
