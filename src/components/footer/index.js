import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react';
import styles from './styles'

const Footer = ({textColor}) => {
    return (
        <>
            <Text style={[styles.footer,textColor]}>© 2023 LearnEazee. All rights reserved.</Text>
        </>
    )
}


export default Footer