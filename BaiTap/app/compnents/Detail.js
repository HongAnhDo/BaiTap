import React, {Component} from 'react'

import{
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView
}from 'react-native'

import styleDetail from '../styles/StyleDetail'
import styleRow from '../styles/StyleRowListView'

export default class Detail extends Component{
    constructor(props){
        super(props);

        iconBack = require('../imgs/back.png');
        imageStar = require('../imgs/iconStarBlue.png');
        imageStarGray = require('../imgs/iconStarGray.png');

    }

    render(){
        const item = this.props.navigation.state.params.pro;
        return(
            <View style = {{flex: 1}}>
                {this._renderToolbar(this)}
                <View style = {{backgroundColor:'white',flex: 1, justifyContent:'center'}}>
                <ScrollView >
                    <TouchableOpacity style = {styleDetail.imageProduce}>
                        <Image style = {styleDetail.imageProduce}source = {{uri:item.image}} resizeMode = 'contain'></Image>
                    </TouchableOpacity>


                    <View style = {{justifyContent:'center', marginRight: 10, marginLeft: 10}}>
                        <Text style = {{fontSize:20,color: 'black'}}>{item.title}</Text>
                        <Text style = {{fontSize: 16, fontWeight: 'bold', color: '#f08b11' }}>{item.price}$</Text>

                        <View style = {styleDetail.containerEvaluate}>
                                {this._renderStar(item.star, 1)}
                                {this._renderStar(item.star, 2)}
                                {this._renderStar(item.star, 3)}
                                {this._renderStar(item.star, 4)}
                                {this._renderStar(item.star, 5)}
                                
                                <Text style = {styleDetail.numberEvaluate}>({item.numberEvaluate})</Text>
                        </View>
                    </View>
             
                </ScrollView>
               
                </View>
            </View>
        );
    }

    _renderStar(a, b){
        if(a >= b)
            return(<Image style = {styleDetail.iconStar} source = {imageStar} resizeMode = 'cover'></Image>);
        
        return (<Image style = {styleDetail.iconStar} source = {imageStarGray} resizeMode = 'cover'></Image>);
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