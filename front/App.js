import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import AuthHomeScreen from './src/screens/AuthHomeScreen';
import AuthStackNavigator from './src/screens/navigation/AuthStackNavigator';

function App() {
  return (
    <NavigationContainer>
      <AuthStackNavigator/>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'yellow',
  },
  input:{
    flex:1,
    borderWidth: 2,
    borderColor: 'black',
    height:100,
    width: 100
  },
  inputContainer:{
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})