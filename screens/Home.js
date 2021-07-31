import React from "react";
import { View, Text, Image, StyleSheet,Button } from "react-native";
import { icons } from "../constants";

const Home = (props) => {
    return (
        <View style={styles.container}>
            <Text>You are in Home Buddy !!</Text>
            <Button 
                title="Explore"
                onPress={() => props.navigation.navigate('Explore')}
            />
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