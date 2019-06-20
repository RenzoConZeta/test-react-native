import React from 'react';
import { Button, Text, View } from 'react-native';
import {
    MKColor,
} from 'react-native-material-kit';


class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Evaluador',
        headerStyle: {
            backgroundColor: MKColor.Teal,
        },
        headerTintColor: '#fff',
    };
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home!</Text>
                <Button
                    title="Deslogueo"
                    onPress={() => this.props.navigation.navigate('Auth')}
                />
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

export default HomeScreen;