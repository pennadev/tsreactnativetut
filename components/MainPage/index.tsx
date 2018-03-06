import * as React from 'react';
import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';

import Counter from "../Counter";
import LoginForm from "../LoginForm"
import HnFrontPage from "../HnFrontPage"

export default class MainPage extends React.Component<{}> {
    render() {
        return (
            <View style={styles.container}>
            <StatusBar
                backgroundColor="blue"
                barStyle="default"
            />

            <View style={styles.topBar} >
               <Text style={styles.topBarText}> Hn Reader </Text>
            </View>
            
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
        marginTop: StatusBar.currentHeight,
    },
    topBar: {
        width: '100%',
        height: 50,
        backgroundColor: '#12F',
        alignItems: 'center',
        justifyContent: 'center',
    },
    topBarText: {
        color: '#FFF'
    }
});
