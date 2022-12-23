import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decreaseQuantityInCart } from '../redux/actions';

const AddToCart = ({ lineItem }) => {
    const { item, quantity } = lineItem;
    const dispatch = useDispatch();
    return (
        <View
            style={[
                {
                    alignSelf: 'flex-end',
                    width: 100,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginRight: 10,
                },
            ]}
        >
            <TouchableOpacity
                onPress={() => dispatch(decreaseQuantityInCart(item))}
                style={{
                    backgroundColor: 'tomato',
                    padding: 10,
                    borderRadius: 5,
                }}
            >
                <AntDesign name='minus' size={20} color='white' />
            </TouchableOpacity>
            <Text
                style={{
                    fontSize: 20,
                    backgroundColor: 'white',
                    paddingHorizontal: 10,
                }}
            >
                {quantity}
            </Text>
            <TouchableOpacity
                onPress={() => dispatch(addToCart(item))}
                style={{
                    backgroundColor: 'tomato',
                    padding: 10,
                    borderRadius: 5,
                }}
            >
                <AntDesign name='plus' size={20} color='white' />
            </TouchableOpacity>
        </View>
    );
};

const ProductDetail = ({ lineItem }) => {
    const { item, quantity } = lineItem;

    return (
        <View style={styles.productContainer}>
            <Image source={{ uri: item.image }} style={styles.productImage} />

            <View style={{ flex: 1 }}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.qpu}>{item.quantityPerUnit}</Text>
                <Text style={styles.price}>₹ {item.unitPrice}</Text>
                <AddToCart lineItem={lineItem} />
            </View>
        </View>
    );
};

const CartList = () => {
    const { cart } = useSelector((store) => store.cartState);
    return (
        <View style={styles.container}>
            <FlatList
                style={{ width: '100%' }}
                data={cart}
                renderItem={({ item }) => <ProductDetail lineItem={item} />}
                keyExtractor={(item, index) => index}
            />
        </View>
    );
};

export default CartList;

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    productContainer: {
        flexDirection: 'row',
        borderColor: '#888',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        backgroundColor: 'white',
        margin: 2,
    },
    productName: {
        fontSize: 20,
    },
    productImage: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginRight: 20,
    },
    qpu: {
        fontSize: 15,
        color: '#888',
        marginTop: 10,
    },
    price: {
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold',
    },
    addToCart: {
        width: 100,
        backgroundColor: 'tomato',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 20,
        alignSelf: 'flex-end',
    },
    addToCartText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
});
