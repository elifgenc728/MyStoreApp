import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        padding:5,
        backgroundColor:'#e0e0e0',
        borderRadius:10,
        margin:10,
        borderWidth:1,
        borderColor:'#bdbdbd',
        flexDirection:'row',
    },
    body_container:{
        padding:10,
        flex:1,
        justifyContent:'space-between'
    },
    image:{
        width:100,
        minHeight:100,
        borderRadius:10,
        resizeMode:'contain',
       
    },
    title:{
        fontSize:15,
        fontWeight:'bold', 
        color:'black'     
    },
    price:{
        textAlign:'right',
        fontSize:16,
        fontStyle:'italic'
    }

})