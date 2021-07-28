import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Onboarding from '../screens/Onboarding';

const MainStack = createStackNavigator();
const MainStackScreen = () => (
    <MainStack.Navigator>
        <MainStack.Screen
            name="Onboarding"
            component={Onboarding}
            options={{ headerShown: false }}
        />
        <MainStack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
        />
    </MainStack.Navigator>
);


export default () => (
    <MainStackScreen />
);