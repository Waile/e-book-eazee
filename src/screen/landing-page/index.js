import { StyleSheet, Text, View,ImageBackground,Image } from 'react-native'
import React from 'react'
import styles from './styles'
import AppButton from '../../components/app-button'
import { useNavigation } from '@react-navigation/native'
import Navigation from '../../navigation/navigation-constants'

const LandingPage = () => {
  const navigation=useNavigation()
  const handleSubmit=()=>{
    navigation.navigate(Navigation.TAB)
  }
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Welcome To Learn Eazee</Text>
        <AppButton onPress={handleSubmit} title={"Logout"} />
</View>
  )
}

export default LandingPage

