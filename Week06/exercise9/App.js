import React from 'react';
import {StyleSheet, View, TextInput, Button, KeyboardAvoidingView} from 'react-native';
import {MapView} from 'expo';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: '',
            latitude: 60.200692,
            longitude: 24.934392,
            latitudeDelta: 0.0322,
            longitudeDelta: 0.0221,
            title: ''
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    style={{flex: 1}}
                    region={{
                        latitude: this.state.latitude,
                        longitude: this.state.longitude,
                        latitudeDelta: this.state.latitudeDelta,
                        longitudeDelta: this.state.longitudeDelta,
                    }}>
                    <MapView.Marker coordinate={{
                        latitude: this.state.latitude,
                        longitude: this.state.longitude,
                    }}
                                    title={this.state.title}/>
                </MapView>
                <KeyboardAvoidingView behavior="padding">
                    <TextInput
                        onChangeText={(location) => this.setState({location})}/>
                    <Button title="Search" onPress={this.search}/>
                </KeyboardAvoidingView>
            </View>
        );
    }

    search = () => {
        return null;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        color: '#fff',
    }
});
