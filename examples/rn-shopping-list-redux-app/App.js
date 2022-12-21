import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    SafeAreaView,
    StatusBar as sb,
    Platform,
    View,
    ScrollView,
} from 'react-native';
import ItemList from './src/components/ItemList';
import ItemForm from './src/components/ItemForm';
import COLORS from './src/constants/COLORS';

import store from './src/redux/store';
import { Provider } from 'react-redux';
import { useFonts } from 'expo-font';

export default function App() {
    // load the fonts, and until then don't display any content
    const [fontsLoaded] = useFonts({
        Comfortaa: require('./assets/fonts/Comfortaa/Comfortaa-VariableFont_wght.ttf'),
        RubikGemstones: require('./assets/fonts/Rubik_Gemstones/RubikGemstones-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <Provider store={store}>
            <SafeAreaView style={styles.container}>
                <StatusBar translucent />
                <View style={{ flex: 1, paddingHorizontal: 10 }}>
                    <ScrollView style={{ flex: 1 }}>
                        <ItemList />
                    </ScrollView>
                    <ItemForm />
                </View>
            </SafeAreaView>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? sb.currentHeight : 0,
        paddingBottom: Platform.OS === 'android' ? 20 : 0,
        backgroundColor: COLORS.lightgrey,
    },
});
