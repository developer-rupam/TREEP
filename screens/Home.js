import React from "react";
import {View,Text,Image} from "react-native";
import { icons } from "../constants";

const Home = () => {
    return(
        <View>
            <Text>You are in Home Buddy !!</Text>
            <Image source={icons.PASSPORT} style={{
                                width: 25,
                                height: 25,
                            }}/>
        </View>
    )
}

export default Home;