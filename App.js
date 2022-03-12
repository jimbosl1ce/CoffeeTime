import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import HomeScreen from './src/screens/HomeScreen';
import BrewScreen from './src/screens/BrewScreen';
import SignupScreen from './src/screens/SignupScreen';
import SelectBrewScreen from './src/screens/SelectBrewScreen';
import BrewExecuteScreen from './src/screens/BrewExecuteScreen';
import RatingScreen from './src/screens/RatingScreen';
import DiagnoseScreen from './src/screens/DiagnoseScreen';
import DiagnoseQuizScreen from './src/screens/DiagnoseQuizScreen';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen name="Signup" component={SignupScreen} options={{ title: 'Sign Up' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="Brew" component={BrewScreen} options={{ title: 'Get Brewin\'' }} />
        <Stack.Screen name="SelectBrew" component={SelectBrewScreen} options={{ title: 'Bartle Doo' }} />
        <Stack.Screen name="Execute" component={BrewExecuteScreen} options={{ title: 'Cawf Time' }} />
        <Stack.Screen name="Rate" component={RatingScreen} options={{ title: 'How\'d it go?' }} />
        <Stack.Screen name="Diagnose" component={DiagnoseScreen} options={{ title: 'Diagnose' }} />
        <Stack.Screen name="Quiz" component={DiagnoseQuizScreen} options={{ title: 'Diagnose' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;