import React from 'react';
import {StyleSheet, Text, TextInput, Alert, View, Button, AsyncStorage} from 'react-native';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {text: "Guess a number between 1-100", guesses: 0, number: 0, answer: 0, highScore: 0}
    }

    componentDidMount() {
        this.randomNumber();
        this.getHighScore();
    };

    async addHighScore() {
        this.setState({highScore: this.state.guesses + 1});
        const hScore = this.state.highScore;
        try {
            await AsyncStorage.setItem('highScore', JSON.stringify(hScore));
        } catch (error) {
            Alert.alert('Error saving data', '');
        }
    }

    async getHighScore() {
        try {
            let oldHighScore = await AsyncStorage.getItem('highScore');
            this.setState({highScore: oldHighScore});
        } catch (error) {
            Alert.alert('Error reading data', '');
        }
    }

    guess = () => {
        this.setState((prevState) => {
            return {guesses: prevState.guesses + 1}
        });
        if (parseInt(this.state.answer) === this.state.number) {
            this.setState({text: "Correct"});
            Alert.alert(`You guessed the number in ${this.state.guesses + 1} guesses`, "");
            this.addHighScore();
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

    newGame = () => {
        this.setState({text: "Guess a number between 1-100", guesses: 0, number: 0, answer: 0, highScore: 0})
        this.randomNumber();
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.state.text}</Text>
                <Button title="MAKE GUESS" onPress={this.guess}/>
                <TextInput style={styles.textInput} keyboardType={"phone-pad"}
                           onChangeText={(answer) => this.setState({answer})}/>
                <Text style={styles.text}>High Score: {this.state.highScore} guesses</Text>
                <Button title='NEW GAME' onPress={this.newGame}/>
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
