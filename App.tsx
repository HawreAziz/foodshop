import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { OnBoardScreen, DetailScreen, BottomNavigator } from './src/views';
import COLORS from './src/constants/colors';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar style='auto' backgroundColor={COLORS.grey} />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="OnBard" component={OnBoardScreen} />
        <Stack.Screen name="Home" component={BottomNavigator} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
