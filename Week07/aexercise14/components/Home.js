import React, {Component} from 'react';
import {Button, Text, View} from "react-native";
import {styles} from "../App";
import {StackNavigator} from 'react-navigation';

export default class Home extends Component {
    static navigationOptions = {title: 'Home'};

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>
                    <Button onPress={() => navigate('Map')} title='Map'/>
                </Text>
            </View>
        );
    }
}