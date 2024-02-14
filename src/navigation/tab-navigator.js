import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Navigation from './navigation-constants';
import Icons from 'react-native-vector-icons/Feather';
import CartIcon from 'react-native-vector-icons/Ionicons';
import DashboardScreen from '../screen/dashboard-screen';
import Marketplace from '../screen/all-categories-screen';
import Library from '../screen/library-screen/Library';
import {IMAGES} from '../../utils';
import CartScreen from '../screen/cart-screen';
import COLORS from '../../utils/constants';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.pink,
        tabBarInactiveTintColor: COLORS.pink3,
        headerShown: false,
      }}>
      <Tab.Screen
        name={Navigation.DASHBOARD}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({size, color}) => (
            <Icons name="home" size={size} color={color} />
          ),
        }}
        component={DashboardScreen}
      />
      <Tab.Screen
        name={Navigation.MARKETPLACE}
        options={{
          tabBarLabel: 'Marketplace',
          tabBarIcon: ({size, color, focused}) => (
            <>
              {!focused && (
                <Image
                  source={IMAGES.marketplaceLogoInactive}
                  style={{height: size, width: size}}
                />
              )}
              {focused && (
                <Image
                  source={IMAGES.marketplaceLogoActive}
                  style={{height: size, width: size}}
                />
              )}
            </>
          ),
        }}
        component={Marketplace}
      />
      <Tab.Screen
        name={Navigation.LIBRARY}
        options={{
          tabBarLabel: 'Library',
          tabBarIcon: ({size,focused}) => (
            <>
              {focused && (
                <Image
                  source={IMAGES.libraryIconActive}
                  style={{height: size, width: size}}
                />
              )}
              {!focused && (
                <Image
                  source={IMAGES.libraryIconInactive}
                  style={{height: size, width: size}}
                />
              )}
            </>
          ),
        }}
        component={Library}
      />
      <Tab.Screen
        name={Navigation.CART}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({size, color}) => (
            <CartIcon name="cart-outline" size={size} color={color} />
          ),
        }}
        component={CartScreen}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
