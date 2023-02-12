import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { useState } from 'react';

function LoginScreen (){
  return(<View style = {styles.container}>
    <Text>Hello Login</Text>
  </View>)
}

function HomeScreen (){
  return(<View style = {styles.container}>
    <Text>Hello HomeScreen</Text>
  </View>)
}

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});