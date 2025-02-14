import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import AuthHomeScreen from '../AuthHomeScreen';
import LoginScreen from '../LoginScreen';


const AuthStackNavigator = () => {
    const Stack = createStackNavigator
  return (
    <Stack.Navigator>
        <Stack.Screen name='AuthHome' component={AuthHomeScreen}/>
        <Stack.Screen name='Login' component={LoginScreen}/>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({});

export default AuthStackNavigator;