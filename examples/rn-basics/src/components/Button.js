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
// export default Button;

class ClsButton extends Component {
    // this.props is a built in (or inherited variable), representing the
    // props passed by the parent

    render() {
        // object destructuring
        const { bg, title, color, onPress } = this.props;
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
    }
}

export default ClsButton;

const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        margin: 5,
    },
    text: {
        fontSize: 25,
    },
});
