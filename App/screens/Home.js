import React from 'react';
import {
    View,
    Text,
    StatusBar,
    Button
} from 'react-native';

import styles from '../constants/styles';

export default ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text>Home Page</Text>
            <Button title={"Settings"} onPress={() => navigation.navigate("Settings")} />
            <Button title={"Profile"} onPress={() => navigation.navigate("Profile")} />
        </View>
    )
}