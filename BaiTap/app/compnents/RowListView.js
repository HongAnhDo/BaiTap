import React, {Component} from 'react'
import {
    View, Text, Image, TouchableHighlight,
    TouchableOpacity
} from 'react-native'

import styleRow from '../styles/StyleRowListView'
export default class RowListView extends Component{

    constructor(props){
        super(props);

        imagProduct = require('../imgs/imgProduct.jpg');
        imageStar = require('../imgs/iconStarBlue.png');
        imageStarGray = require('../imgs/iconStarGray.png');

        this.state= {
            priceLarge : Math.floor(this.props.item.price),
            priceSmall : (this.props.item.price * 100 % 100 < 10 ? "0": "") + this.props.item.price * 100 % 100,
            numberStar: Math.round(this.props.item.star)
        }
        
    }



    render(){
        const {navigate} = this.props.This.props.navigation;
        return(
            <TouchableOpacity onPress= {() => navigate('Screen_Detail')} style = {styleRow.row}>
               <Image style = {styleRow.imgProduct} source = {{uri: this.props.item.image}}  resizeMode = 'cover'></Image>
               <View style = {styleRow.containerRight}>
                   <View style = {styleRow.containerRightTop}>
                        <Text style = {styleRow.titleProduct} ellipsizeMode='tail' numberOfLines={3}>{this.props.item.title}</Text>
                        <View style = {styleRow.priceProduct} > 
                            <Text style = {styleRow.textPriceSmall}>$</Text>
                            <Text style = {styleRow.textPriceLarge} >{this.state.priceLarge}</Text>
                            <Text style = {styleRow.textPriceSmall}>{this.state.priceSmall}</Text>
                        </View>
                   </View>

                    <View style = {styleRow.containerRightBottom}>
                        <View style = {styleRow.containerEvaluate}>
                            {this._renderStar(this.state.numberStar, 1)}
                            {this._renderStar(this.state.numberStar, 2)}
                            {this._renderStar(this.state.numberStar, 3)}
                            {this._renderStar(this.state.numberStar, 4)}
                            {this._renderStar(this.state.numberStar, 5)}
                            
                            <Text style = {styleRow.numberEvaluate}>({this.props.item.numberEvaluate})</Text>
                        </View>

                        <View style = {styleRow.containerAddress}>
                            <View style = {styleRow.containerStrore}>
                                <Text style = {styleRow.textStore}>In {this.props.item.store} </Text>
                                <Text  style = {styleRow.textProduce}>In {this.props.item.produce}</Text>
                            </View>
                            <TouchableHighlight style = {styleRow.containerType}>
                                <Text style = {styleRow.textType}>{this.props.item.type}</Text>
                            </TouchableHighlight>
                        </View>

                        <View style = {styleRow.containerAddress}>

                        </View>
                    </View>
               </View>
            </TouchableOpacity>
        )

    };

    _renderStar(a, b){
        if(a >= b)
            return(<Image style = {styleRow.iconStar} source = {imageStar} resizeMode = 'cover'></Image>);
        
        return (<Image style = {styleRow.iconStar} source = {imageStarGray} resizeMode = 'cover'></Image>);
    }
}