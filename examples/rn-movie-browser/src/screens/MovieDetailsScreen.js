import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const baseUrl = 'https://www.omdbapi.com/?apikey=aa9e49f&i=';

const MovieDetails = ({ movie, navigation }) => (
    <View style={{ flex: 1, width: '100%', padding: 10 }}>
        <View style={{ flexDirection: 'row' }}>
            <Image
                source={{ uri: movie.Poster }}
                style={{
                    width: 125,
                    height: 200,
                    borderRadius: 5,
                    marginRight: 10,
                }}
            />
            <View>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
                    {movie.Title}
                </Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text
                        style={{ color: '#888', fontSize: 18, marginRight: 10 }}
                    >
                        {movie.Year}
                    </Text>
                    {movie.Runtime !== 'N/A' && (
                        <Text style={{ color: '#888', fontSize: 18 }}>
                            (Runtime: {movie.Runtime})
                        </Text>
                    )}
                </View>
                <Text style={{ color: '#888', fontSize: 18 }}>
                    {movie.Genre}
                </Text>
            </View>
        </View>
        <ScrollView style={{ flex: 1, marginTop: 20 }}>
            <Text style={{ fontSize: 20 }}>{movie.Plot}</Text>
        </ScrollView>
        <View
            style={{
                marginBottom: 40,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                    backgroundColor: 'black',
                    borderRadius: 10,
                    width: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text style={{ color: 'white', fontSize: 20, padding: 10 }}>
                    Back
                </Text>
            </TouchableOpacity>
        </View>
    </View>
);

const MovieDetailsScreen = ({ route, navigation }) => {
    const [movie, setMovie] = useState(null);
    const { imdbID } = route.params;

    useEffect(() => {
        fetch(baseUrl + imdbID)
            .then((resp) => resp.json())
            .then(setMovie);
    }, [imdbID]);

    return (
        <View style={styles.container}>
            {movie ? (
                <MovieDetails navigation={navigation} movie={movie} />
            ) : (
                <ActivityIndicator size='large' />
            )}
        </View>
    );
};

export default MovieDetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 80,
    },
});
