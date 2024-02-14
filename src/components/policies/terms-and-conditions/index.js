import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { constants } from './constants'
import styles from './styles'

const TermAndConditions = () => {
    return (
        <>
            <Text style={styles.headingTop}>{constants.HEADING}</Text>
            <Text style={styles.textContent}>{constants.LINE1}</Text>
            <Text style={styles.textContent}>{constants.LINE2}</Text>
            <Text style={styles.textContent}>{constants.LINE3}</Text>
            <Text style={styles.textContent}>{constants.PARA}</Text>
            <Text style={styles.heading}>{constants.COOKIE}</Text>
            <Text style={styles.textContent}>{constants.COOKIE_LINE1}</Text>
            <Text style={styles.textContent}>{constants.COOKIE_LINE2}</Text>
            <Text style={styles.heading}>{constants.CONSENT}</Text>
            <Text style={[styles.textContent, styles.textContentEnd]}>{constants.CONSENT_LINE}</Text>
        </>
    )
}

export default TermAndConditions