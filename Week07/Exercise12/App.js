import React from 'react';
import {StyleSheet, Button, TextInput, FlatList, View, Text, KeyboardAvoidingView, StatusBar} from 'react-native';
import {SQLite} from 'expo';

const db = SQLite.openDatabase('shoppinglist.db');

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {product: '', amount: '', list: []}
    }

    componentDidMount() {
        db.transaction(tx => {
            tx.executeSql('create table if not exists shoppingListTable (id integer primary key not null, products text, amounts text);');
        });
        this.updateList();
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <View style={styles.container}>
                    <Text style={styles.text}>Enter Shopping List Items:</Text>
                    <TextInput placeholder='Product' value={this.state.product} style={styles.textInput}
                               onChangeText={(product) => this.setState({product})}/>
                    <TextInput placeholder='Amount' keyboardType='phone-pad' value={this.state.amount}
                               style={styles.textInput}
                               onChangeText={(amount) => this.setState({amount})}/>
                </View>
                <KeyboardAvoidingView behavior="padding" style={styles.container}>
                    <Button title="ADD" onPress={this.add}/>
                    <Text style={styles.text}>Shopping List:</Text>
                    <FlatList data={this.state.list}
                              keyExtractor={item => item.id}
                              renderItem={({item}) =>
                                  <View style={styles.listContainer}>
                                      <Text style={styles.text}> {item.products}, {item.amounts}{'\n'}</Text>
                                      <Text style={{color: '#ff0000'}}
                                            onPress={() => this.deleteItem(item.id)}> Delete{'\n'}</Text>
                                  </View>
                              }
                    ItemSeparatorComponent={this.listSeparator}
                    />
                </KeyboardAvoidingView>
            </View>
        );
    }

    listSeparator = () => {
        return (
            <View
                style={{
                    height: 2,
                    width: "100%",
                    backgroundColor: "#fff",
                    marginLeft: "10%"
                }}
            />
        );
    };

    add = () => {
        db.transaction(tx => {
            tx.executeSql('INSERT INTO shoppingListTable (products, amounts) VALUES (?, ?)',
                [this.state.product, this.state.amount]);
        }, null, this.updateList)
    };

    updateList = () => {
        db.transaction(tx => {
            tx.executeSql('SELECT * FROM shoppingListTable', [], (_, {rows}) =>
                this.setState({list: rows._array})
            );
        });
    };

    deleteItem = (id) => {
        db.transaction(
            tx => {
                tx.executeSql(`DELETE FROM shoppingListTable WHERE id = ?;`, [id]);
            }, null, this.updateList
        )
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
    },
    listContainer: {
        flexDirection: 'row',
        backgroundColor: '#000',
        alignItems: 'center'
    }
});
