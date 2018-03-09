import * as React from "react";
import { View, Text } from "react-native";

interface ItemProps {
    title: string
}

export default class HnItem extends React.Component<ItemProps, {}> {
    constructor(props: any) {
        super(props)
    }
    
    render() {
        return (
            <Text style={{ padding: 20 }}>
                {this.props.title}
            </Text>
        )
    }
}
