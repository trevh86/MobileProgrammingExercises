import React from 'react';
import {StyleSheet, Text, TextInput, Alert, View, Button} from 'react-native';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {text: "Guess a number between 1-100", guesses: 0, number: 0, answer: 0, lowHigh: ""}
    }

    componentDidMount() {
        this.randomNumber();
    };

    // THIS Notation wouldn't work correctly. Used If, else instead.
    // HighOrLow = () => {
    //     parseInt(this.state.answer) > this.state.number
    //         ? this.setState({lowHigh: "too high"})
    //         : this.setState({lowHigh: "too low"})
    // };

    // guess = () => {
    //     parseInt(this.state.answer) === this.state.number
    //         ? (
    //             this.setState({text: "Correct!"})
    //         ) : (
    //             this.HighOrLow(),
    //             this.setState({text: "Your guess " + this.state.answer + " is " + this.state.lowHigh})
    //         );
    //     this.setState((prevState) => {
    //         return {guesses: prevState.guesses + 1}
    //     })
    // };


    // TODO: state of guesses is misrepresented as 1 less than the current state in the alert.
    guess = () => {
        this.setState((prevState) => {
            return {guesses: prevState.guesses + 1}
        });
        if (parseInt(this.state.answer) === this.state.number) {
            this.setState({text: "Correct"});
            Alert.alert(`You guessed the number in ${this.state.guesses +1} guesses`, "")
        } else if (parseInt(this.state.answer) > this.state.number) {
            this.setState({text: `Your guess ${this.state.answer} is too high`})
        } else if (parseInt(this.state.answer) < this.state.number) {
            this.setState({text: `Your guess ${this.state.answer} is too low`})
        } else {
            this.setState({text: "Invalid guess"})
        }
    };

    randomNumber = () => {
        this.setState(() => {
            return {number: Math.floor(Math.random() * 100 + 1)}
        })
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.state.text}</Text>
                <Button title="MAKE GUESS" onPress={this.guess}/>
                <TextInput style={styles.textInput} keyboardType={"phone-pad"}
                           onChangeText={(answer) => this.setState({answer})}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        width: 200,
        borderColor: '#fff',
        borderWidth: 1,
        color: 'white',
    },
    text: {
        color: '#fff'
    },
});
