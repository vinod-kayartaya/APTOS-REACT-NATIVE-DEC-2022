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
import ItemForm from './src/components/ItemForm';
import COLORS from './src/constants/COLORS';

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

    // just for the sake of demo, we are using regular function instead of arrow function
    function addItem(item) {
        item.id =
            items.length === 0 ? 1 : Math.max(...items.map((i) => i.id)) + 1;
        setItems((oldItems) => [...oldItems, item]);
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
            <View style={{ flex: 1, paddingHorizontal: 10 }}>
                <View style={{ flex: 1 }}>
                    <ItemList
                        items={items}
                        deleteItem={deleteItem}
                        toggleInCart={toggleInCart}
                    />
                </View>
                <ItemForm addItem={addItem.bind(this)} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? sb.currentHeight : 0,
        backgroundColor: COLORS.lightgrey,
    },
});
