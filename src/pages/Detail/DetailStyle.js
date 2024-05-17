import { StyleSheet, Dimensions } from "react-native";

const deviceSize = Dimensions.get('window');

export default StyleSheet.create(
    {
        image:{
            width:deviceSize.width,
            height:deviceSize.height/3,
        },
        title:{
            padding:15,
            fontSize:15,
            color: 'black'
        }
    }
)