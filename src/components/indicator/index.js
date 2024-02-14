import React from 'react';
import Modal from 'react-native-modal';
import { View } from 'react-native';
import {
    BallIndicator
} from 'react-native-indicators';

const Indicator = ({ isVisible }) => {
    return (
        <Modal animationIn="fadeIn" animationOut="fadeOut" isVisible={isVisible}>
            <View>
                <BallIndicator color="white" />
            </View>
        </Modal>
    );
};

export default Indicator;