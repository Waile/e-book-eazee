import {
    Text,
    View,
    Image,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    TextInput,
    Alert,
} from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { ImageBackground } from 'react-native';
import { IMAGES } from '../../../utils';
import constants from './constants';
import AppButton from '../../components/app-button';
import Footer from '../../components/footer';
import COLORS from '../../../utils/constants';
import EmailIcon from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import { generateSchema } from '../../../utils/form-validation';
import Indicator from '../../components/indicator';
import api from '../../../api/baseApi';
import Navigation from '../../navigation/navigation-constants';

const VerifyEmail = () => {
    const [isLoaderVisible, setIsLoaderVisible] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();
    const userObject = {
        email: '',
    };

    const { handleBlur, handleSubmit, touched, errors, values, setValues } =
        useFormik({
            initialValues: userObject,
            validationSchema: generateSchema(userObject),
            onSubmit: async values => {
                setIsLoaderVisible(true);
                const response = await api.post(constants.ENDPOINT, {
                    email: values.email,
                });
                if (response.ok) {
                    setModalVisible(true);
                    setIsLoaderVisible(false);
                    setIsValidEmail(false);
                    navigation.navigate(Navigation.RESET_PASSWORD)
                } else {
                    setIsLoaderVisible(false);
                    setIsValidEmail(true);
                }
                setModalVisible(false)
            },
        });
    const onChangeText = (value, key) => {
        setIsValidEmail(false);
        setValues(prev => ({
            ...prev,
            [key]: value,
        }));
    };
    return (
        <KeyboardAvoidingView style={styles.mainContainer}>
            <TouchableWithoutFeedback>
                <View style={styles.mainContainer}>
                    <ImageBackground
                        source={IMAGES.whiteBackground}
                        resizeMode="cover"
                        style={styles.backgroundImage}>
                        <View style={styles.contentContainer}>
                            <Image source={IMAGES.logoColored} />
                            <Text style={styles.verifyHeading}>{constants.SCREEN_TITLE}</Text>
                            {modalVisible &&
                                Alert.alert('Notification', constants.POPUP_TEXT, [
                                    {
                                        text: 'OK',
                                        onPress: () => navigation.navigate(Navigation.RESET_PASSWORD),
                                    },
                                ])}
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    placeholder={constants.EMAIL_PLACEHOLDER}
                                    placeholderTextColor={COLORS.placeholderTextColor}
                                    value={values?.email}
                                    onBlur={handleBlur('email')}
                                    onChangeText={text => onChangeText(text, 'email')}
                                />
                                <EmailIcon name="email" size={20} color={COLORS.icon} />
                            </View>
                            {errors?.email && touched?.email && (
                                <Text style={styles.errorMsg}>{errors?.email}</Text>
                            )}
                            {isValidEmail && (
                                <Text style={styles.errorMsg}>{constants.INVALID_EMAIL}</Text>
                            )}
                            <AppButton
                                onPress={handleSubmit}
                                title={constants.BUTTON_TITLE}
                            />
                        </View>
                        <Footer />
                    </ImageBackground>
                </View>
            </TouchableWithoutFeedback>
            <Indicator isVisible={isLoaderVisible} />
        </KeyboardAvoidingView>
    );
};

export default VerifyEmail;
