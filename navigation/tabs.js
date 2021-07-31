import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";

import { Home, Settings, Profile,Explore } from "../screens";

import { icons } from "../constants";

const Tab = createBottomTabNavigator();


const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    borderTopWidth: 0,
                    elevation: 0
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.PASSPORT}
                            resizeMode="contain"
                            style={{
                                width: focused ? 40 : 30,
                                height: focused ? 40 : 30,
                            }}
                        />
                    ),
                    
                }}
            />

            <Tab.Screen
                name="profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.TRAVELLER}
                            resizeMode="contain"
                            style={{
                                width: focused ? 40 : 30,
                                height: focused ? 40 : 30,
                            }}
                        />
                    ),
                    
                }}
            />

            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.GEAR}
                            resizeMode="contain"
                            style={{
                                width: focused ? 40 : 30,
                                height: focused ? 40 : 30,
                            }}
                        />
                    ),
                   
                }}
            />

        </Tab.Navigator>
    )
}

export default Tabs;