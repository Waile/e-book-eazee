import { Text, View } from 'react-native'
import React from 'react'
import { privacyPolicy } from './constants'
import styles from './styles'

const PrivacyPolicies = () => {
    return (
        <>
            <Text style={styles.heading} >{privacyPolicy.HEADING}</Text>
            <Text style={styles.textContent}>{privacyPolicy.CONTENT}</Text>
            <Text style={styles.heading}>{privacyPolicy.LOG_FILES_HEADING}</Text>
            <Text style={styles.textContent}>{privacyPolicy.LOG_FILES_PARA_1}</Text>
            <Text style={styles.textContent}>{privacyPolicy.LOG_FILES_PARA_2}</Text>
        </>
    )
}

export default PrivacyPolicies

