import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import MovieList from '../components/MovieList';

const baseUrl = 'https://www.omdbapi.com/?apikey=aa9e49f&s=';

const MovieListScreen = () => {
    const [searchText, setSearchText] = useState('');
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    const loadMovies = async () => {
        console.log('page is', page);
        const resp = await fetch(baseUrl + searchText + '&page=' + page);
        const data = await resp.json();
        setMovies((prevMovies) => [...prevMovies, ...data['Search']]);
        setPage(page + 1);
    };

    const submitHandler = async () => {
        const resp = await fetch(baseUrl + searchText + '&page=1');
        const data = await resp.json();
        setMovies(data['Search']);
        setPage(2);
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
            <View style={[{ flex: 1, width: '100%' }]}>
                <MovieList loadMovies={loadMovies} movies={movies} />
            </View>
        </View>
    );
};

export default MovieListScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
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
