import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './components/loginScreen/LoginScreen';
import MovieDetailScreen from './components/movieDetailScreen/MovieDetailScreen';
import MovieListScreen from './components/movieListScreen/MovieListScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <View style = {styles.mainContainer}>
      <NavigationContainer>
          <Stack.Navigator  initialRouteName="Login">
              <Stack.Screen name='Login' component={LoginScreen} options = {{headerShown:false}}/>
              <Stack.Screen name='MovieList' component={MovieListScreen}options = {{headerShown:false}}/>
              <Stack.Screen name='MovieDetail' component={MovieDetailScreen}options = {{headerShown:false}}/>
          </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex : 1
  }
})

