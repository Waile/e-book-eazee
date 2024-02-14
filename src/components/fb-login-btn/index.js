import React, { useEffect } from 'react';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import {
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
  Profile,
} from 'react-native-fbsdk-next';
import styles from './styles';
import { IMAGES } from '../../../utils';
import api from '../../../api/baseApi';

const FacebookLoginButton = () => {
  useEffect(() => {
    LoginManager.logOut(); // Ensure the user is logged out on component mount
  }, []);

  const handleFacebookLogin = async () => {
    try {
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);

      if (result.isCancelled) {
        console.log('Login cancelled');
        return;
      }

      console.log(
        'Login success with permissions: ' +
        result.grantedPermissions.toString(),
      );

      const data = await AccessToken.getCurrentAccessToken();
      const accessToken = data.accessToken;

      console.log(accessToken.toString());

      const responseInfoCallback = (error, result) => {
        if (error) {
          console.log(error);
          console.log('Error fetching data: ' + error.toString());
        } else {
          console.log('result', result);
          console.log('Success fetching data: ' + result.toString());

          const user = {
            provider: 'facebook',
            uid: result.email,
            email: result.email,
            first_name: result.first_name,
            last_name: result.last_name,
          };
          postUserData(user);
        }
      };

      const infoRequest = new GraphRequest(
        '/me',
        {
          accessToken: accessToken,
          parameters: {
            fields: {
              string: 'email,name,first_name,middle_name,last_name',
            },
          },
        },
        responseInfoCallback,
      );

      new GraphRequestManager().addRequest(infoRequest).start();
    } catch (error) {
      console.log('Login fail with error: ', error);
    }
  };

  const postUserData = async (user) => {
    // try {
      const response = await api.post(
        '/api/v1/social_auth/callback',
        user,
      );
      console.log('UserDetails', user);
      console.log('POST API RESPONSE', response.data);

      if (response.ok) {
        // console.log(response?.data?.message)
      } else {
        // console.log(response.data);
      }
    // } catch (error) {
    //   console.log('Error posting user data: ', error);
    // }
  };

  return (
    <TouchableWithoutFeedback onPress={handleFacebookLogin}>
      <View style={styles.socialLoginButton}>
        <Image source={IMAGES.faceBookIcon} style={{ height: 26, width: 26 }} />
        <Text style={styles.socialLoginText}>Facebook</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FacebookLoginButton;
