import * as React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, NetInfo, ConnectionInfo, ConnectionType } from 'react-native';

import Counter from "../Counter";
import LoginForm from "../LoginForm"
import HnFrontPage from "../HnFrontPage"
import HnItem from '../HnItem';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import store, { RootState } from '../../redux/store';
import { HnState } from '../../redux/HnItems/reducers';
import Expo from 'expo'


export default class MainPage extends React.Component<{}> {
    constructor(props: any) {
        super(props)
    }
    componentDidMount() {
        NetInfo.isConnected.addEventListener(
            'connectionChange',
            (connectionInfo) => {
                console.log({ connectionInfo: connectionInfo })
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
            <View style={styles.container}>
                <HnFrontPage />
            </View>
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


