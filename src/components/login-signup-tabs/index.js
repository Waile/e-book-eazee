import { Text, View, TouchableWithoutFeedback } from 'react-native'
import styles from './styles'
import React, { useState } from 'react'
import Loginscreen from '../../screen/login-screen';
import Signupscreen from '../../screen/signupscreen';

const TabScreen = () => {

    const [isSignupVisible, setIsSignupVisible] = useState(true);

    return (
        <View style={styles.mainContainer}>
            <View style={styles.tabContainer}>
                <TouchableWithoutFeedback onPress={() => setIsSignupVisible(true)}>
                    <View style={[styles.tab, isSignupVisible === true && styles.activeTab]}>
                        <Text style={[styles.tabText, isSignupVisible === true && styles.activeTabText]}>Sign Up</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => setIsSignupVisible(false)}>
                    <View style={[styles.tab, isSignupVisible === false && styles.activeTab]}>
                        <Text style={[styles.tabText, isSignupVisible === false && styles.activeTabText]}>Login</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            {!isSignupVisible ? <Loginscreen onSignupPress={setIsSignupVisible} /> :
                <Signupscreen onLoginPress={setIsSignupVisible} />}

        </View>
    )
}

export default TabScreen