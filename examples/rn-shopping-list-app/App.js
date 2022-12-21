import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    StatusBar as sb,
    Platform,
    View,
    ScrollView,
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
    const [itemForEdit, setItemForEdit] = useState({});

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

    const updateItem = (item) => {
        const itemsCopy = [...items];
        const index = itemsCopy.findIndex((i) => i.id === item.id);
        if (index === -1) return;
        itemsCopy[index] = item;
        setItems(itemsCopy);
    };
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent />
            <View style={{ flex: 1, paddingHorizontal: 10 }}>
                <ScrollView style={{ flex: 1 }}>
                    <ItemList
                        items={items}
                        deleteItem={deleteItem}
                        toggleInCart={toggleInCart}
                        setItemForEdit={setItemForEdit}
                    />
                </ScrollView>
                <ItemForm
                    itemForEdit={itemForEdit}
                    addItem={addItem.bind(this)} // .bind(this) is required only for regular function
                    updateItem={updateItem}
                />
            </View>
        </SafeAreaView>
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
