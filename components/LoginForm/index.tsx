import * as React from "react";
import { View, TextInput } from "react-native";

interface LoginState {
    user: string,
    pass: string,
}

export default class LoginForm extends React.Component<{}, LoginState> {
    render() {
        return (
            <View style={{ padding: 10 }}>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Username"
                    onChangeText={(text) => this.setState({ user: text })} />
                
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Pass"
                    onChangeText={(text) => this.setState({ pass: text })} />
            </View>
        )
    }
}

