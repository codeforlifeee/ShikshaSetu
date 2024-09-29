import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator'; // Add "src" to the path


const App = () => (
  <NavigationContainer>
    <AppNavigator />
  </NavigationContainer>
);

export default App;