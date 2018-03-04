import React from 'react';
import {StyleSheet, Text, View, TextInput, Button, FlatList, Alert, StatusBar, Image} from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {searchTerm: '', recipeList: []};
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <FlatList data={this.state.recipeList}
                          keyExtractor={item => item.href}
                          renderItem={({item}) =>
                              <View>
                                  <Text style={styles.text} >{item.title}</Text>
                                  <Image style={{width: 50, height: 50}} source={{uri: item.thumbnail}}/>
                              </View>
                          }
                          ItemSeperatorComponent={this.listSeparator}/>
                <Text style={styles.text}>Enter ingredient:</Text>
                <TextInput style={styles.textInput} placeholder=' Ingredient'
                           onChangeText={(searchTerm) => this.setState({searchTerm})}/>
                <Button title="SEARCH" onPress={this.search}/>
            </View>
        );
    }

    search = () => {
        const url = 'http://www.recipepuppy.com/api/?i=' + this.state.searchTerm;
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({recipeList: responseJson.results});
            })
            .catch((error) => {
                Alert.alert(error);
            })
    };

    listSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "80%",
                    backgroundColor: "#CED0CE",
                    marginLeft: "10%"
                }}
            />
        );
    };

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