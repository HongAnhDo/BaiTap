import React, {Component} from 'react'

import{
    View,
    Image
}from 'react-native'


export default class Detail extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <Text onPress = {() => this.props.navigation.goBack()}>Hello</Text>
            </View>
        );
    }
}