import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import DrawerMenu from './components/common/DrawerMenu';

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <NavigationContainer>
        <DrawerMenu/>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  }
})

