import React from 'react';
import { Text,  View, StyleSheet, Image, TextInput, Pressable, ScrollView, Dimensions } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Logo from '../assets/logo_blanc.png';


export default function Header() {
    return(
        <View style={styles.container}>
                <Image source = {Logo} style = {{width:40,height:40}}></Image>
                <View style= {{flexDirection:'row',alignItems:'center'}}>
                
                    <View style={{marginRight:10, backgroundColor:'#1C1C1C',borderColor:'#747474', borderWidth:1, padding:10, borderRadius:14}}>
                        <Ionicons name="search" size={20} color="#fff"/>
                    </View>
                    <View style={{marginRight:10, backgroundColor:'#1C1C1C', padding:7, borderRadius:14, borderWidth:1, borderColor:'#747474'}}>
                        <Ionicons name="menu" size={25} color="#fff"/>
                    </View>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#1C1C1C',
        width:'100%',
        paddingHorizontal:20, height:60,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:"center", 
        marginTop:30,
        marginBottom:3
    }

})