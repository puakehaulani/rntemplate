import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Settings from '../screens/Settings';
import Profile from '../screens/Profile';

const MainStack = createStackNavigator();
const MainStackScreen = () => (
    <MainStack.Navigator>
        <MainStack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: true }}
        />
        <MainStack.Screen
            name="Settings"
            component={Settings}
            options={{ headerShown: true }}
        />
        <MainStack.Screen
            name="Profile"
            component={Profile}
            options={{ headerShown: true }}
        />
    </MainStack.Navigator>
);

export default () => (
    <MainStackScreen />
);