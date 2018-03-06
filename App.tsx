import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Counter from "./components/MyButton";

export default class App extends React.Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <Counter name="sal"/>
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
