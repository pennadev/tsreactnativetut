import React from "react";
import { View, Text } from "react-native";
import store from '../../redux/store';
import { hnActions } from '../../redux/HnItems/actions';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';
import { connect } from 'react-redux';


interface HnCommentsProps {

}

class HnComments extends React.Component<HnCommentsProps, {}> {
    constructor(props: any) {
        super(props)
    }

    componentDidMount() {
        store.dispatch(hnActions.fetchCommentsForStory(this.props.navigation.storyId))
    }
    
    render() {
        return (
            <View>
                <Text> {JSON.stringify(this.props.navigation)} </Text>
            </View>
        )
    }
}

export default withNavigation(connect()(HnComments))