import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import AuthLoadingScreen from './screens/AuthLoadingScreen';
import MainScreen from './screens/MainScreen';
import SignInScreen from './screens/SignInScreen';

// const AppStack = createStackNavigator({ Home: MainScreen });
// const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: MainScreen,
        Auth: SignInScreen,
    },
    {
        initialRouteName: 'AuthLoading',
    }
));


