import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import COLORS from '../constants/COLORS';
import { AntDesign } from '@expo/vector-icons';

const Button = ({
    icon,
    title,
    bgcolor = COLORS.grey,
    color = COLORS.black,
    onPress,
}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View
                style={[
                    { backgroundColor: bgcolor, borderColor: color },
                    styles.container,
                ]}
            >
                <AntDesign name={icon} color={color} size={18} />
                <Text
                    style={{ fontWeight: 'bold', color: color, fontSize: 18 }}
                >
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        borderWidth: 0.5,
        margin: 5,
    },
});
