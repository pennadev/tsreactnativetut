import * as React from 'react'
import { View, ScrollView, ActivityIndicator, Text, StyleSheet } from 'react-native';
import {Link } from 'react-router-native'
interface State {
    isLoading: Boolean;
    data: JSONResponse;
}

interface Hits {
    title: string
}

interface JSONResponse {
    hits: Hits[]
}

export default class HnFrontPage extends React.Component<{}, State> {

    constructor(props: any){
        super(props)
        this.state = {
            isLoading: true,
            data: {} as JSONResponse
        }
    }

    componentDidMount(){
        return fetch("https://hn.algolia.com/api/v1/search?tags=front_page")
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState((previousState) => {
            console.log(responseJson)
            return { 
                isLoading: false,
                data: responseJson,  
            }});
        })
        .catch((error) => {
            console.error(error);
        })
    }
    
    render() {
        if (this.state.isLoading) {
            return (
                <ActivityIndicator size="large" color="#0055FF"/>
            )
        }

        return (
            <View> 
                <ScrollView style={styles.scrollParent}>
                    {this.renderItems(this.state.data)}
                </ScrollView>
            </View>
        )
    }

    renderItems(items: JSONResponse) {
        return items.hits.map((item, i) => {
            console.log("title " + item.title);
            return(
            <Link to="/item" key={i}>
                <Text
                     key={i} style={styles.text}> {item.title} 
                </Text>
            </Link>)
        })
    }
}

const styles = StyleSheet.create({
    text: {
        padding: 10,
        color: '#FFF'
    },

    scrollParent: {
        marginTop: 20 
    }
})