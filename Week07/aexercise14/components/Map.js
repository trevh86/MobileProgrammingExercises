import React, {Component} from 'react';
import {Button, Text, View} from "react-native";
import {styles} from "../App";
import {StackNavigator} from 'react-navigation';

export default class Map extends Component {
    static navigationOptions = {title: 'Map'};

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>
                </Text>
            </View>
        );
    }
}