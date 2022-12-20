import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

const TextInputDemo = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('friend');
    const updateUsername = () => {
        setUsername(name || 'friend');
        setName('');
    };
    return (
        <View style={styles.container}>
            <View style={{ width: '100%', flexDirection: 'row' }}>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    placeholder='enter your name'
                />
                <Button title='Update name' onPress={updateUsername} />
            </View>

            <Text style={styles.message}>Hello, {username}!</Text>
        </View>
    );
};

export default TextInputDemo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-around', // affects main axis
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    message: {
        fontSize: 28,
    },
    input: {
        flex: 1,
        fontSize: 16,
        borderColor: '#aba4a4',
        borderWidth: 1,
        padding: 10,
        marginRight: 20,
    },
});
