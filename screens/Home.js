import React from "react";
import { View, Text,  ImageBackground, Image, TextInput, Dimensions, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {styles} from "../styles/styles"
import { icons, images } from "../constants";

const Home = (props) => {
    return (
        <ImageBackground
            source={images.BASICBACKGROUND}
            style={styles.baseBackground}
        >
            {/*  <Text>You are in Home Buddy !!</Text>
        <Button 
            title="Explore"
            onPress={() => props.navigation.navigate('Explore')}
        /> */}
            <View style={{flex : 1}}>
                <SafeAreaView
                    style = {styles.homeHeader}
                >
                    <View style={{flex : 1}}>
                        <Text style={styles.homeHeaderText}>Ready For your next Trip ?</Text>
                    </View>
                </SafeAreaView>
                <View style={styles.homeSearchContainer}>
                    <Image 
                        source = {icons.SEARCH} 
                        style={styles.homeSearchIcon}
                    />
                    <TextInput
                         placeholder={'Search...'}
                         style={styles.homeSearchInputField}
                    />
                </View>
            </View>
        </ImageBackground>
    )
}

export default Home;

