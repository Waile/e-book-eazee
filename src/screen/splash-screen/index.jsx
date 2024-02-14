import React, { useState, useEffect } from 'react';
import { Text, View, Image, ImageBackground } from 'react-native';
import styles from './styles';
import { IMAGES } from '../../../utils';
import { useNavigation } from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import Navigation from '../../navigation/navigation-constants';

const SplashScreen = () => {
    const navigation = useNavigation();
    const [progressValue, setProgressValue] = useState(0)
    const [percentage, setPercentage] = useState(0)

    useEffect(() => {
        let value = 0;
        let increment = 0;
        const intervalId = setInterval(() => {
            value += 10;
            increment += 0.1;
            if (value >= 100) {
                value = 100;
                increment = 1;
                clearInterval(intervalId);
                navigation.replace(Navigation.SPLASH_ONE);
            }
            setProgressValue(value);
            setPercentage(increment);
        }, 300);

        return () => {
            clearInterval(intervalId);
        };
    }, []);


    return (
        <View style={styles.container}>
            <ImageBackground source={IMAGES.splashBackground} resizeMode='cover' style={styles.backgroundImage}>
                <Image source={IMAGES.whiteLogo} />
                <Text style={styles.text}>Learn Eazee</Text>
                <View style={styles.progressContainer}>
                    <Text style={styles.progressPercent}>{progressValue} %</Text>
                    <Progress.Bar width={200} animated={true} progress={percentage} color='#FFFFFF' borderWidth={0.1} />
                </View>
            </ImageBackground>
        </View>
    )
}

export default SplashScreen
