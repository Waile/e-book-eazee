import { Text, View,TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import { constants } from './constants'
import Footer from '../../components/footer'
import { IMAGES } from '../../../utils'
import {useNavigation,DrawerActions} from '@react-navigation/native'

const Sidebar = () => {

  const navigation=useNavigation()
  const handlePress=()=>{
    navigation.dispatch(DrawerActions.closeDrawer())
  }
  return (
    <View style={styles.mainContainer}>
    <View style={styles.contentContainer}>
      <View style={styles.cross} >
      <TouchableOpacity onPress={handlePress}>
        <Image source={IMAGES.cross} />
        </TouchableOpacity>
      </View>
      <View style={styles.userContainer}>
        <Image source={IMAGES.userImage} style={styles.imageStyle}/>
        <Text style={styles.userName}>Shwary</Text>
        <Text style={styles.userEmail}>Shwary@gmail.com</Text>
      </View>
      <View style={styles.buttonContainer} >
      <TouchableOpacity  style={styles.buttonStyle}>
            <Text style={styles.buttonText}>{constants.BUTTON_TEXT}</Text>
      </TouchableOpacity>
      </View>
      <Footer textColor={styles.footerText} />
    </View>
    </View>
  )
}

export default Sidebar

