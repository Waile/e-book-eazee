import { Text, View, FlatList, ScrollView, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import Footer from '../../components/footer';
import PoliciesListItem from '../../components/policies-list-item';
import CookiesPolicy from '../../components/policies/cookies-policy';
import TermAndConditions from '../../components/policies/terms-and-conditions';
import IntellectualProperty from '../../components/policies/intellectual-property';
import PrivacyPolicies from '../../components/policies/privacy-policy';

const PrivacyPolicy = () => {
    const [selectedItemId, setSelectedItemId] = useState(3);
    const tabs = [
        {
            id: 1,
            name: 'Privacy Policy',
        },
        {
            id: 2,
            name: 'Cookies Policy',
        },
        {
            id: 3,
            name: 'Terms & Conditions',
        },
        {
            id: 4,
            name: 'Intellectual Property',
        },
    ];
    const onItemPress = (id) => {
        setSelectedItemId(id);
    }
    return (
        <View style={styles.mainContainer}>
            <View style={styles.flatListWrapper}>
                <View style={styles.listContainer}>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => item.id}
                        data={tabs}
                        renderItem={({ item }) => (
                            <PoliciesListItem
                                onItemPress={onItemPress}
                                isActive={item.id === selectedItemId ? true : false}
                                item={item}
                            />
                        )}
                    />
                </View>
            </View>
            <View style={styles.contentContainer}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={styles.scrollContainer}>
                        {selectedItemId === 1 && <PrivacyPolicies />}
                        {selectedItemId === 2 && <CookiesPolicy />}
                        {selectedItemId === 3 && <TermAndConditions />}
                        {selectedItemId === 4 && <IntellectualProperty />}
                    </View>
                    <Footer />
                </ScrollView>
            </View>
        </View>
    );
};

export default PrivacyPolicy;
