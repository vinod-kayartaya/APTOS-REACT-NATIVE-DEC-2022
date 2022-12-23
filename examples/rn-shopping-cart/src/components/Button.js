import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';

const Button = ({ bg, color, title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View
                style={[
                    styles.container,
                    { backgroundColor: bg || 'powderblue' },
                ]}
            >
                <Text style={[styles.text, { color: color || 'white' }]}>
                    {title || 'Button'}
                </Text>
            </View>
        </TouchableOpacity>
    );
};
export default Button;

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: 5,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});
