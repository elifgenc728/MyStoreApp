import { TextInput, View } from "react-native";
import styles from './InputStyle';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Input = ({ placeholder, onType, value,iconName, isSecure}) => {
    return (
        <View style={styles.container}>
            <Icon name={iconName} size={25} style={styles.icon} />
            <TextInput secureTextEntry={isSecure} style={styles.input} placeholder={placeholder} onChangeText={onType} value={value} />
        </View>
    )
}
export default Input; 