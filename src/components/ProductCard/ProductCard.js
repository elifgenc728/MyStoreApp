import {View,Text,Image} from 'react-native';
import styles from './ProductCardStyle';
import React from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
function ProductCard({product,onSelect}){
    
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:product.image}}/>
            <View style={styles.body_container}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>{product.price} TL</Text>
            </View>
        </View>
   </TouchableWithoutFeedback>
    )
}
export default ProductCard;