import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, loadMovies }) => {
    const flRef = useRef();

    useEffect(() => {
        if (flRef) {
            flRef.current.scrollToOffset(0);
        }
    }, [movies]);

    return (
        <View style={styles.container}>
            <FlatList
                ref={flRef}
                onEndReachedThreshold={0.01}
                onEndReached={loadMovies}
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
