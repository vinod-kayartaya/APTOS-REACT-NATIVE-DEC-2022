import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import CartList from '../components/CartList';
import Button from '../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart } from '../redux/actions';

const CartScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const { cart } = useSelector((store) => store.cartState);

    return (
        <SafeAreaView>
            <CartList />
            <View style={{ paddingHorizontal: 20 }}>
                {cart && cart.length > 0 ? (
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Button
                            bg='tomato'
                            title='Empty cart'
                            onPress={() => dispatch(emptyCart())}
                        />
                        <Button
                            bg='darkolivegreen'
                            title='Checkout'
                            onPress={() => navigation.navigate('OrderSummary')}
                        />
                    </View>
                ) : (
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Text style={{ fontSize: 25, marginVertical: 150 }}>
                            Nothing in your cart!!
                        </Text>
                        <Button
                            bg='green'
                            title='Start shopping'
                            onPress={() => navigation.navigate('Home')}
                        />
                    </View>
                )}
            </View>
        </SafeAreaView>
    );
};

export default CartScreen;

const styles = StyleSheet.create({});
