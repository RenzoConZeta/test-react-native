import React from 'react';
import {
    AsyncStorage,
    StyleSheet,
    View,
    Text,
    Button,
} from 'react-native';

import {
    MKColor,
    MKTextField,
} from 'react-native-material-kit';

class SignInScreen extends React.Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#ff0',
        },
    };

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.welcome}>Ingresar a RealtyGroup</Text>
                <MKTextField
                    tintColor={MKColor.Teal}
                    placeholder="Correo electronico"
                    style={styles.textfield}
                    />
                <MKTextField
                    tintColor={MKColor.Teal}
                    placeholder="Contraseña"
                    style={styles.textfield}
                    />
                <Button
                    color={MKColor.Teal}
                    onPress={this._signInAsync}
                    title="Ingresar"
                    />
            </View>
        );
    }

    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 30,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    }
});

export default SignInScreen;