import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DimensionsDemo from './src/components/DimensionsDemo';
import FlexboxDemo from './src/components/FlexboxDemo';
import TextInputDemo from './src/components/TextInputDemo';
// import Button from './src/components/Button';
// import NumbersApp from './src/components/NumbersApp';
// import CounterApp from './src/components/CounterApp';

function App() {
    return (
        <View style={styles.container}>
            {/* <CounterApp /> */}
            {/* <NumbersApp /> */}
            {/* <Button
                title='Ok'
                bg='gold'
                color='brown'
                onPress={() => {
                    alert('OK');
                }}
            />
            <Button
                color='crimson'
                onPress={() => {
                    alert('Cancel');
                }}
                title='Cancel'
            />
            <Button
                title='Help'
                bg='coral'
                onPress={() => {
                    alert('Help');
                }}
            /> */}
            {/* <DimensionsDemo /> */}
            {/* <FlexboxDemo /> */}
            <TextInputDemo />
        </View>
    );
}

class CApp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Hello, world!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#000',
        fontSize: 30,
    },
});

export default App;
