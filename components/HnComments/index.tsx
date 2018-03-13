import React from "react";
import { View, Text } from "react-native";

export default class HnComments extends React.Component {
    constructor(props: any) {
        super(props)
    }
    render() {
        return (
            <View>
                <Text> this.props.text </Text>
            </View>
        )
    }
}