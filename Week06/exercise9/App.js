import React from 'react';
import {StyleSheet, View, TextInput, Button, KeyboardAvoidingView, Alert} from 'react-native';
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
            title: 'Haaga-Helia'
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
        const url = 'AIzaSyAwlxcyyOz3ZJWv1JJQ5g7YFOkWH9sTBoQ'
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({})
            })
            .catch((error) => {
                Alert.alert(error);
            })
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
