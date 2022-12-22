import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import MovieDetailsScreen from './src/screens/MovieDetailsScreen';
import MovieListScreen from './src/screens/MovieListScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen
                    name='Home'
                    options={{ title: 'Movie Browser' }}
                    component={HomeScreen}
                />

                <Stack.Screen
                    name='MovieList'
                    component={MovieListScreen}
                    options={{ title: 'Movie List' }}
                />

                <Stack.Screen
                    name='MovieDetails'
                    component={MovieDetailsScreen}
                    options={{ title: 'Movie details', headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
