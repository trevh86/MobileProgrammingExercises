import React from 'react';
import {StyleSheet, Button, Text, FlatList, TextInput, View} from 'react-native';

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
        this.state = {number1: 0, number2: 0, answer: 0, history: [], count: 0}
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container2}>

                    <Text style={{color: '#FFF'}}>{this.state.answer}</Text>
                    <TextInput style={styles.textInput} keyboardType={"phone-pad"}
                               onChangeText={(number1) => this.setState({number1})}/>
                    <TextInput style={styles.textInput} keyboardType={"phone-pad"}
                               onChangeText={(number2) => this.setState({number2})}/>
                </View>
                <View style={styles.buttons}>
                    <Button onPress={this.addition} title="+" name="+"/>
                    <Button onPress={this.subtraction} title="-"/>
                    <Button onPress={this.multiplication} title="*"/>
                    <Button onPress={this.division} title="/"/>
                </View>
                <View style={styles.keyboard}>
                    <FlatList data={this.state.history}
                              renderItem={({item}) => <Text style={styles.text}>
                                  {item.number1} {item.sign} {item.number2} = {item.answer}
                              </Text>}/>
                </View>
            </View>// TODO: FlatList is not set up correctly. Don't need text prop?
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


