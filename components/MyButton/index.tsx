import * as React from 'react';
import {Button, Text, View, StyleSheet} from "react-native";


interface MyProps {
    name: string,
};

interface State {
    counter: number,
};

export default class Counter extends React.Component<MyProps, State> {
    constructor(props: MyProps) {
        super(props)
        this.state = {counter: 0}
    }

    render() {
        return (
            <View>
                <Text style={counterstyles.text}> Pressed {this.state.counter} times </Text>
                <Button title={this.props.name} onPress={this.onButtonClick.bind(this)}/>
            </View>
        )
    }

    onButtonClick() {
        this.setState((prevState: State) => {
            return {counter: prevState.counter + 1}
        });
    }
}


const counterstyles = StyleSheet.create({
    text: {
        
        color: '#FFF'
    }
})