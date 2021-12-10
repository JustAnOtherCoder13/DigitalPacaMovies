import MovieListScreen from '../components/movieListScreen/MovieListScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../components/loginScreen/LoginScreen';
import React from 'react';
import MovieDetailScreen from '../components/movieDetailScreen/MovieDetailScreen';
import { screens } from './RouteItem';

const Stack = createNativeStackNavigator();

export function Navigation() {
    return (
      <Stack.Navigator initialRouteName = {screens.Home} >
        <Stack.Screen name={screens.Login} component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name={screens.MovieList} component={MovieListScreen} options={{ headerShown: false }} />
        <Stack.Screen name={screens.MovieDetail} component={MovieDetailScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    )
  }