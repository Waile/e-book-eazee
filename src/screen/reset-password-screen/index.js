import React, { useState } from 'react'
import {
    Text,
    View,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    ScrollView,
    Image,
    TextInput,
    ImageBackground
} from 'react-native'
import styles from './styles'
import { IMAGES } from '../../../utils'
import constants from './constants'
import Icon from 'react-native-vector-icons/Feather';
import { useFormik } from 'formik';
import { generateSchema } from '../../../utils/form-validation';
import api from '../../../api/baseApi';
import Indicator from '../../components/indicator';
import COLORS from '../../../utils/constants';
import AppButton from '../../components/app-button';
import Footer from '../../components/footer';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import Navigation from '../../navigation/navigation-constants'

const ResetPassword = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [isPasswordErrorVisible, setIsPasswordErrorVisible] = useState(false)
    const [isLoaderVisible, setisLoaderVisible] = useState(false)
    const userObject = {
        password: '',
        confirmPassword: '',
    }
    const navigation = useNavigation()

    const { handleBlur, handleSubmit, touched, errors, values, setValues } =
        useFormik({
            initialValues: userObject,
            validationSchema: generateSchema(userObject),
            onSubmit: async (values) => {
                if (values.password === values.confirmPassword) {
                    setisLoaderVisible(true)
                    setIsPasswordErrorVisible(false)
                    const token = await AsyncStorage.getItem('token');
                    const clientID = await AsyncStorage.getItem('clientID');
                    const expiry = await AsyncStorage.getItem('expiry');
                    const uid = await AsyncStorage.getItem('uid');
                    const headers = {
                        'access-token': token,
                        'client': clientID,
                        'expiry': expiry,
                        'uid': uid,
                        'client_id': clientID,
                        'token': token
                    };
                    const response = await api.put(constants.ENDPOINT, {
                        reset_password_token: token,
                        password: values.password,
                        password_confirmation: values.confirmPassword,
                    }, { headers });
                    if (response.ok) {
                        setisLoaderVisible(false);
                        navigation.navigate(Navigation.ALL_DONE)
                    } else {
                        setisLoaderVisible(false)
                    }
                } else {
                    setisLoaderVisible(false)
                    setIsPasswordErrorVisible(true);
                }
            }
        })

    const onChangeText = (value, key) => {
        setIsPasswordErrorVisible(false);
        setValues(prev => ({
            ...prev,
            [key]: value,
        }))
    }

    return (
        <KeyboardAvoidingView style={styles.mainContainer}>
            <TouchableWithoutFeedback>
                <ImageBackground
                    source={IMAGES.whiteBackground}
                    resizeMode="cover"
                    style={styles.backgroundImage}>
                    <ScrollView
                        contentContainerStyle={{ flexGrow: 1 }}
                        style={styles.scrollView}>
                        <View style={styles.contentContainer} >
                            <Image source={IMAGES.logoColored} />
                            <Text style={styles.resetHeading}>Reset Password</Text>
                            <View style={styles.resetFormContainer} >
                                <View style={styles.inputContainer}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder={constants.NEW_PASSWORD}
                                        placeholderTextColor={COLORS.placeholderTextColor}
                                        value={values?.password}
                                        secureTextEntry={showPassword ? false : true}
                                        onBlur={handleBlur(constants.PASSWORD_KEY)}
                                        onChangeText={(text) => onChangeText(text, constants.PASSWORD_KEY)}
                                    />
                                    <TouchableWithoutFeedback onPress={() => setShowPassword(!showPassword)}>
                                        <Icon name={showPassword ? "eye" : "eye-off"} size={20} color={COLORS.icon} />
                                    </TouchableWithoutFeedback>
                                </View>
                                {errors?.password && touched?.password && <Text style={styles.errorMsg}>{errors?.password}</Text>}
                                <View style={{ ...styles.inputContainer, marginTop: errors?.password && touched?.password ? 0 : 19.455 }}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder={constants.CONFIRM_PASSWORD}
                                        secureTextEntry={showConfirmPassword ? false : true}
                                        onBlur={handleBlur(constants.CONFIRM_PASSWORD_KEY)}
                                        value={values?.confirmPassword}
                                        onChangeText={(text) => onChangeText(text, constants.CONFIRM_PASSWORD_KEY)}
                                    />
                                    <TouchableWithoutFeedback onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                                        <Icon name={showConfirmPassword ? "eye" : "eye-off"} size={20} color={COLORS.icon} />
                                    </TouchableWithoutFeedback>
                                </View>
                                {errors?.confirmPassword && touched?.confirmPassword && <Text style={styles.errorMsg}>{errors?.confirmPassword}</Text>}
                                {isPasswordErrorVisible && <Text style={styles.errorMsg} >{constants.PASSWORD_NOT_MATCH}</Text>}
                            </View>
                            <AppButton title={"Reset"} onPress={handleSubmit} />
                            <Footer />
                        </View>
                    </ScrollView>
                </ImageBackground>
            </TouchableWithoutFeedback>
            <Indicator isVisible={isLoaderVisible} />
        </KeyboardAvoidingView>
    )
}

export default ResetPassword

