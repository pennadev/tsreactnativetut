import * as React from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';

import Counter from "../Counter";
import LoginForm from "../LoginForm"
import HnFrontPage from "../HnFrontPage"
import HnItem from '../HnItem';
import { Route, Switch, Redirect } from 'react-router';
import { NativeRouter, BackButton } from 'react-router-native';

export default class MainPage extends React.Component<{}> {
    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <NativeRouter>
                <View style={styles.container}>
                    <BackButton />
                    <View style={styles.topBar} >
                        <Text style={styles.topBarText}> Hn Reader </Text>
                    </View>
                    
                    <Route exact path="/" component={HnFrontPage} />

                    <Route path="/items/:id" render={({ match }) => {
                        return <HnItem title={match.params.id} />
                    }} />
                </View>
            </NativeRouter>
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
        backgroundColor: 'cornflowerblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    topBarText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 20
    }
});
