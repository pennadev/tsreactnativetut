import * as React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Link } from 'react-router-native';
import store from '../../redux/store';
import { push } from 'react-router-redux';
import { Hit } from '../HnFrontPage';

interface ItemProps {
    hit: Hit
}

export default class HnItem extends React.Component<ItemProps, {}> {
    constructor(props: ItemProps) {
        super(props)
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>
                    {this.props.hit.title}
                </Text>
                <Text
                    adjustsFontSizeToFit
                    style={styles.subText}
                    numberOfLines={1}>
                    {this.props.hit.url}
                </Text>
                <Text style={styles.subText}>
                    <Text style={{ fontWeight: "bold" }}> {"Points: "} </Text>
                    {this.props.hit.points}
                </Text>
                <View style={styles.buttonsContainer}>
                    <Button title={this.props.hit.num_comments + " Comments"}
                        onPress={this.onPress.bind(this)} />
                    <Button title={"Article"} onPress={this.onPress.bind(this)} />
                </View>
            </View>
        )
    }
    
    onPress() {
        store.dispatch(push("/items/" + this.props.hit.objectID))
    }
}


const styles = StyleSheet.create({
    titleText: {
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 16,
        paddingLeft: 16,
        paddingRight: 16,
    },
    subText: {
        paddingLeft: 16
    },
    container: {
        margin: 8,
        backgroundColor: "blanchedalmond",
        borderRadius: 10,
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 8,
        marginBottom: 8,
        paddingBottom: 8,
        justifyContent: 'space-around',
        alignItems: 'flex-start'
    },
    button: {

    }
})
