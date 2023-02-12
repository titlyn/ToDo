import React from 'react';
import { Text,  View, StyleSheet, Image, TextInput, Pressable, ScrollView, Dimensions } from 'react-native';
import { SafeAreaProvider} from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
// import Logo from '../assets/black.png';
import Logo from '../../assets/black.png';
import Profile from '../../assets/rakooot.png';
import { Animated } from "react-native";
import Fy from '../../assets/fy.jpg'


export default function NewPost() {
    return(
    <View>
    <View style={{backgroundColor:'#1C1C1C', width:'100%', height:85, paddingHorizontal:20 , justifyContent:'center'}}>
            <Text style={{fontFamily:'Montserrat-SemiBold', fontSize:22,color:'white' }}>Salama Antsa 👋</Text>
            <Text style={{fontFamily:'Montserrat', fontSize:12, color:'#fff9'}}>Que recherchez vous?</Text>
            </View>
                <View style={{backgroundColor:'#1C1C1C', width:'100%', height:'auto',flexDirection:'row', justifyContent:'space-around', paddingLeft:7,paddingRight:10, paddingVertical:10 }}>
                    <View style={{overflow:'visible', width:50, height:20}}>
                        <Image source={Fy} style={{borderRadius:17, resizeMode:'cover', width:50, height:50 }}></Image>
                    </View>
                    <View style={{backgroundColor:'#2B2B2B', width:'70%', height:50,borderRadius:17,justifyContent:"center"}}>
                        <Pressable style={{paddingLeft:15}} onPress={()=>{}}>
                            <Text style={{color:'#fff9', fontSize:14, fontFamily: 'Montserrat',}}>Publier quelque chose...</Text>
                        </Pressable>

                    </View>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 22,
        color: '#1C1C1C',
        fontHeight: 70,
        fontFamily: 'Montserrat-Bold',
        paddingLeft: 15,
    },
    button: {
        padding: 15,
        alignItems: 'center',
        borderRadius: 5,
      },
})