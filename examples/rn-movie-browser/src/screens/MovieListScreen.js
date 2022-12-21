import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';

const baseUrl = 'https://www.omdbapi.com/?apikey=aa9e49f&s=';

const MovieListScreen = () => {
    const [searchText, setSearchText] = useState('');
    const [movies, setMovies] = useState([]);

    const submitHandler = async () => {
        const resp = await fetch(baseUrl + searchText);
        const data = await resp.json();
        setMovies(data.Search);
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='search by title'
                    value={searchText}
                    onChangeText={setSearchText}
                    onSubmitEditing={submitHandler}
                />

                <TouchableOpacity onPress={submitHandler}>
                    <AntDesign name='search1' size={30} color='#777' />
                </TouchableOpacity>
            </View>
            <View style={[{ flex: 1 }]}>
                <Text>{JSON.stringify(movies)}</Text>
            </View>
        </View>
    );
};

export default MovieListScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        backgroundColor: 'white',
        flex: 1,
        fontSize: 20,
        padding: 5,
        marginRight: 5,
        borderRadius: 5,
        borderBottomColor: '#888',
        borderBottomWidth: 1,
    },
});
