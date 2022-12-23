import { Text, StyleSheet, View, SafeAreaView, Pressable } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import { removeFromCart } from '../redux/actions';

class OrderSummaryScreen extends Component {
    render() {
        const { cart } = this.props.cartState;
        const { remove } = this.props;
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <Text style={styles.heading}>Order Summary</Text>

                    {cart &&
                        cart.map((lineItem) => (
                            <View
                                style={styles.summaryContainer}
                                key={lineItem.item.id}
                            >
                                <View style={{ flex: 3 }}>
                                    <Text style={[styles.summaryField]}>
                                        {lineItem.item.name}
                                    </Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text
                                        style={[
                                            styles.summaryField,
                                            { alignSelf: 'flex-end' },
                                        ]}
                                    >
                                        {lineItem.item.unitPrice.toFixed(2)}
                                    </Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text
                                        style={[
                                            styles.summaryField,
                                            { alignSelf: 'flex-end' },
                                        ]}
                                    >
                                        {lineItem.quantity}
                                    </Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text
                                        style={[
                                            styles.summaryField,
                                            { alignSelf: 'flex-end' },
                                        ]}
                                    >
                                        {(
                                            lineItem.item.unitPrice *
                                            lineItem.quantity
                                        ).toFixed(2)}
                                    </Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Pressable
                                        onPress={() => remove(lineItem.item)}
                                    >
                                        <FontAwesome
                                            style={{ alignSelf: 'center' }}
                                            name='trash-o'
                                            color='red'
                                        />
                                    </Pressable>
                                </View>
                            </View>
                        ))}
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    },
    heading: {
        fontSize: 25,
    },
    summaryContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    summaryField: {
        padding: 5,
    },
});

// 'connect' from 'react-redux' is a higher-order-function,
// which takes a component and returns another component (either same or modified or new)
const mapStateToProps = (store) => ({ cartState: store.cartState });
const mapActionsToProps = {
    remove: removeFromCart,
};

export default connect(mapStateToProps, mapActionsToProps)(OrderSummaryScreen);
// export default OrderSummaryScreen;
