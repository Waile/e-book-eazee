import React from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';

const  CategoriesList= ({ onItemPress, item, isActive }) => {
    return (
        <TouchableWithoutFeedback onPress={() => onItemPress(item.id)} >
            <View style={[styles.listItem, isActive && styles.activeTab]}>
                <Text style={[styles.listItemText, isActive && styles.activeTabText]}>{item.name}</Text>
            </View>
        </TouchableWithoutFeedback>

    )
}

export default CategoriesList;