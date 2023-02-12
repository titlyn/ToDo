import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, StackNavigator} from '@react-navigation/stack';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';
import LoginScreen from './src/screen/loginScreen';
import HomeScreen from './src/screen/homescreen';
import MessageScreen from './src/screen/messageScreen';
import NotificationScreen from './src/screen/notificationScreen';

// function LoginScreen (){
//   const getData = () => {

//     // axios.get('https://jsonplaceholder.typicode.com/posts')
//     // axios.get('https://openweathermap.org/api')
//     axios.get('http://192.168.43.125:3000/api/post')
//     .then(response => console.log(response.data[0].posterInfo.userName))
//     .catch(error=> console.log(error))
//   }
  
//   return(<View style = {styles.container}>
//     <Text>Hello Login</Text>
//     <Button onPress={getData} title='HELLO'></Button>
//   </View>)
// }

// function HomeScreen (){
//   return(<View style = {styles.container}>
//     <Text>Hello HomeScreen</Text>
//   </View>)
// }

const Stack = createStackNavigator();

export default function App() {
const [name, setName] = useState('');
const [isLoggedIn, setIsLoggedIn] = useState(true);
  
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoggedIn(true);
    }, 2000);
  }, []);

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='NotificationScreen'>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="MessageScreen" component={MessageScreen} options={{headerShown:false}}/>
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
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