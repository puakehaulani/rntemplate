import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Onboarding from '../screens/Onboarding';

const OnboardingStack = createStackNavigator();
const OnboardingStackScreen = () => (
    <OnboardingStack.Navigator>
        <OnboardingStack.Screen
            name="Onboarding"
            component={Onboarding}
            options={{ headerShown: false }}
        />
        <OnboardingStack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: true }}
        />
    </OnboardingStack.Navigator>
);

export default () => (
    <OnboardingStackScreen />
);