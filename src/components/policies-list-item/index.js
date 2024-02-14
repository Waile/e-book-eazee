import React from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';

const PoliciesListItem = ({ onItemPress, item, isActive }) => {
    return (
        <TouchableWithoutFeedback onPress={() => onItemPress(item.id,item.name)} >
            <View style={[styles.listItem, isActive && styles.activeTab]}>
                <Text style={[styles.listItemText, isActive && styles.activeTabText]}>{item.name}</Text>
            </View>
        </TouchableWithoutFeedback>

    )
}

export default PoliciesListItem;