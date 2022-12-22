import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const MovieCard = ({ movie }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() =>
                navigation.navigate('MovieDetails', { imdbID: movie.imdbID })
            }
        >
            <Image
                source={{ uri: movie.Poster }}
                style={{
                    width: '100%',
                    height: 550,
                    resizeMode: 'cover',
                }}
            />
        </TouchableOpacity>
    );
};

export default MovieCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: 10,
    },
});
