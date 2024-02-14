import React from 'react'
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import styles from './styles'

const SocialLoginBtn = ({ text, style, image }) => {
  return (
    <TouchableWithoutFeedback >
      <View style={styles.socialLoginButton}>
        <Image
          source={image}
          style={style}
        />
        <Text style={styles.socialLoginText} >{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default SocialLoginBtn