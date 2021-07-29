import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

import Home from '../screens/Home';
import colors from '../constants/colors';

const Tab = createBottomTabNavigator();
const TabNav = () => (
    <Tab.Navigator initialRouteName="Home" tabBarOptions={{
        labelStyle: {
            color: colors.white,
            fontSize: 12,
        },
        style: {
            backgroundColor: colors.green,
        },
        keyboardHidesTabBar: true
    }}>
        <Tab.Screen name="Home" component={Home} options={{
            tabBarIcon: (item) => (<AntDesign name="home" size={30} color={colors.white} />)
        }} />

    </Tab.Navigator>
)
export default () => (
    <TabNav />
);