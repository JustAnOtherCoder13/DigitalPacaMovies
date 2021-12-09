import MovieListScreen from '../components/movieListScreen/MovieListScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../components/loginScreen/LoginScreen';
import React from 'react';
import MovieDetailScreen from '../components/movieDetailScreen/MovieDetailScreen';

const Stack = createNativeStackNavigator();

export function Navigation() {
    return (
      <Stack.Navigator initialRouteName = '"Home"' >
        <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name='MovieList' component={MovieListScreen} options={{ headerShown: false }} />
        <Stack.Screen name='MovieDetail' component={MovieDetailScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    )
  }