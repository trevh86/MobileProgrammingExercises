import React from 'react';
import {StyleSheet, Button, Text, TextInput, View} from 'react-native';

const styles = StyleSheet.create({
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

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {number1: 0, number2: 0, answer: 0}
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container2}>
                    <TextInput style={styles.textInput} keyboardType={"phone-pad"}
                               onChangeText={(number1) => this.setState({number1})}/>
                    <TextInput style={styles.textInput} keyboardType={"phone-pad"}
                               onChangeText={(number2) => this.setState({number2})}/>
                </View>
                <View style={styles.buttons}>
                    <Button onPress={this.addition} title="+"/>
                    <Button onPress={this.subtraction} title="-"/>
                    <Button onPress={this.multiplication} title="*"/>
                    <Button onPress={this.division} title="/"/>
                </View>
                <View style={styles.keyboard}>
                    <Text style={{color: '#FFF'}}>{this.state.answer}</Text>
                </View>
            </View>
        );
    }

    addition = () => {
        this.setState(() => {
            return {answer: parseInt(this.state.number1) + parseInt(this.state.number2)}
        })
    };
    // addition = () => {
    //     this.setState((prevState) => {
    //         return {answer: parseInt(prevState.number1) + parseInt(prevState.number2)}
    //     });
    // };

    subtraction = () => {
        this.setState(() => {
            return {answer: parseInt(this.state.number1) - parseInt(this.state.number2)}
        })
    };

    multiplication = () => {
        this.setState(() => {
            return {answer: parseInt(this.state.number1) * parseInt(this.state.number2)}
        })
    };

    division = () => {
        this.setState(() => {
            return {answer: parseInt(this.state.number1) / parseInt(this.state.number2)}
        })
    };
}


