import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import COLORS from '../constants/COLORS';

import { FontAwesome, AntDesign } from '@expo/vector-icons';

const Item = ({ item, deleteItem, toggleInCart }) => {
    return (
        <View
            style={[
                styles.container,
                { backgroundColor: item.inCart ? COLORS.light : COLORS.white },
            ]}
        >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity
                    style={{ marginRight: 10 }}
                    onPress={() => toggleInCart(item.id)}
                >
                    <AntDesign
                        name={item.inCart ? 'checkcircleo' : 'pluscircleo'}
                        size={20}
                        color={item.inCart ? COLORS.green : COLORS.blue}
                    />
                </TouchableOpacity>
                <Text style={[styles.text]}>{item.text}</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={[styles.text]}>{item.quantity}</Text>
                <TouchableOpacity
                    style={{ marginLeft: 10 }}
                    onPress={() => deleteItem(item.id)}
                >
                    <FontAwesome name='trash' size={20} color={COLORS.red} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Item;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderColor: COLORS.red,
        borderWidth: 1,
        marginHorizontal: 6,
        marginVertical: 3,
        borderRadius: 5,
    },
    text: {
        fontSize: 20,
    },
});
