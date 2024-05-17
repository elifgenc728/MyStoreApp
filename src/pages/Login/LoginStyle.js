import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#64b5f6'

    },
    logo:{
        height: Dimensions.get('window').height /3,
        resizeMode:'contain',
        width: Dimensions.get('window').width,
        alignSelf:'center',
        tintColor:'white'
    },
    logo_container:{
        justifyContent:'center',
        flex:1
        
    },
    body_container:{
        flex:1,
        
    }
})