import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Tab1 } from './Tab1';

import { Tab2Screen } from './Tab2';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
            screenOptions={{ 
                headerShown: false, 
                tabBarActiveTintColor: '#5856D5',
                tabBarStyle: { 
                    position: 'absolute',
                    backgroundColor: 'rgba(255,255,255,0.85)', 
                    paddingBottom: ( Platform.OS === 'ios') ? 0 : 10, 
                    borderWidth: 0,
                    elevation: 0,
                    height: ( Platform.OS === 'ios') ? 70 : 70,
                }
            }}
        >
            <Tab.Screen 
                name="Tab1" 
                component={ Tab1 } 
                options={{
                    tabBarLabel: "Listado",
                    tabBarIcon: ({ color }) => (
                        <Icon 
                            color={ color }
                            size={ 30 }
                            name="list-outline"
                        />
                    )
                }}
            />
            <Tab.Screen 
                name="SearchScreen" 
                component={ Tab2Screen } 
                options={{
                    tabBarLabel: "Busqueda",
                    tabBarIcon: ({ color }) => (
                        <Icon 
                            color={ color }
                            size={ 30 }
                            name="search-outline"
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
}