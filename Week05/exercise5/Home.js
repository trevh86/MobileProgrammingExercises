import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {styles} from "./App";

export default class Home extends React.Component {
    static navigationOptions = {title: 'Home',};

    constructor(props) {
        super(props);
        this.state = {number1: 0, number2: 0, answer: 0, history: [], count: 0}
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.container2}>
                    <Text style={styles.text}>Answer:</Text>
                    <Text style={styles.text}>{this.state.answer}</Text>
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
                    <Button onPress={() => navigate('History', {history: this.state.history})} title='History'/>
                </View>
                <View style={styles.keyboard}>
                </View>
            </View>
        );
    }

    objectify = (x, y) => {
        this.setState(() => {
            return {
                history: [...this.state.history, {
                    key: this.state.count,
                    number1: this.state.number1,
                    number2: this.state.number2,
                    answer: y,
                    count: this.state.count,
                    sign: x
                }],
                count: this.state.count + 1
            }
        })
    };

    addition = () => {
        const plusAnswer = parseInt(this.state.number1) + parseInt(this.state.number2);
        this.setState(() => {
            return {answer: plusAnswer}
        });
        const plus = '+';
        this.objectify(plus, plusAnswer)
    };

    subtraction = () => {
        const minusAnswer = parseInt(this.state.number1) - parseInt(this.state.number2);
        this.setState(() => {
            return {answer: minusAnswer}
        });
        const dash = '-';
        this.objectify(dash, minusAnswer)
    };

    multiplication = () => {
        const multiplyAnswer = parseInt(this.state.number1) * parseInt(this.state.number2);
        this.setState(() => {
            return {answer: multiplyAnswer}
        });
        const star = '*';
        this.objectify(star, multiplyAnswer)
    };

    division = () => {
        const divideAnswer = parseInt(this.state.number1) / parseInt(this.state.number2);
        this.setState(() => {
            return {answer: divideAnswer}
        });
        const slash = '/';
        this.objectify(slash, divideAnswer)
    };
}

