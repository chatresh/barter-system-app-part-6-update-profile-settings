import React from 'react';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { DrawerItems , createDrawerNavigator } from 'react-navigation-drawer';

import customSideBarMenu from './components/customSideBarMenu'
import { BottomNavigator } from './components/BottomNavigator';
import  settings  from './components/settings';

import LoginScreen from './screens/LoginScreen'

expoet default const AppDrawerNavigator = createDrawerNavigator(
 {
   Home:{screen:BottomNavigator},
   Settings:{screen:settings}
 },
 {
        contentComponent: customSideBarMenu
    },
    {
        initialRouteName : "Home"
    }
 )