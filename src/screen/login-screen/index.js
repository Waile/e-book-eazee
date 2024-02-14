import {
    View,
    Text,
    TouchableWithoutFeedback,
    ScrollView,
    TextInput,
    KeyboardAvoidingView,
} from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import Icons from 'react-native-vector-icons/Feather';
import EmailIcon from 'react-native-vector-icons/Fontisto';
import constants from './constants';
import COLORS from '../../../utils/constants';
import AppButton from '../../components/app-button';
import { useFormik } from 'formik';
import { generateSchema } from '../../../utils/form-validation';
import api from '../../../api/baseApi';
import Indicator from '../../components/indicator';
import { useNavigation } from '@react-navigation/native';
import Navigation from '../../navigation/navigation-constants';
import Footer from '../../components/footer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FacebookLoginButton from '../../components/fb-login-btn';
import GoogleLoginButton from '../../components/google-login-button';

const Loginscreen = ({ onSignupPress }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isloggedInFailed, setisloggedInFailed] = useState(false);
    const [isLoaderVisible, setisLoaderVisible] = useState(false)

    const navigation = useNavigation()
    const userObject = {
        email: '',
        password: '',
    }

    const { handleBlur, handleSubmit, touched, errors, values, setValues } =
        useFormik({
            initialValues: userObject,
            validationSchema: generateSchema(userObject),
            onSubmit: async (values) => {
                setisLoaderVisible(true)
                const response = await api.post(constants.ENDPOINT, {
                    email: values.email,
                    password: values.password,
                });
                if (response.ok) {
                    const accessToken = response.headers['access-token'];
                    const clientID = response.headers['client'];
                    const expiry = response.headers['expiry'];
                    await AsyncStorage.setItem('clientID', clientID);
                    await AsyncStorage.setItem('token', accessToken);
                    await AsyncStorage.setItem('expiry', expiry);
                    await AsyncStorage.setItem('uid', values.email);
                    setisLoaderVisible(false);
                    setisloggedInFailed(false);
                    navigation.navigate(Navigation.LANDING_PAGE)
                } else {
                    setisLoaderVisible(false)
                    setisloggedInFailed(true)
                }
            }
        })

    const onChangeText = (value, key) => {
        setisloggedInFailed(false)
        setValues(prev => ({
            ...prev,
            [key]: value,
        }))
    }
    const handleReset = () => {
        navigation.navigate(Navigation.VERIFY_EMAIL)
    }
    return (
        <KeyboardAvoidingView style={styles.mainContainer}>
            <TouchableWithoutFeedback>
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    style={styles.scrollView}>
                    <View style={styles.contentContainer}>
                        <Text style={styles.loginText}>Login</Text>
                        <View style={styles.socialLoginBtnContainer}>
                            <FacebookLoginButton />
                            <GoogleLoginButton />
                        </View>
                        <View style={styles.loginFormContainer}>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    placeholder={constants.EMAIL_PLACEHOLDER}
                                    placeholderTextColor={COLORS.placeholderTextColor}
                                    value={values?.email}
                                    onBlur={handleBlur('email')}
                                    onChangeText={(text) => onChangeText(text, 'email')}
                                />
                                <EmailIcon name="email" size={20} color={COLORS.icon} />
                            </View>
                            {errors?.email && touched?.email && <Text style={styles.errorMsg}>{errors?.email}</Text>}
                            <View style={{ ...styles.inputContainer, marginTop: errors?.email && touched?.email ? 0 : 19.455, }}>
                                <TextInput
                                    style={styles.input}
                                    placeholder={constants.PASSWORD_PLACEHOLDER}
                                    placeholderTextColor={COLORS.placeholderTextColor}
                                    value={values?.password}
                                    secureTextEntry={showPassword ? false : true}
                                    onBlur={handleBlur('password')}
                                    onChangeText={(text) => onChangeText(text, 'password')}
                                />
                                <TouchableWithoutFeedback
                                    onPress={() => setShowPassword(!showPassword)}>
                                    <Icons
                                        name={showPassword ? 'eye' : 'eye-off'}
                                        size={20}
                                        color={COLORS.icon}
                                    />
                                </TouchableWithoutFeedback>
                            </View>
                            {errors?.password && touched?.password && <Text style={styles.errorMsg}>{errors?.password}</Text>}
                            {isloggedInFailed && <Text style={styles.errorMsg} >{constants.LOGIN_FAIL}</Text>}
                            <Text style={{ ...styles.resetPassword, marginTop: errors?.password && touched?.password ? 0 : 19.455 }} >Can't remember your password?
                                <Text style={styles.resetText} onPress={handleReset} > Reset it</Text>
                            </Text>
                        </View>
                        <AppButton onPress={handleSubmit} title={constants.BUTTON_TEXT} />
                        <Text style={styles.accountText} >Don't have an account? <Text style={styles.signupText} onPress={() => onSignupPress(true)}>Sign Up</Text></Text>
                        <Footer />
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
            <Indicator isVisible={isLoaderVisible} />
        </KeyboardAvoidingView>
    );
};

export default Loginscreen;
