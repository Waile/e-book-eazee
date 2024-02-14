import React from 'react';
import Signupscreen from '../screen/signupscreen';
import SplashScreen from '../screen/splash-screen';
import Loginscreen from '../screen/login-screen';
import Navigation from './navigation-constants';
import ResetPassword from '../screen/reset-password-screen';
import VerifyEmail from '../screen/verify-email-screen';
import AllDone from '../screen/all-done-screen';
import PrivacyPolicyScreen from '../screen/privacy-policy-screen';
import SplashOne from '../screen/splash-one-screen';
import TabScreen from '../components/login-signup-tabs';
import LandingPage from '../screen/landing-page';
import DrawerNavigator from './drawer-navigator';
import TabNavigator from './tab-navigator';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SingleBook from '../screen/single-book-screen';
import Header from '../components/header';

const AppNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={Navigation.SPLASH}>
        <Stack.Screen name={Navigation.DRAWER} component={DrawerNavigator} />
        <Stack.Screen
          name={Navigation.TAB_NAVIGATOR}
          component={TabNavigator}
        />
        <Stack.Screen name={Navigation.SPLASH} component={SplashScreen} />
        <Stack.Screen name={Navigation.SPLASH_ONE} component={SplashOne} />
        <Stack.Screen name={Navigation.SIGN_UP} component={Signupscreen} />
        <Stack.Screen name={Navigation.LOGIN} component={Loginscreen} />
        <Stack.Screen name={Navigation.TAB} component={TabScreen} />
        <Stack.Screen
          name={Navigation.RESET_PASSWORD}
          component={ResetPassword}
        />
        <Stack.Screen name={Navigation.VERIFY_EMAIL} component={VerifyEmail} />
        <Stack.Screen name={Navigation.ALL_DONE} component={AllDone} />
        <Stack.Screen
          name={Navigation.PRIVACY_POLICY}
          component={PrivacyPolicyScreen}
        />
        <Stack.Screen name={Navigation.LANDING_PAGE} component={LandingPage} />
        <Stack.Screen name={Navigation.SINGLE_BOOK} component={SingleBook} />
        <Stack.Screen name={Navigation.HEADER} component={Header} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
