import React from 'react';
import { Button, Text, View } from 'react-native';
import {
    MKColor,
} from 'react-native-material-kit';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';


class ClientsScreen extends React.Component {
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
                <Text>Settings!</Text>
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

class DetailsScreen extends React.Component {
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
                <Text>Details!</Text>
            </View>
        );
    }
}

const HomeStack = createStackNavigator({
    Home: { screen: HomeScreen },
    Details: { screen: DetailsScreen },
});

const SettingsStack = createStackNavigator({
    Settings: { screen: ClientsScreen },
    Details: { screen: DetailsScreen },
});

const DetailsStack = createStackNavigator({
    Settings: { screen: ClientsScreen },
    Details: { screen: DetailsScreen },
});

export default createAppContainer(createBottomTabNavigator(
    {
        Home: { screen: HomeStack },
        Clientes: { screen: SettingsStack },
        Perfil: { screen: DetailsStack },
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = 'md-home';
                } else if (routeName === 'Clientes') {
                    iconName = `md-people`;
                } else if (routeName === 'Perfil') {
                    iconName = `md-person`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: MKColor.Teal,
            inactiveTintColor: 'gray',
        },
    }
));

// import React from 'react';
// import {
//     AsyncStorage,
//     View,
//     Button,
// } from 'react-native';

// class HomeScreen extends React.Component {
//     static navigationOptions = {
//         title: 'Welcome to the app!',
//     };

//     render() {
//         return (
//             <View>
//                 <Button title="Show me more of the app" onPress={this._showMoreApp} />
//                 <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
//             </View>
//         );
//     }

//     // _showMoreApp = () => {
//     //     this.props.navigation.navigate('Other');
//     // };

//     _signOutAsync = async () => {
//         await AsyncStorage.clear();
//         this.props.navigation.navigate('Auth');
//     };
// }

// export default HomeScreen;
