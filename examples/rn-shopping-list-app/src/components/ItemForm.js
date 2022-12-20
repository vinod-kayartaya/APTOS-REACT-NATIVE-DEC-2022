import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import COLORS from '../constants/COLORS';
import Button from './Button';

const ItemForm = ({ addItem }) => {
    const [item, setItem] = useState({});

    const buttonHandler = () => {
        if (!item.text) return;

        addItem(item);
        setItem({});
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add an item to your shopping list</Text>

            <TextInput
                value={item.text}
                onChangeText={(value) => {
                    setItem((oldItem) => ({ ...oldItem, text: value }));
                }}
                style={styles.input}
                placeholder='item name'
            />
            <TextInput
                value={item.quantity}
                onChangeText={(value) => {
                    setItem((oldItem) => ({ ...oldItem, quantity: value }));
                }}
                style={styles.input}
                placeholder='item quantity'
            />

            <View style={styles.buttonsContainer}>
                <Button
                    icon='check'
                    title='Add'
                    bgcolor='powderblue'
                    color='navy'
                    onPress={buttonHandler}
                />
                <Button
                    icon='exclamation'
                    title='Cancel'
                    bgcolor='red'
                    color='white'
                    onPress={() => setItem({})}
                />
            </View>
        </View>
    );
};

export default ItemForm;

const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '80%',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        alignSelf: 'center',
        padding: 16,
        fontWeight: 'bold',
    },
    input: {
        borderColor: COLORS.grey,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 5,
        width: '80%',
        backgroundColor: COLORS.white,
    },
});
