import {StyleSheet,Dimensions} from 'react-native';

const {WIDTH,HEIGHT} = Dimensions.get("screen");

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    baseBackground: {
       flex: 1,
       /* alignItems: 'center',
        justifyContent: 'center', */
    },
    floatingContainer: {
        backgroundColor: '#fff',
        borderRadius: 0,
        marginTop: 20,
        marginBottom: 50,
        alignItems:'center'
    },
    homeHeader :{
        flexDirection : "row",
        backgroundColor : '#fff',
        alignItems:'center',
    },
    homeHeaderText : {
        fontSize : 25,
        fontWeight : "bold",
        paddingLeft : 20,
        paddingTop:30,
       
    },
    homeSearchContainer : {
        backgroundColor : '#fff',
        width : WIDTH,
        paddingBottom : 10,
        marginTop : 0,
        borderRadius : 0,
        shadowColor : "#000",
        shadowOffset : {
            width : 2,
            height : 2,
        },
        shadowOpacity : 0.8,
        shadowRadius : 1.3,
       
    },
    homeSearchIcon : {
        position : 'absolute',
        left: 5,
        top:10,
        width : 25,
        height:25,
    },
    homeSearchInputField : {
        height: 45,
        fontSize: 15,
        left:20,
        paddingLeft: 10,
        backgroundColor: '#fff',
        color: '#302d2d',
        marginHorizontal: 25,
        alignItems: 'center',
        borderBottomColor: '#5e5a5a',
        borderBottomWidth: 1,
    }


});