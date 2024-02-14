import { Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import styles from './styles'
import { IMAGES } from '../../../utils'
import { useNavigation } from '@react-navigation/native'
import Navigation from '../../navigation/navigation-constants'

const Header = ({title}) => {
  const navigation=useNavigation()
  return (
    <View style={styles.header}>
    <View style={styles.menuContainer}>
      <TouchableOpacity onPress={() => navigation.navigate(Navigation.DRAWER)}>
        <Image source={IMAGES.menuLogo} style={styles.menuLogo} />
      </TouchableOpacity>
    </View>
    <View style={styles.dashboardHeading}>
      <Text style={styles.dashboardText}>
        {title}
      </Text>
    </View>
    <View style={styles.headerLogos}>
      <View style={styles.logos}>
        <Image source={IMAGES.countryLogo} style={styles.countryLogo} />
      </View>
      <View style={styles.logos}>
        <Image source={IMAGES.userLogo} />
      </View>
    </View>
  </View>
  )
}

export default Header

