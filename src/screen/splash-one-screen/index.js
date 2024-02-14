import {
    Text,
    View,
    Image,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
  import styles from './styles';
  import { IMAGES } from '../../../utils';
  import { useNavigation } from '@react-navigation/native';
  import Navigation from '../../navigation/navigation-constants';
  import constants from './constants';
  
  
  const SplashOne = () => {
    const navigation = useNavigation()
    const handleNavigation = () => {
      navigation.navigate(Navigation.TAB_NAVIGATOR)
    }
    return (
      <View resizeMode='contain' source={IMAGES.bookImage} style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image resizeMode='contain' source={IMAGES.bookImage} style={{ width: '100%', borderWidth: 1, borderColor: 'transparent', }} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>{constants.WELCOME_TEXT}</Text>
          <Text style={styles.heading}>{constants.LEARN_EAZEE_TEXT}</Text>
          <TouchableOpacity onPress={handleNavigation} style={styles.buttonStyle}>
            <Text style={styles.buttonText}>{constants.BUTTON_TEXT}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  export default SplashOne;
  