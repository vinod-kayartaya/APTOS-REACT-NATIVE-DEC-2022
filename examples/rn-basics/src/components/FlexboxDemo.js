import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const FlexboxDemo = () => {
    return (
        <View style={styles.container}>
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'gold',
                }}
            />
            <View
                style={{
                    flex: 2,
                    backgroundColor: 'greenyellow',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                }}
            >
                <View style={[styles.box, { backgroundColor: 'green' }]} />
                <View style={[styles.box, { backgroundColor: 'red' }]} />
                <View style={[styles.box, { backgroundColor: 'blue' }]} />
            </View>
            <View
                style={{
                    flex: 3,
                    backgroundColor: 'lightblue',
                    flexDirection: 'column', // main axis is vertical, cross axis is horizontal
                    alignItems: 'center', // align center in the cross axis
                    justifyContent: 'center', // align center in the main axis
                }}
            >
                <View style={[styles.box, { backgroundColor: 'red' }]} />
                <View style={[styles.box, { backgroundColor: 'green' }]} />
                <View style={[styles.box, { backgroundColor: 'blue' }]} />
            </View>
        </View>
    );
};

export default FlexboxDemo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
    },
    box: {
        width: 75,
        height: 75,
    },
});
