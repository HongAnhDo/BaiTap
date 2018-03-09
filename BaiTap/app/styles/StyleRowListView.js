import{
    StyleSheet,
    Dimensions
}from 'react-native';


const windowWidth = Dimensions.get('window').width;
const styleRow = StyleSheet.create({
    row: {
        width: windowWidth,
        height: 140,
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray'
    },
    imgProduct:{
        width: 120,
        height: 120,
        marginRight: 10
    },
    containerRight:{
        flex: 1,
        backgroundColor: 'white',
        marginTop: 10
    },
    containerRightTop:{
    
        flexDirection: 'row'
    },
    containerRightBottom:{
        flex: 1
    },
    titleProduct:{
        flex: 5,
        color: 'black',
        fontSize: 15
    },
    priceProduct:{
        flex: 3,
        justifyContent:'center',
        alignItems: 'flex-start',
        flexDirection: 'row'
    },
    textPriceSmall:{
        fontSize: 18,
        color:'#f08b11',
        fontWeight: 'bold'
    },

    textPriceLarge:{
        fontSize: 24,
        color:'#f08b11',
        fontWeight: 'bold'
    },

    containerEvaluate:{
        flexDirection: 'row',
        marginTop: 5,
        marginRight: 5

    },

    containerAddress:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    iconStar:{
        height: 10,
        width: 10,
        marginTop: 2,
        marginRight: 1
    },

    numberEvaluate:{
        marginLeft: 5,
        fontSize: 12
    },
    containerType:{
        flex: 2,  
        borderRadius: 5,
        paddingTop:5, 
        paddingBottom:5,
        marginLeft: 10, 
        marginRight: 10, 
        backgroundColor: '#027cf7', 
        justifyContent: 'center', 
        alignItems: 'center'
    },

    textType:{
        fontSize: 12, 
        color: 'white', 
        textAlign:'center'
    },

    textStore:{
        color: 'green', 
        fontSize: 12
    },

    textProduce:{
        fontSize: 12
    },

    containerStrore:{
        flex: 5, 
        flexDirection:'row', 
        marginTop: 5
    }

});

export default styleRow;