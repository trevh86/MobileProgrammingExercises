import React from 'react';
import {StyleSheet, Button, Text, FlatList, TextInput, View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import History from './History';
import Home from './Home';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    container2: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    text: {
        color: '#fff'
    },
    textInput: {
        width: 200,
        borderColor: '#fff',
        borderWidth: 1,
        color: 'white',
    },
    buttons: {
        flex: 1,
        backgroundColor: '#000000',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: 0,
        padding: 0,
    },
    keyboard: {
        flex: 2,
    },
});

const MyApp = StackNavigator({
    Home: {screen: Home},
    History: {screen: History}
});

export default class App extends React.Component {
    render() {
        return (<MyApp/>);
    }
}

