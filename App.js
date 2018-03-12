import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class App extends React.Component {

    state = {
        data: ["hello", "world"]
    };

    componentDidMount() {
        // Need babel plugin for this
        // const data = await fetch("http://api.com");
        // const result = await data.json();
        // this.setState({data: result});  // Reason for using set State is to refreshState.
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.data.map((item, index) => <Text key={index}>{item}</Text>)}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
