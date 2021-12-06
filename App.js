import React from 'react';
import { View, StyleSheet } from 'react-native';
import MovieListScreen from './components/MovieListScreen';
import { Appbar } from 'react-native-paper';
import R from './assets/theme/R';


export default function App() {
  return (
    <View style = {styles.mainContainer}>
      <Appbar.Header style={styles.appBar}>
        <Appbar.Action
          icon={R.images.menuIcon}
          color={R.colors.undertitle}
          onPress={() => console.log('pressed')}
        />
      </Appbar.Header>
      <MovieListScreen />
    </View>
  );
}


const styles = StyleSheet.create({
  mainContainer: {
    flex : 1
  },
  appBar: {
    backgroundColor: R.colors.onSecondary
  },
})

