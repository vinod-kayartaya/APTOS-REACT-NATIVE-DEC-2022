import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    StatusBar as sb,
    Platform,
    View,
} from 'react-native';
import ItemList from './src/components/ItemList';

// npm i expo-font
import { useFonts } from 'expo-font';

const initialDummyData = [
    { id: 1, text: 'Table salt', quantity: '2 kg', inCart: true },
    { id: 2, text: 'Safola gold oil', quantity: '5 ltr' },
    { id: 3, text: 'Paper clips', inCart: false },
    { id: 4, text: 'Cat food', quantity: '1 kg', inCart: true },
];

export default function App() {
    const [items, setItems] = useState(initialDummyData);
    // load the fonts, and until then don't display any content
    const [fontsLoaded] = useFonts({
        Comfortaa: require('./assets/fonts/Comfortaa/Comfortaa-VariableFont_wght.ttf'),
        RubikGemstones: require('./assets/fonts/Rubik_Gemstones/RubikGemstones-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    // define as an arrow function
    const deleteItem = (id) => {
        const result = items.filter((item) => item.id !== id);
        setItems(result);
    };

    const toggleInCart = (id) => {
        // make a local copy of items
        const itemsCopy = [...items];
        // find the item
        const tmpItem = itemsCopy.find((item) => item.id === id);
        if (!tmpItem) return;

        tmpItem.inCart = !tmpItem.inCart;
        setItems(itemsCopy);
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent />
            <View style={{ paddingHorizontal: 10 }}>
                <ItemList
                    items={items}
                    deleteItem={deleteItem}
                    toggleInCart={toggleInCart}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? sb.currentHeight : 0,
    },
});
