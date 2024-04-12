import React from 'react';
import { Button, StyleSheet, View, SafeAreaView } from 'react-native';

const AuthHomeScreen = ({navigation}) =>{
    return(
        <SafeAreaView>
            <View>
                <Button title='로그인화면으로 이동' onPress={()=>navigation.navigate("Login")}/>
            </View>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({});

export default AuthHomeScreen;