import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  ScrollView,
  Keyboard,
} from 'react-native';
import CheckBox from 'react-native-check-box';
import React, {useState} from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import EmailIcon from 'react-native-vector-icons/Fontisto';
import {useFormik} from 'formik';
import {generateSchema} from '../../../utils/form-validation';
import constants from './constant';
import api from '../../../api/baseApi';
import Indicator from '../../components/indicator';
import COLORS from '../../../utils/constants';
import AppButton from '../../components/app-button';
import {useNavigation} from '@react-navigation/native';
import Navigation from '../../navigation/navigation-constants';

const Signupscreen = ({onLoginPress}) => {
  const userObject = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailErrorVisible, setIsEmailErrorVisible] = useState(false);
  const [isPasswordErrorVisible, setIsPasswordErrorVisible] = useState(false);
  const [isCheckboxErrorVisible, setIsCheckboxErrorVisible] = useState(false);
  const [isChecked, setisChecked] = useState(false);
  const [isLoaderVisible, setisLoaderVisible] = useState(false);

  const navigation = useNavigation();

  const {handleBlur, handleSubmit, touched, errors, values, setValues} =
    useFormik({
      initialValues: userObject,
      validationSchema: generateSchema(userObject),
      onSubmit: async values => {
        if (isChecked) {
          if (values.password === values.confirmPassword) {
            setIsCheckboxErrorVisible(false);
            setisLoaderVisible(true);
            setIsPasswordErrorVisible(false);
            const response = await api.post(constants.END_POINT, {
              first_name: values?.firstName,
              last_name: values?.lastName,
              email: values.email,
              password: values.password,
              password_confirmation: values.confirmPassword,
            });
            if (response.ok) {
              setisLoaderVisible(false);
              handleLogin();
              navigation.navigate(Navigation.LANDING_PAGE);
            } else {
              setisLoaderVisible(false);
              setIsEmailErrorVisible(!isEmailErrorVisible);
            }
          } else {
            setisLoaderVisible(false);
            setIsPasswordErrorVisible(true);
          }
        } else {
          setisLoaderVisible(false);
          setIsCheckboxErrorVisible(true);
          if (values.password === values.confirmPassword) {
            setIsPasswordErrorVisible(false);
          } else {
            setIsPasswordErrorVisible(true);
          }
        }
      },
    });

  const onChangeText = (value, key) => {
    setIsEmailErrorVisible(false);
    setIsPasswordErrorVisible(false);
    setValues(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleLogin = () => {
    onLoginPress(false);
  };

  const handleTermsCondition = () => {
    navigation.navigate(Navigation.PRIVACY_POLICY);
  };

  return (
    <View style={styles.mainContainer}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          style={styles.scrollView}>
          <View style={styles.contentContainer}>
            <Text style={styles.signUpText}>Sign Up</Text>
            <View style={styles.inputContainer}>
              <TextInput
                blurOnSubmit={false}
                returnKeyType="next"
                onSubmitEditing={() => {
                  this.secondTextInput.focus();
                }}
                placeholderTextColor={COLORS.black}
                style={styles.input}
                placeholder={constants.FIRST_NAME_PLACEHOLDER}
                value={values?.name}
                maxLength={30}
                onBlur={handleBlur(constants.FIRST_NAME_KEY)}
                onChangeText={text =>
                  onChangeText(text, constants.FIRST_NAME_KEY)
                }
              />
              <Icon name="user" size={20} color={COLORS.icon} />
            </View>
            {errors?.firstName && touched?.firstName && (
              <Text style={styles.errorMsg}>{errors?.firstName}</Text>
            )}
            <View
              style={{
                ...styles.inputContainer,
                marginTop: errors?.firstName && touched?.firstName ? 0 : 19.455,
              }}>
              <TextInput
                blurOnSubmit={false}
                ref={input => {
                  secondTextInput = input;
                }}
                returnKeyType="next"
                onSubmitEditing={() => {
                  thirdTextInput.focus();
                }}
                style={styles.input}
                placeholderTextColor={COLORS.black}
                placeholder={constants.LAST_NAME_PLACEHOLDER}
                value={values?.name}
                maxLength={30}
                onBlur={handleBlur(constants.LAST_NAME_KEY)}
                onChangeText={text =>
                  onChangeText(text, constants.LAST_NAME_KEY)
                }
              />
              <Icon name="user" size={20} color={COLORS.icon} />
            </View>
            {errors?.lastName && touched?.lastName && (
              <Text style={styles.errorMsg}>{errors?.lastName}</Text>
            )}
            <View
              style={{
                ...styles.inputContainer,
                marginTop: errors?.lastName && touched?.lastName ? 0 : 19.455,
              }}>
              <TextInput
                blurOnSubmit={false}
                returnKeyType="next"
                onSubmitEditing={() => {
                  this.forthTextInput.focus();
                }}
                ref={input => {
                  thirdTextInput = input;
                }}
                style={styles.input}
                placeholderTextColor={COLORS.black}
                placeholder={constants.EMAIL_PLACEHOLDER}
                value={values?.email}
                maxLength={50}
                onBlur={handleBlur(constants.EMAIL_KEY)}
                onChangeText={text => onChangeText(text, constants.EMAIL_KEY)}
              />
              <EmailIcon name="email" size={20} color={COLORS.icon} />
            </View>
            {errors?.email && touched?.email && (
              <Text style={styles.errorMsg}>{errors?.email}</Text>
            )}
            {isEmailErrorVisible && (
              <Text style={styles.errorMsg}>
                {constants.EMAIL_EXISTING_ERROR}
              </Text>
            )}
            <View
              style={{
                ...styles.inputContainer,
                marginTop: errors?.email && touched?.email ? 0 : 19.455,
              }}>
              <TextInput
                blurOnSubmit={false}
                style={styles.input}
                returnKeyType="next"
                onSubmitEditing={() => {
                  fifthTextInput.focus();
                }}
                ref={input => {
                  forthTextInput = input;
                }}
                placeholderTextColor={COLORS.black}
                placeholder={constants.PASSWORD_PLACEHOLDER}
                maxLength={30}
                value={values?.password}
                secureTextEntry={showPassword ? false : true}
                onBlur={handleBlur(constants.PASSWORD_KEY)}
                onChangeText={text =>
                  onChangeText(text, constants.PASSWORD_KEY)
                }
              />
              <TouchableWithoutFeedback
                onPress={() => setShowPassword(!showPassword)}>
                <Icon
                  name={showPassword ? 'eye' : 'eye-off'}
                  size={20}
                  color={COLORS.icon}
                />
              </TouchableWithoutFeedback>
            </View>
            {errors?.password && touched?.password && (
              <Text style={styles.errorMsg}>{errors?.password}</Text>
            )}
            <View
              style={{
                ...styles.inputContainer,
                marginTop: errors?.password && touched?.password ? 0 : 19.455,
              }}>
              <TextInput
                ref={input => {
                  fifthTextInput = input;
                }}
                style={styles.input}
                placeholderTextColor={COLORS.black}
                placeholder={constants.CONFIRM_PASSWORD_PLACEHOLDER}
                maxLength={30}
                secureTextEntry={showConfirmPassword ? false : true}
                onBlur={handleBlur(constants.CONFIRM_PASSWORD_KEY)}
                value={values?.confirmPassword}
                onChangeText={text =>
                  onChangeText(text, constants.CONFIRM_PASSWORD_KEY)
                }
              />
              <TouchableWithoutFeedback
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                <Icon
                  name={showConfirmPassword ? 'eye' : 'eye-off'}
                  size={20}
                  color={COLORS.icon}
                />
              </TouchableWithoutFeedback>
            </View>
            {errors?.confirmPassword && touched?.confirmPassword && (
              <Text style={styles.errorMsg}>{errors?.confirmPassword}</Text>
            )}
            {isPasswordErrorVisible && (
              <Text style={styles.errorMsg}>
                {constants.PASSWORD_NOT_MATCH}
              </Text>
            )}
            <View
              style={{
                ...styles.checkBoxContainer,
                marginTop:
                  errors?.confirmPassword && touched?.confirmPassword
                    ? 0
                    : 19.455,
              }}>
              <CheckBox
                onClick={() => {
                  setisChecked(!isChecked);
                }}
                isChecked={isChecked}
              />
              <Text style={styles.agreeText}>
                I agree all{' '}
                <Text style={styles.span} onPress={handleTermsCondition}>
                  {' '}
                  Terms & Conditions
                </Text>
              </Text>
            </View>
            {isCheckboxErrorVisible && (
              <Text style={styles.checkboxErrorMsg}>
                {constants.CHECKBOX_ERROR}
              </Text>
            )}
            <AppButton onPress={handleSubmit} title={constants.BUTTON_TEXT} />
            <Text style={styles.textAccount}>
              Already have an account?{' '}
              <Text
                onPress={() => onLoginPress(false)}
                style={styles.spanAccount}>
                {' '}
                Login
              </Text>
            </Text>
            <Text style={styles.footer}>
              © 2023 LearnEazee. All rights reserved.
            </Text>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
      <Indicator isVisible={isLoaderVisible} />
    </View>
  );
};
export default Signupscreen;
