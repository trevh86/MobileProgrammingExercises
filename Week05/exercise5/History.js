import React from 'react';
import {Text, FlatList, View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {styles} from "./App";

export default class History extends React.Component {
    static navigationOptions = {title: 'History',};
    constructor(props) {
        super(props);
        this.state = {number1: 0, number2: 0, answer: 0, history: [], count: 0}
    }

    render() {
        const { params } = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <View style={styles.keyboard}>
                    <Text style={styles.text}>History:</Text>
                    <FlatList data={params.history}
                              renderItem={({item}) => <Text style={styles.text}>
                                  {item.number1} {item.sign} {item.number2} = {item.answer}
                              </Text>}/>
                </View>
            </View>
        );
    }
}

