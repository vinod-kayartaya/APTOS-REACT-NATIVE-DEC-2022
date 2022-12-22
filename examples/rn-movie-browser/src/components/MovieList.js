import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
    return (
        <View style={styles.container}>
            <FlatList
                onEndReachedThreshold={0.01}
                onEndReached={(info) => {
                    console.log('End reached with info: ', info);
                }}
                data={movies}
                keyExtractor={(item) => item.imdbID}
                renderItem={({ item }) => <MovieCard movie={item} />}
            />
        </View>
    );
};

export default MovieList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        padding: 10,
    },
});
