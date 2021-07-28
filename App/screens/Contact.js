import React from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Text,
    StatusBar,
    Button
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
            <Text>Contact Page</Text>
        </View>
    )
}