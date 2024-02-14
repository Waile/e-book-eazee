import React from 'react'
import { Text } from 'react-native'
import styles from './styles'

const WelcomeText = ({ titleText }) => {
  return (
    <>
      <Text style={styles.heading}>Welcome</Text>
      <Text style={styles.heading}>to LearnEazee</Text>
      <Text style={styles.screenName}>{titleText}</Text>
    </>
  )
}

export default WelcomeText