import React from 'react';
import {
    View,
    Text,
    StatusBar
} from 'react-native';
import styles from '../constants/styles';

export default () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text>Profile Page</Text>
        </View>
    )
}