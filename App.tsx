import * as React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Counter from "./components/Counter";
import LoginForm from "./components/LoginForm"
import HnFrontPage from "./components/HnFrontPage"
export default class App extends React.Component<{}> {
    render() {
        return (
            <View style={styles.container}>

            <HnFrontPage />
       
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#555',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
