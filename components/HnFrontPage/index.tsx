import * as React from 'react'
import { View, ScrollView, ActivityIndicator, Text, StyleSheet, FlatList } from 'react-native';
import HnItem from "../HnItem"
import store, { RootState } from '../../redux/store';
import { hnActions } from '../../redux/HnItems/actions';
import { connect } from 'react-redux';
import { HnState } from '../../redux/HnItems/reducers';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';

export interface HnProps {
    isLoading: Boolean;
    data: any;
} 

type HnPropType = HnProps | NavigationInjectedProps 

export interface Title {
    value: string;
    matchLevel: string;
    matchedWords: any[];
}

export interface Url {
    value: string;
    matchLevel: string;
    matchedWords: any[];
}

export interface Author {
    value: string;
    matchLevel: string;
    matchedWords: any[];
}

export interface HighlightResult {
    title: Title;
    url: Url;
    author: Author;
}


export interface Hit {
    created_at: Date;
    title: string;
    url: string;
    author: string;
    points: number;
    story_text?: any;
    comment_text?: any;
    num_comments: number;
    story_id?: any;
    story_title?: any;
    story_url?: any;
    parent_id?: any;
    created_at_i: number;
    objectID: string;
}

export interface JSONResponse {
    hits: Hit[]
}

function mapStateToProps(state: RootState): HnProps {
    return {
        isLoading: state.hnState.isFetching,
        data: state.hnState.data
    }
}


class _HnFrontPage extends React.Component<HnProps, {}> {
    constructor(props: any) {
        super(props);
        this.state = {
            isLoading: true,
            data: {} as JSONResponse
        }
    }
    
    componentDidMount() {
        store.subscribe(() => {
            console.log(store.getState())
        })

        store.dispatch(hnActions.fetchFrontPage())
    }

    render() {
        if (this.props.isLoading) {
            return (
                <View style={styles.loadingView}>
                    <ActivityIndicator size="large" color="#0055FF" />
                </View>
            )
        }

        return (
            <View>
                <FlatList
                    style={styles.list}
                    renderItem={this.renderListItem.bind(this)}
                    data={this.props.data.hits}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }

    renderListItem(item: any) {
        return (
            <HnItem
                hit={item.item}
                onCommentClick={this.onCommentClick.bind(this)}
            />
        )
    }

    onCommentClick() {
        this.props.navigation.navigate('HnComments')
    }
}

const styles = StyleSheet.create({
    textItem: {
        padding: 10,
        color: '#FFF',
    },
    scrollParent: {
        flexDirection: 'row'
    },
    loadingView: {
        flex: 1,
        justifyContent: 'center'
    },
    list: {

    }
});

export default withNavigation(connect<{}, {}, {}>(mapStateToProps)(_HnFrontPage))