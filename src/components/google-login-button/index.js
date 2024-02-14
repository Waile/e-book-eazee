import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import { IMAGES } from '../../../utils';
import styles from './styles';
import api from '../../../api/baseApi';

const GoogleLoginButton = () => {
    useEffect(() => {
        GoogleSignin.configure({
            webClientId:
                '1017382163410-0arsp113263qvelp3m2tteq1agg1qvfv.apps.googleusercontent.com',
            offlineAccess: true,
        });
    }, []);
    const apiEndpoint = '/api/v1/social_auth/callback';
    const handleGoogleSignUp = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const user = await GoogleSignin.signIn();
            const userObject = {
                provider: 'google',
                uid: user.user.email,
                email: user.user.email,
                first_name: user.user.givenName,
                last_name: user.user.familyName,
              };
            const response = await api.post(apiEndpoint, {
                user:userObject
            });
            if(response.ok){
                console.log("Logged in Successfully");
            }
            else{
                console.log("Error while logging");
            }
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log('User cancelled the login flow !');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log('Signin in progress');
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log('Google play services not available or outdated !');
            } else {
                console.log(error);
            }
        }
    };
    return (
        <TouchableWithoutFeedback onPress={handleGoogleSignUp}>
            <View style={styles.socialLoginButton}>
                <Image source={IMAGES.googleIcon} style={{ height: 19, width: 19 }} />
                <Text style={styles.socialLoginText}>Google</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default GoogleLoginButton;
