import * as React from 'react';
import { View } from 'react-native';
import MainPage from "./components/MainPage";
import HnComments from "./components/HnComments"
import { Provider } from 'react-redux';
import store from './redux/store';
import { StackNavigator } from 'react-navigation'



export default class App extends React.Component<{}> {
    render() {
        return (
            <Provider store={store}>
                <RootStack />
            </Provider>
        );
    }
}

const RootStack = StackNavigator(
    {
        Home: {
            screen: MainPage
        },
        HnComments: {
            screen: HnComments
        },
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            title: "HnReader",
            headerStyle: {
                backgroundColor: 'cornflowerblue',
            },
            headerTintColor: '#FFF',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    }
);