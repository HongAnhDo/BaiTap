import{
    StyleSheet,
    Dimensions
}from 'react-native';

const windowWidth = Dimensions.get('window').width;
const styleMain = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    containerHead:{
        height: 135,
        backgroundColor: '#027fc7',
        justifyContent: 'center',
        alignItems: 'center'
    },

    containerBody:{
        flex: 1,
        backgroundColor: 'white'
    },

    itemHead:{
        flex: 1,
        padding: 5

    },

    tabContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        width: windowWidth - 10,
        backgroundColor: '#027fc7',
        alignItems: 'center',
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'white',
    },

    toolbarContainer: {
        flex: 1,
        backgroundColor: '#027fc7',
        flexDirection: 'row',
        alignItems: 'center',
        width: windowWidth
       
    },
    backImg: {
        width: 30,
        height: 40
    },
    titleLeft: {
        color: 'white',
        fontSize: 16
    },
    titleLarge: {
        color: 'white',
        fontSize: 18,
        marginLeft: 60,
        fontWeight: 'bold'
    },
    searchContainer:{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white', 
        borderRadius: 5,
        margin: 15,
        justifyContent: 'space-between'
    },
    icon: {
        height: 20,
        width: 20,
        margin: 5
    },
    textInputSearch: {
        width: windowWidth - 70,
        alignSelf: 'flex-end',
        paddingBottom: 5
        
    },
    tabLeft: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabRight: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        paddingTop: 8,
        paddingBottom: 8
    },

    textTabLeft: {
        color: 'white',
        textAlign: 'center'
    },

    textTabRight: {
        color: '#027fc7',
        textAlign: 'center'
    },

    containerMiddle:{
        height: 40,
        width: windowWidth,
        flexDirection: 'row',
        alignItems: 'center'
    },

    imgContainerMiddle:{
        flex: 1,
        height: 30,
        margin: 5
    },
    textContainerMiddle:{
        flex: 8,
        fontSize: 16
    },

    
    line:{
        backgroundColor : '#a4a3a8', 
        height: 1
    },

    statusBar:{
        backgroundColor: '#027cf7',
        height: 24
    }

}
)

export default styleMain;