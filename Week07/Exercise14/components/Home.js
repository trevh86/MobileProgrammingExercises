import React, { Component } from "react";
import { StatusBar, View } from "react-native";
import { StackNavigator } from "react-navigation";
import {
  FormLabel,
  FormInput,
  Button,
  List,
  ListItem
} from "react-native-elements";

export default class Home extends Component {
  static navigationOptions = { title: "Home" };

  constructor(props) {
    super(props);
    this.state = { newAddress: "", list: [] };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <StatusBar hidden={true} />
        <FormLabel>PLACEFINDER</FormLabel>
        <FormInput
          placeholder="Type address to pin"
          onChangeText={newAddress => this.setState({ newAddress: newAddress })}
          value={this.state.newAddress}
        />
        <Button
          raised
          icon={{ name: "save" }}
          title="SAVE"
          onPress={this.add}
        />
        <List>
          {this.state.list.map((l, i) => (
            <ListItem
              key={l.location}
              title={l.location}
              subtitle={l.title}
              rightTitle={"show on map"}
              onPress={() => navigate("Map", { listItem: this.state.list[i] })}
              switchThumbTintColor={"green"}
              switchOnTintColor={"black"}
              switchTintColor={"white"}
            />
          ))}
        </List>
        {/*<Button*/}
          {/*raised*/}
          {/*icon={{ name: "map" }}*/}
          {/*onPress={() => navigate("Map")}*/}
          {/*title="Map"*/}
        {/*/>*/}
      </View>
    );
  }

  add = () => {
    const url =
      "https://maps.googleapis.com/maps/api/geocode/json?address=" +
      this.state.newAddress +
      "?&key=AIzaSyBMwkVNlSU7MFCdNYmjEja_Dv30l7jVNuE";
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          list: [
            ...this.state.list,
            {
              location: this.state.newAddress,
              title: responseJson.results[0].formatted_address,
              latitude: responseJson.results[0].geometry.location.lat,
              longitude: responseJson.results[0].geometry.location.lng,
              latitudeDelta:
                responseJson.results[0].geometry.viewport.northeast.lat -
                responseJson.results[0].geometry.viewport.southwest.lat,
              longitudeDelta:
                responseJson.results[0].geometry.viewport.northeast.lng -
                responseJson.results[0].geometry.viewport.southwest.lng
            }
          ]
        });
      })
      .catch(error => {
        Alert.alert(error);
      });
  };
}
