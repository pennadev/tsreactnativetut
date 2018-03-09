import * as React from 'react'
import { View, ScrollView, ActivityIndicator, Text, StyleSheet, FlatList } from 'react-native';
import { Link, Route } from 'react-router-native'
import HnItem from "../HnItem"
import store, { RootState } from '../../redux/store';
import { hnActions } from '../../redux/HnItems/actions';
import { connect } from 'react-redux';

interface State {
    isLoading: Boolean;
    data: any;
}

interface Hits {
    title: string
    created_at_i: number
}

interface JSONResponse {
    hits: Hits[]
}

function mapStateToProps(state: RootState) {
    return {
        isLoading: state.hnState.isFetching,
        data: state.hnState.data
    }
}


class _HnFrontPage extends React.Component<{ isLoading: boolean; data: any; }> {
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
                    renderItem={this.renderListItem.bind(this)}
                    data={this.props.data.hits}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }

    renderListItem(item: any) {
        return (
            <Link to={"/items/" + item.item.created_at_i}>
                <View style={styles.scrollParent}>
                    <Text style={styles.textItem}>
                        {item.item.title}
                    </Text>
                </View>
            </Link>
        )
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

});

export default connect(mapStateToProps)(_HnFrontPage)