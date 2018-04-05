import React, { Component } from "react";
import { Button, StatusBar, Text, View } from "react-native";
import { styles } from "../App";
import { StackNavigator } from "react-navigation";
import { MapView } from "expo";

export default class Map extends Component {
  static navigationOptions = { title: "Map" };

  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: params.listItem.latitude,
            longitude: params.listItem.longitude,
            latitudeDelta: params.listItem.latitudeDelta,
            longitudeDelta: params.listItem.longitudeDelta
          }}
        >
          <MapView.Marker
            coordinate={{
              latitude: params.listItem.latitude,
              longitude: params.listItem.longitude
            }}
            title="Haaga-Helia"
          />
        </MapView>
      </View>
    );
  }
}
