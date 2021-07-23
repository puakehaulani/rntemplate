import React from 'react';
import { Image, StyleSheet, PixelRatio } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import colors from '../constants/colors';

const imgSrc = { uri: "https://via.placeholder.com/150" };
const styles = StyleSheet.create({
    image: {
        height: PixelRatio.getPixelSizeForLayoutSize(130),
        width: "100%"
    }
});

export default () => {

    return (
        <Onboarding
            // onDone={ }
            showSkip={false}
            showNext={false}
            pages={[
                {
                    backgroundColor: colors.green,
                    image: <Image source={imgSrc} style={styles.image} />,
                    title: "First Slide",
                    subtitle: "Text here"
                },
                {
                    backgroundColor: colors.white,
                    image: <Image source={imgSrc} style={styles.image} />,
                    title: "Second Slide",
                    subtitle: "Text here"
                },
                {
                    backgroundColor: colors.green,
                    image: <Image source={imgSrc} style={styles.image} />,
                    title: "Third Slide",
                    subtitle: "Text here"
                }
            ]}
        />
    )
}