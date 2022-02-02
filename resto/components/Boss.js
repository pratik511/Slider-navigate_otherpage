/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from './Home';
import List from './List';
import Slider from './Slider';

const Stack = createNativeStackNavigator();

const Boss = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='List' component={List} />
            <Stack.Screen name="Slider" component={Slider}/>
        </Stack.Navigator>
    </NavigationContainer>
    );
};

export default Boss;

