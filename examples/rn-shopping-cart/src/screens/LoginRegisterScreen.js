import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import Button from '../components/Button';
import { auth } from '../../firebase';
import { useDispatch } from 'react-redux';
import { LOGIN, REGISTER } from '../redux/action-types';

const LoginRegisterScreen = ({ navigation }) => {
    const [user, setUser] = useState({ email: '', password: '' });
    const dispatch = useDispatch();

    const loginHandler = () => {
        let { email, password } = user;
        auth.signInWithEmailAndPassword(email, password)
            .then((userCreds) => {
                dispatch({ type: LOGIN, payload: userCreds.user });
                navigation.navigate('Home');
            })
            .catch((err) => alert(err.message));
    };

    const registerHandler = () => {
        let { email, password } = user;

        auth.createUserWithEmailAndPassword(email, password)
            .then((userCreds) => {
                dispatch({ type: REGISTER, payload: userCreds.user });
                navigation.navigate('Home');
            })
            .catch((err) => alert(err.message));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Login or signup</Text>
            <TextInput
                value={user.email}
                onChangeText={(text) => setUser({ ...user, email: text })}
                placeholder='enter email address'
                style={styles.textinput}
            />
            <TextInput
                value={user.password}
                onChangeText={(text) => setUser({ ...user, password: text })}
                secureTextEntry
                placeholder='enter password'
                style={styles.textinput}
            />
            <View style={{ flexDirection: 'row' }}>
                <Button
                    title='Login'
                    bg='darkolivegreen'
                    onPress={loginHandler}
                />
                <Button title='Sign up' bg='olive' onPress={registerHandler} />
            </View>
        </View>
    );
};

export default LoginRegisterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontSize: 25,
    },
    textinput: {
        fontSize: 18,
        width: '80%',
        backgroundColor: 'white',
        padding: 10,
        margin: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
});
