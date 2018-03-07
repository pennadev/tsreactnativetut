import * as React from 'react'
import { View, ScrollView, ActivityIndicator, Text, StyleSheet, FlatList } from 'react-native';
import { Link, Route } from 'react-router-native'
import HnItem from "../HnItem"

interface State {
    isLoading: Boolean;
    data: JSONResponse;
}

interface Hits {
    title: string
    created_at_i: number
}

interface JSONResponse {
    hits: Hits[]
}

export default class HnFrontPage extends React.Component<{}, State> {

    constructor(props: any) {
        super(props)
        this.state = {
            isLoading: true,
            data: {} as JSONResponse
        }
    }

    componentDidMount() {
        return fetch("https://hn.algolia.com/api/v1/search?tags=front_page")
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState((previousState) => {
                    console.log(responseJson)
                    return { isLoading: false, data: responseJson }
                });
            }).catch((error) => {
                console.error(error);
            })
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loadingView}>
                    <ActivityIndicator size="large" color="#0055FF" />
                </View>
            )
        }

        return (
            <View>
                <FlatList
                    renderItem={(item: any) => {
                        return (
                            <Link to={"/items/" + item.item.created_at_i} >
                                <View style={styles.scrollParent}>
                                    <Text  style={styles.textItem}>
                                        {item.item.title}
                                    </Text>
                                </View>
                            </Link>
                        )
                    }}
                    data={this.state.data.hits}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }

    // renderItems(items: Hits) {
    //     return items
    //         .hits
    //         .map((item, i) => {
    //             console.log("title " + item.title);
    //             return (

    //             )
    //         })
    // }
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

})