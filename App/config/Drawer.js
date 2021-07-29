import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";

import MainStack from './MainStack';
import Contact from '../screens/Contact';

const Drawer = createDrawerNavigator();
const DrawerNav = () => (
    <Drawer.Navigator>
        <Drawer.Screen name="Home" component={MainStack} />
        <Drawer.Screen name="Contact" component={Contact} />
    </Drawer.Navigator>
)

export default () => (
    <DrawerNav />
)
