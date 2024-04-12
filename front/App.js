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

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}/>
        <Text>텍스트</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}/>
        <Text>텍스트</Text>
      </View>
    </SafeAreaView>
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