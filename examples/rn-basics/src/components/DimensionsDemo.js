import { Dimensions, View } from 'react-native';
import React from 'react';

const { width, height } = Dimensions.get('screen');
console.log('width', width, 'height', height);

const DimensionsDemo = () => {
    return (
        <View
            style={{
                borderColor: 'black',
                borderWidth: 1,
                height: '100%',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <View
                style={{
                    width: 100,
                    height: 100,
                    backgroundColor: 'skyblue',
                }}
            />
            <View
                style={{
                    width: 50,
                    height: 50,
                    backgroundColor: 'powderblue',
                }}
            />
            <View
                style={{
                    width: '50%',
                    height: '10%',
                    backgroundColor: 'red',
                }}
            />
            <View
                style={{
                    width: width / 4,
                    height: height / 4,
                    backgroundColor: 'pink',
                }}
            />
        </View>
    );
};

export default DimensionsDemo;
