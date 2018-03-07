import * as React from 'react';
import {View} from 'react-native';
import {NativeRouter, Route, Link, BackButton} from 'react-router-native'
import MainPage from "./components/MainPage";

export default class App extends React.Component < {} > {
    render() {
        return (
            <NativeRouter >
                <BackButton >
                    <Route exact path="/" component={MainPage}/>
                </BackButton >
            </NativeRouter >
        );
    }
}