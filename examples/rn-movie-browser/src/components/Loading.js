import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Loading = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../../assets/loading.png')}
            />
        </View>
    );
};

export default Loading;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 200,
        resizeMode: 'cover',
    },
});
