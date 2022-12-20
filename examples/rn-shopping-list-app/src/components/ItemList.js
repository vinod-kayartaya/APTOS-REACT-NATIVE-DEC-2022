import { StyleSheet, Text, View } from 'react-native';
import COLORS from '../constants/COLORS';
import Item from './Item';

const ItemList = ({ items, deleteItem, toggleInCart }) => {
    const itemsJsx = items.map((item) => (
        <Item
            key={item.id}
            item={item}
            deleteItem={deleteItem}
            toggleInCart={toggleInCart}
        />
    ));

    return (
        <View>
            {items && items.length > 0 && (
                <Text style={styles.text}>Items to buy this weekend:</Text>
            )}
            {itemsJsx}

            {items && items.filter((item) => !item.inCart).length === 0 && (
                <>
                    <Text
                        style={[
                            styles.text,
                            {
                                color: COLORS.orange,
                                fontFamily: 'RubikGemstones',
                                fontSize: 50,
                            },
                        ]}
                    >
                        Hooray 🥳
                    </Text>
                    <Text
                        style={[
                            styles.text,
                            { color: COLORS.green, fontFamily: 'Comfortaa' },
                        ]}
                    >
                        Let's go to billing!!
                    </Text>
                </>
            )}
        </View>
    );
};

export default ItemList;

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        alignSelf: 'center',
        padding: 20,
        fontWeight: 'bold',
    },
});
