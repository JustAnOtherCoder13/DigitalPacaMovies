import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginScreen from './components/loginScreen/LoginScreen';
import MovieDetailScreen from './components/movieDetailScreen/MovieDetailScreen';
import MovieListScreen from './components/movieListScreen/MovieListScreen';


export default function App() {
  return (
    <View style = {styles.mainContainer}>
      <MovieDetailScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex : 1
  }
})

