import { Text, StyleSheet, View, Button } from 'react-native';
import { Component } from 'react';

export default class NumbersApp extends Component {
    state = { num: 200 };

    doubleIt = () => {
        // use the inherited method called setState
        this.setState({ num: this.state.num * 2 });
    };
    squareIt = () => {
        // use the inherited method called setState
        this.setState({ num: this.state.num * this.state.num });
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Value of num is {this.state.num}
                </Text>

                <Button title='Double it' onPress={this.doubleIt} />
                <Button title='Square it' onPress={this.squareIt} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 32,
    },
});
