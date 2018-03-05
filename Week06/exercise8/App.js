import React from 'react';
import {StyleSheet, Text, View, TextInput, Button, Picker, Alert} from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {input: 0, data: {}, currencySelected: '', convertedAmount: 0};
    }

    componentDidMount = () => {
        const url = 'https://api.fixer.io/latest';
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({data: responseJson.rates, currencySelected: Object.keys(responseJson.rates)[0]});
            })
            .catch((error) => {
                Alert.alert(error);
            })
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.state.convertedAmount}</Text>
                <View>
                    <TextInput style={styles.textInput}
                               keyboardType='phone-pad'
                               onChangeText={(input) => this.setState({input})}/>
                    <Picker
                        mode='dropdown'
                        style={styles.picker}
                        selectedValue={this.state.currencySelected}
                        onValueChange={(itemValue, itemIndex) => {
                            this.setState({currencySelected: itemValue});
                        }}>
                        {this.pickerItems()}
                    </Picker>
                </View>
                <Button title="CONVERT" onPress={this.convert}/>
            </View>
        );
    }

    convert = () => {
        const inputNumber = this.state.input;
        const currentRate = this.state.data[this.state.currencySelected]
        const answer = inputNumber * currentRate;
        this.setState({convertedAmount: answer});
    };

    pickerItems = () => {
        let storeData = [];
        for (let currencyType in this.state.data) {
            let pickerItem = <Picker.Item label={currencyType} value={currencyType} key={currencyType}/>
            storeData.push(pickerItem);
        }
        return storeData;
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
        width: 50,
        borderColor: '#fff',
        borderWidth: 1,
        color: 'white',
    },
    text: {
        color: '#fff'
    },
    picker: {
        width: 50,
        backgroundColor: '#000',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#fff',
        color: '#fff'
    },
});