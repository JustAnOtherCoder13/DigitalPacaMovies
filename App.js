import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import DrawerNavigation from './navigation/DrawerNavigation';
import { Provider } from 'react-redux';
import Store from './store/StoreConfig'

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <Provider store={Store}>
        <NavigationContainer>
          <DrawerNavigation />
        </NavigationContainer>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  }
})

