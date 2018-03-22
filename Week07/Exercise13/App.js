import React from 'react';
import {StyleSheet, View, KeyboardAvoidingView, StatusBar} from 'react-native';
import {SQLite} from 'expo';
import {FormLabel, FormInput, Button, List, ListItem, Header} from 'react-native-elements'

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
                <Header
                    centerComponent={{ text: 'Shopping List', style: { color: '#fff' } }}
                />
                <View style={styles.container}>
                    <FormLabel>PRODUCT</FormLabel>
                    <FormInput placeholder='Product' value={this.state.product} style={styles.textInput}
                               onChangeText={(product) => this.setState({product})}/>
                    <FormLabel>AMOUNT</FormLabel>
                    <FormInput placeholder='Amount' keyboardType='phone-pad' value={this.state.amount}
                               style={styles.textInput}
                               onChangeText={(amount) => this.setState({amount})}/>
                </View>
                <KeyboardAvoidingView behavior="padding" style={{width: '100%'}}>
                    <Button raised icon={{name: 'add'}} title="ADD" onPress={this.add}/>
                    <FormLabel style={styles.text}>Shopping List:</FormLabel>
                    <List>
                        {this.state.list.map((l) => (
                            <ListItem
                                key={l.id}
                                title={l.products}
                                subtitle={l.amounts}
                                rightTitle={"Delete"}
                                onPress={() => this.deleteItem(l.id)}
                                switchThumbTintColor={"green"}
                                switchOnTintColor={"black"}
                                switchTintColor={"white"}
                            />
                        ))
                        }
                    </List>
                </KeyboardAvoidingView>
            </View>
        );
    }

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
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        width: 200,
        height: 40,
        borderColor: '#000',
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
        backgroundColor: '#fff',
        alignItems: 'center'
    }
});
