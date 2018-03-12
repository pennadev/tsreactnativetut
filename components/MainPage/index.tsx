import * as React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, NetInfo, ConnectionInfo, ConnectionType } from 'react-native';

import Counter from "../Counter";
import LoginForm from "../LoginForm"
import HnFrontPage from "../HnFrontPage"
import HnItem from '../HnItem';
import { Route, Switch, Redirect, withRouter } from 'react-router';
import { NativeRouter, BackButton, MemoryRouter } from 'react-router-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import store, { RootState } from '../../redux/store';
import { HnState } from '../../redux/HnItems/reducers';
import Expo  from 'expo'
import { push } from 'react-router-redux';

  
export default class MainPage extends React.Component<{a: Boolean}> {
    constructor(props: any) {
        super(props)
    }
    componentDidMount() {
        NetInfo.isConnected.addEventListener(
            'connectionChange',
            (connectionInfo) => {
                console.log({connectionInfo: connectionInfo})
                // if(connectionInfo) {
                //     // store.dispatch(push("/"))
                // } else {
                //    store.dispatch(push("/offline"))
                // }
            }
        )
    }
    render() {
        return (
            <MemoryRouter >
                <View style={styles.container}>
                    <BackButton />
                    
                    <View style={styles.topBar}>
                        <Text style={styles.topBarText}> Hn Reader </Text>
                    </View>
                    <Route path="/offline" component={OfflineBar} />
                    <Route exact path="/" component={HnFrontPage} />
                    <Route path="/items/:id" render={({ match }) => {
                        return <HnItem hit={match.params.id} />
                    }} />
                </View>
            </MemoryRouter>
        );
    }
}

const OfflineBar: React.SFC<{}> = (props) => {
    return (
        <View style={styles.offlineBar}>
            <Text> OFFLINE </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#555',
        alignItems: 'center',
        marginTop: StatusBar.currentHeight,
        paddingBottom: 50,
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
    },
    offlineBar: {
        backgroundColor: "#F00",
        height: 50,
    }
});


