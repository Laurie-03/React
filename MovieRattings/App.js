import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MoviesList from './components/MoviesList';
import MovieAdd from './components/MovieAdd';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
          <Tab.Screen name="MoviesList" component={MoviesList} />
          <Tab.Screen name="MovieAdd" component={MovieAdd} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}