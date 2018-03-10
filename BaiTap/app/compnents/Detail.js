import React, {Component} from 'react'

import{
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView
}from 'react-native'

import styleDetail from '../styles/StyleDetail'

export default class Detail extends Component{
    constructor(props){
        super(props);

        iconBack = require('../imgs/back.png');
    }

    render(){
        const item = this.props.navigation.state.params.pro;
        return(
            <View style = {{flex: 1}}>
                {this._renderToolbar(this)}

                <ScrollView >
                    <TouchableOpacity style = {styleDetail.imageProduce}>
                        <Image style = {styleDetail.imageProduce}source = {{uri:item.image}} resizeMode = 'contain'></Image>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }

    _renderToolbar(This){

        return(
            <View style={styleDetail.toolbarContainer} >
                <TouchableOpacity onPress={() => This.props.navigation.goBack()} >
                    <Image style={styleDetail.back} source={iconBack} resizeMode= 'contain'/>
                </TouchableOpacity>

                <Text style={styleDetail.title} >Detail</Text>
            </View>
        );
    }
}