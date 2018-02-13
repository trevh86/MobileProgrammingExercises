import React from 'react';
import {StyleSheet, View, Button, Text, Alert, TextInput, Image} from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ''}
    }

    buttonPressed = () => {
        Alert.alert('You typed: ' + this.state.text, ""); // "" removes a warning by providing correct number of parameters
    };

    render() {
        return (
            <View style={styles.container}>
                <Image style={{width: 165, height: 140}}
                       source={require('./Crabs.jpg')}/>
                <TextInput style={{width: 200, borderColor: 'gray', borderWidth: 1}}
                           onChangeText={(text) => this.setState({text})}
                           value={this.state.text}/>
                <Button onPress={this.buttonPressed} title="Press me"/>
                <Text style={{ fontSize:18, color: 'red'}}>{this.state.text}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
