import React from 'react';
import { StyleSheet, PixelRatio, ScrollView, Text, View, Image, SafeAreaView, StatusBar, Dimensions } from 'react-native';

import colors from '../constants/colors';

const imgSrc = { uri: "https://via.placeholder.com/150" };
const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    page: {
        height: height,
        width: width,
    },
    img: {
        height: PixelRatio.getPixelSizeForLayoutSize(130),
        width: "100%"
    },
    wrapper: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 30
    },
    header: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 15
    },
    p: {
        fontSize: 15
    }
});

export default () => {

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.container}
                    horizontal={true}
                    pagingEnabled={true}>

                    <View style={styles.page}>
                        <Image style={styles.img} source={imgSrc} />
                        <View style={styles.wrapper}>
                            <Text style={styles.header}>First page</Text>
                            <Text style={styles.p}>Content text</Text>
                        </View>
                    </View>

                    <View style={styles.page}>
                        <Image style={styles.img} source={imgSrc} />
                        <View style={styles.wrapper}>
                            <Text style={styles.header}>Second page</Text>
                            <Text style={styles.p}>Content text</Text>
                        </View>
                    </View>

                    <View style={styles.page}>
                        <Image style={styles.img} source={imgSrc} />
                        <View style={styles.wrapper}>
                            <Text style={styles.header}>Third page</Text>
                            <Text style={styles.p}>Content text</Text>
                        </View>
                    </View>

                </ScrollView>

            </SafeAreaView>
        </>
    )
}