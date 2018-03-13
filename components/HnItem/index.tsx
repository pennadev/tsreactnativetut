import * as React from "react";
import { View, Text, StyleSheet, Button, Linking } from "react-native";
import store from '../../redux/store';
import { Hit } from '../HnFrontPage';

interface ItemProps {
    hit: Hit,
    onCommentClick: () => {}
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
                    style={styles.subText}
                    onPress={() => { Linking.openURL(this.props.hit.url) }}>
                    {this.props.hit.url}
                </Text>
                <Text style={styles.subText}>
                    <Text style={{ fontWeight: "bold" }}>Points: </Text>
                    <Text>{this.props.hit.points}</Text>
                </Text>
                <View style={styles.buttonsContainer}>
                    <Button title={this.props.hit.num_comments + " Comments"}
                        onPress={this.props.onCommentClick} />
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    titleText: {
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
        paddingTop: 16,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16,
    },
    subText: {
        marginLeft: 16
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
        marginLeft: 16,
        alignItems: 'flex-start'
    },
    button: {

    }
})

