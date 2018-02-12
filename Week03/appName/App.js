import React from 'react';
import {StyleSheet, Text, View, Button, Alert, TextInput, Image} from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ''}
    }

    buttonPressed = () => {
        Alert.alert('You typed: ' + this.state.text);
    };

    render() {
        return (
            <View style={styles.container}>
                <Image style={{width:235, height:200}}
                source={require('./Crabs.jpg')}/>
                <TextInput style={{width: 200, borderColor: 'gray', borderWidth: 1}}
                           onChangeText={(text) => this.setState({text})}
                           value={this.state.text}/>
                <Button onPress={this.buttonPressed} title="Press me"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
