import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import COLORS from '../constants/COLORS';
import { loadItems } from '../redux/actions';
import Item from './Item';

const ItemList = () => {
    const { items } = useSelector((store) => store.itemsReducer);
    const dispatch = useDispatch();

    const itemsJsx = items.map((item) => <Item key={item.id} item={item} />);

    useEffect(() => {
        // loadItems().then((action) => dispatch(action));
        loadItems().then(dispatch);
    }, []); // empty array for dependency list --> useEffect callback is executed only once during the rendering of the component.

    return (
        <View>
            {items && items.length > 0 && (
                <Text style={styles.text}>Items to buy this weekend:</Text>
            )}
            {itemsJsx}

            {items &&
                items.length > 0 &&
                items.filter((item) => !item.inCart).length === 0 && (
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
                                {
                                    color: COLORS.green,
                                    fontFamily: 'Comfortaa',
                                },
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
