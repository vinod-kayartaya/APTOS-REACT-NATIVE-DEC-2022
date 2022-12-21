import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('MovieList');
                }}
            >
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>click to have fun</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
    },
    buttonContainer: {
        backgroundColor: 'navy',
        width: 200,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
