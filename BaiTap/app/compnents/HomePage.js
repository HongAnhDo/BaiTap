import React, {Component} from 'react'
import {
    View, Text, StatusBar, TextInput, Image, 
    ListView, ActivityIndicator, ScrollView,
    StyleSheet, Platform, Dimensions,
    TouchableOpacity, TouchableHighlight
} from 'react-native'
import styleMain from '../styles/StylesMain'
import RowListView from './RowListView'

const windowWidth = Dimensions.get('window').width;
const flatListData = JSON.parse(JSON.stringify(require('../data/data.json')));
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

export default class HomePage extends Component{
    
    constructor(props){
        super(props);

        iconBack = require('../imgs/iconBack.png');
        iconSearch = require('../imgs/iconSearch.png');
        iconClose = require('../imgs/iconClose.png');
        iconNext =  require('../imgs/iconNext.png');
        iconCameraSearch =  require('../imgs/iconCameraSearch.png');

        this.state={
            dataSource: ds.cloneWithRows(flatListData)
        }
        
    }


    render(){
        const {navigate} = this.props.navigation;
        return(
            
            <View style = {styleMain.container}>
                {Platform.OS === 'ios' && <View style={styleMain.statusBar} />}
                <StatusBar backgroundColor = '#027fc7' animated = {true}/>

                <View style = {styleMain.containerHead}>

                    {this._renderToolbar()}

                    {this._renderSearch()}

                    {this._renderTab()}

                </View>

                <View style = {styleMain.containerBody}>
                    <View style = {styleMain.containerMiddle}> 
                        <Image style = {styleMain.imgContainerMiddle} source = {iconCameraSearch} resizeMode = 'contain'></Image>
                        <Text style = {styleMain.textContainerMiddle}>4200 SE 82nd Ave,Portland</Text>
                        <Image style = {styleMain.imgContainerMiddle} source = {iconNext} resizeMode = 'contain'></Image>
                    </View>

                    <View style = {styleMain.line}></View>
                    <ScrollView>
                        <ListView 
                            dataSource={this.state.dataSource}
                            renderRow={item=> <RowListView  item= {item} This = {this}/>}>         
                        </ListView>
                    </ScrollView>
                           
                </View> 
            </View>
        );
    }

    _clearTextSearch(){
        this.textInput.clear();
    }

    _renderRow(){
        <RowListView
            key={item.id}
        />
    }

    _renderToolbar(){
        return(
            <View style={styleMain.toolbarContainer} >
                <TouchableOpacity onPress={this.onPress} >
                    <Image style={styleMain.backImg} source={iconBack} resizeMode= 'contain'/>
                </TouchableOpacity>

                <Text style={styleMain.titleLeft} >Shop</Text>

                <Text style = {styleMain.titleLarge}> Search Results</Text>
            </View>
        );
    }

    _renderSearch(){
        return(
            <View style = {styleMain.searchContainer}>
                <Image style = {styleMain.icon} source = {iconSearch} resizeMode= 'contain'/> 
                        
                {Platform.OS === 'ios' && <TextInput  ref = {input => { this.textInput = input }} 
                style = {styleMain.textInputSearch}>Hong anh do</TextInput>}
                
                {Platform.OS === 'android' && <TextInput ref = {input => { this.textInput = input }} style = {styleMain.textInputSearch} 
                underlineColorAndroid="transparent"  autoCorrect = {false} placeholder = {'Tìm kiếm'}></TextInput>}
                        
                <TouchableOpacity onPress={this._clearTextSearch.bind(this)}>
                    <Image style = {styleMain.icon} source = {iconClose} resizeMode= 'contain' /> 
                </TouchableOpacity>
            </View>
        );
    }

    _renderTab(){
        return(
            <View style = {styleMain.tabContainer}>  
                <TouchableOpacity  onPress = {this.onPress} style = {styleMain.tabLeft}>
                    <Text style = {styleMain.textTabLeft}>Walmart.com</Text>
                </TouchableOpacity>

                <TouchableHighlight  onPress = {this.onPress} style = {styleMain.tabRight}>
                    <Text style = {styleMain.textTabRight}>At Your Store</Text>
                </TouchableHighlight>
            </View>
        );
    }


    _keyExtractor = (item, index) => index.toString();

}

