import React from 'react';
import {Text, Image, View, Pressable} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Sedra from '../../assets/sedra.jpg';
import { TextInput } from 'react-native-gesture-handler';

export default function NewPostScreen({navigation}) {
    
        return (
            <View style={{flex:1, backgroundColor:'#1C1C1C'}}>
                <View style={{width:'100%', backgroundColor:'#1C1C1C', height:25, margin:20, flexDirection:'row', alignContent:'center', marginTop:35}}>
                    <Pressable onPress={()=>navigation.goBack()}>
                    <Ionicons name="arrow-back" size={25} color="#fff"/>
                    </Pressable>
                    <Text style={{color:'white', fontSize:20, fontWeight:'bold', marginHorizontal:25}}>Nouvelle publication</Text>
                </View>
                <View style ={{width:"100%",height:"auto",flexDirection:"row", marginBottom:3}}>
                <Image source={Sedra} style={{borderRadius:30, resizeMode:'cover', width:45, height:45,marginLeft:20}}></Image>
                <View style = {{justifyContent:'center', paddingHorizontal:12}}>
                    <Text style={{fontFamily:'Montserrat-SemiBold', color:'#fff'}}>Sedra Rabe</Text>
                </View>   
                </View>
                <View style={{width:'90%', backgroundColor:'#2B2B2B', height:200, alignContent:'flex-start', alignItems:'flex-start', marginHorizontal:20 ,marginVertical:10 ,borderRadius:10}}>
                    <TextInput multiline placeholder="Que voulez-vous publier?" style={{color:'#fff', marginVertical:10, marginHorizontal:15}}></TextInput>
                </View>
                <View style={{backgroundColor: colors.secondary, width: '90%', height: 45, borderRadius: 5, justifyContent: 'center', alignItems: 'center', marginBottom: 15,marginHorizontal:20}}>
                    <Pressable onPress={()=>{navigation.goBack()}}>
                        <Text style={{color:'white', fontSize:15}}>Publier</Text>
                    </Pressable>
                </View>
            </View>
        );
    }

    const colors = {
        primary: '#242945',
        text: '#fff',
        secondary: '#0D90BB',
        light : '#F5F5F5',
        dark : '#585858',
    }