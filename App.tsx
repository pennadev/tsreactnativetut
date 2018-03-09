import * as React from 'react';
import { View } from 'react-native';
import { NativeRouter, Route, Link, BackButton } from 'react-router-native'
import MainPage from "./components/MainPage";
import { Provider } from 'react-redux';
import store from './redux/store';
export default class App extends React.Component<{}> {
    render() {
        return (
            <Provider store={store}>
                <NativeRouter >
                    <BackButton >
                        <Route exact path="/" component={MainPage} />
                    </BackButton >
                </NativeRouter >
            </Provider>
        );
    }
}