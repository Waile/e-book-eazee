import { Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
import { ImageBackground } from 'react-native'
import { IMAGES } from '../../../utils'
import { Image } from 'react-native'
import constants from './constants'
import AppButton from '../../components/app-button'
import Footer from '../../components/footer'
import { useNavigation } from '@react-navigation/native'
import Navigation from '../../navigation/navigation-constants'

const AllDone = () => {
    const navigation = useNavigation()
    const handlePress = () => {
        navigation.navigate(Navigation.TAB)
    }
    return (
        <View style={styles.mainContainer}>
            <ImageBackground source={IMAGES.whiteBackground} resizeMode='cover' style={styles.backgroundImage}>
                <Image source={IMAGES.allDoneLogo} style={styles.allDoneLogo} />
                <Text style={styles.allDoneHeading}>All Done!</Text>
                <Text style={styles.allDoneText} >{constants.ALL_DONE_TEXT}</Text>
                <AppButton title={constants.BUTTON_TEXT} onPress={handlePress} />
                <Footer />
            </ImageBackground>
        </View>
    )
}

export default AllDone
