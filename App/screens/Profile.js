import React from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Text,
    StatusBar
} from 'react-native';
import colors from '../constants/colors';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text>Profile Page</Text>
        </View>
    )
}