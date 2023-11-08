import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SCREEN from './Routekey';
import LoginScreen from '../screens/login';
import HomeScreen from '../screens/HomeScreens';
import BottomTab from './BottomTab';
const Stack = createNativeStackNavigator();
const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
       screenOptions={{headerShown: false}}
        initialRouteName={SCREEN.LOGIN_SCREEN}>
        <Stack.Screen name={SCREEN.LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen name={SCREEN.BOTTOM_TAB} component={BottomTab} />
        <Stack.Screen name={SCREEN.HOME_SCREEN} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigator;
