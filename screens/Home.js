import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { icons } from "../constants";

const Home = () => {
    return (
        <View style={styles.container}>
            <Text>You are in Home Buddy !!</Text>

        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});