import React from "react";
import { StyleSheet } from "react-native";
import { StackNavigator } from "react-navigation";
import Map from "./components/Map";
import Home from "./components/Home";

const MyApp = StackNavigator({
  Home: { screen: Home },
  Map: { screen: Map }
});

export default class App extends React.Component {
  render() {
    return <MyApp />;
  }
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
