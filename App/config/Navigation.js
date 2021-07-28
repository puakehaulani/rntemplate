import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainStack from './MainStack';

export default () => (
    <NavigationContainer>
        <MainStack />
    </NavigationContainer>
);