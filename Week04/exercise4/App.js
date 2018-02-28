import React from 'react';
import {StyleSheet, Button, TextInput, FlatList, View, Text} from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: '', list: []}
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container}>
                    <TextInput style={styles.textInput} onChangeText={(text) => this.setState({text})}/>
                </View>
                <View style={styles.buttons}>
                    <Button title="ADD" onPress={this.Add}/>
                    <Button title="CLEAR" onPress={this.Clear}/>
                </View>
                    <View style={styles.container}>
                        <FlatList data={this.state.list}
                                  renderItem={({item}) => <Text style={styles.text}>{item.key}</Text>}/>
                    </View>
            </View>
        );
    }

    Add = () => {
        this.setState({list: [...this.state.list, {key: this.state.text}], text: ''})
    };

    Clear = () => {
        this.setState({list: []})
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
        height: 40,
        borderColor: '#fff',
        borderWidth: 1,
        color: 'white'
    },
    text: {
        color: 'white'
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
