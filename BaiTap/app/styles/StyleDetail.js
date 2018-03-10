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

        height: 300,
        width: windowWidth,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        borderColor: '#ddd',
        borderWidth: 1

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
        marginBottom: 5,
        borderColor: '#ddd',
        borderWidth: 1
       
    }
})

export default styleDetail;