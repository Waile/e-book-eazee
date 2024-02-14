import { Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
import { constants } from './constants'

const CookiesPolicy = () => {
    return (
        <View>
            <Text style={styles.heading}>{constants.COOKIE_POLICY}</Text>
            <Text style={styles.textContent}>{constants.COOKIE_POLICY_CONTENT}</Text>
            <Text style={styles.heading}>{constants.GOOGLE_DART}</Text>
            <Text style={styles.textContent}>{constants.GOOGLE_DART_CONTENT}</Text>
            <Text style={styles.heading}>{constants.ADVERTISING}</Text>
            <Text style={styles.textContent}>{constants.ADVERTISING_CONTENT}</Text>
            <Text style={styles.heading}>{constants.THIRD_PARTY}</Text>
            <Text style={styles.textContent}>{constants.THIRD_PARTY_CONTENT}</Text>
            <Text style={styles.heading}>{constants.CHILD_INFO}</Text>
            <Text style={styles.textContent}>{constants.CHILD_INFO_CONTENT}</Text>
            <Text style={styles.heading}>{constants.ONLINE_POLICY}</Text>
            <Text style={[styles.textContent, styles.textContentEnd]}>{constants.ONLINE_POLICY_CONTENT}</Text>
        </View>
    )
}

export default CookiesPolicy