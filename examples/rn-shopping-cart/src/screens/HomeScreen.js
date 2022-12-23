import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ProductList from '../components/ProductList';
import products from '../data/products.json';

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <ProductList products={products} />
        </SafeAreaView>
    );
};

export default HomeScreen;
