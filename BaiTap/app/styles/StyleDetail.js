import{
    StyleSheet,
    Dimensions
}from 'react-native';


const windowWidth = Dimensions.get('window').width;
const  styleDetail = StyleSheet.create({

    back:{
        width: 20,
        height: 20,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20

    },
    title :{
        color: 'black',
        fontSize: 16
    },


    imageProduce:{
        height: 260,
        width: windowWidth
    },

    toolbarContainer: {
        height: 50,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        width: windowWidth,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        borderColor: '#ddd',
        borderWidth: 1
       
    },
    iconStar:{
        height: 20,
        width: 20,
        marginTop: 2,
        marginRight: 1
    },
    containerEvaluate:{
        flex: 1,
        height: 50,
        flexDirection: 'row',
        marginTop: 5,
        marginRight: 5

    },
    numberEvaluate:{
        marginLeft: 5,
        fontSize: 14
    }
})

export default styleDetail;