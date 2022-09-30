import React from 'react';
import WelcomeScreen from '../screens/WelcomeScreen';
import CitiesScreen from '../screens/Cities';
import { createDrawerNavigator } from '@react-navigation/drawer';

const DrawerNavigation = createDrawerNavigator();
export default function DrawerNavigator() {
    return (
        <DrawerNavigation.Navigator>
            <DrawerNavigation.Screen name='Home' component={WelcomeScreen}/>
            <DrawerNavigation.Screen name='Cities' component={CitiesScreen}/>
        </DrawerNavigation.Navigator>
    )
}