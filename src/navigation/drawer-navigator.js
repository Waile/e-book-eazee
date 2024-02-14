import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Navigation from './navigation-constants'
import TabNavigator from './tab-navigator';
import Sidebar from '../screen/sidebar-screen';
// import Header from '../components/header';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {

  return (
      <Drawer.Navigator screenOptions={{headerShown:false}} drawerContent={()=><Sidebar/>} >
        <Drawer.Screen name={Navigation.TAB_NAVIGATOR} component={TabNavigator} options={{drawerLabel:"", drawerActiveBackgroundColor:"white"}} />
      </Drawer.Navigator>
  );
};

export default DrawerNavigator;
