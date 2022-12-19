import { Button, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

// rnfes

const CounterApp = () => {
    // let count = 100; // just a local variable of the function CounterApp, not the 'state'

    const [count, setCount] = useState(200); // we are telling react that 200 is the initial state of this component
    // React will hold on to this value, and gives the same along with a function to change the state.
    // In other words, the return value from useState() is an array of exactly 2 element,
    // the first one is the current state, and the second is a setter for the state.
    // Typically we use the format xyz and setXyz to receive the same.

    const incr = () => {
        // count++; // do not mutate the state, use the setter for the same.
        setCount(count + 1);
        // React will take the new value and updates the state corresponding to this component,
        // and very importantly, re-renders the component
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Value of count is {count}</Text>
            <Button title='Increment' onPress={incr} />
            <Button title='Reset' color='red' onPress={() => setCount(200)} />
        </View>
    );
};

export default CounterApp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 32,
    },
});
