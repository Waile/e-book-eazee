import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

const AppButton = ({ title, onPress,buttonContainer,buttonText }) => {
    return (
        <TouchableOpacity
            style={[styles.button,buttonContainer]}
            onPress={() => onPress()}
        >
            <Text style={[styles.buttonText,buttonText]}>{title}</Text>
        </TouchableOpacity>
    )
}


export default AppButton