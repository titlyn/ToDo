import React from 'react';
import { Text,  View, StyleSheet, Image, ScrollView,Pressable } from 'react-native';
import Sedra from '../../assets/sedra.jpg';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import data from '../data/data';
import Post from '../components/Post';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ProfileScreen({ navigation }) {

    const currentUserName = 'Sedra Rabe';

    return (
        <ScrollView style={{flex:1, backgroundColor:'#1C1C1C'}}>
            <View style={{width:'100%', height:'100%', alignContent:'center',marginTop:13, backgroundColor:'#1C1C1C', flex:1}}>
                <View style={{width:'100%', marginBottom:10, height:'auto'}}>
                <View style={{flexDirection:'row', alignContent:'center', alignItems:'center'}}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Ionicons name='arrow-back' size={25} style={{margin:20, color:'white'}}></Ionicons>
                </TouchableOpacity>
                <Text style={{fontSize:19, color:'white', alignSelf:'center'}}> @sesedrakely </Text></View>
                <Image source={Sedra} style={{alignSelf:'center',borderRadius:50, resizeMode:'cover', width:100, height:100}}></Image>
                <View style={{width:'100%', backgroundColor:'#1C1C1C', height:'auto', marginVertical:15}}>
                    <Text style={{fontFamily:'Montserrat-SemiBold', fontSize:25,color:'white', alignSelf:'center', fontWeight:'bold'}}>{currentUserName}</Text>
                    <Text style={{fontFamily:'Montserrat', fontSize:15,color:'white', alignSelf:'center'}}>🇲🇬 Gasigasy eny ihany</Text>
                </View>
                </View>
                
                <LinearGradient colors={['#474747', '#1C1C1C']} start={{x: 0.19, y: 0.8}} end={{x:0.8, y: 0.4}} style={{ flex:1, borderRadius:20, borderWidth:1,borderColor:'#474747', justifyContent:'center', alignContent:'center', width:"90%", alignSelf:'center', marginBottom:10}}>
                    <View style={{ width:'100%', height:55, justifyContent:'space-evenly', flexDirection:'row', alignItems:'center'}}>
                        <View style={{flexDirection:'column-reverse'}}>
                            <Text style={{fontFamily:'Montserrat', fontSize:13,color:'white', alignSelf:'center'}}>Publications</Text>
                            <Text style={{fontFamily:'Montserrat-SemiBold', fontSize:20,color:'white',fontWeight:'bold', alignSelf:'center'}}>456</Text>
                        </View>
                        <View style={{flexDirection:'column-reverse'}}>
                            <Text style={{fontFamily:'Montserrat', fontSize:13,color:'white', alignSelf:'center'}}>Followers</Text>
                            <Text style={{fontFamily:'Montserrat-SemiBold', fontSize:20,fontWeight:'bold',color:'white', alignSelf:'center'}}>12</Text>
                        </View>
                        <View style={{flexDirection:'column-reverse'}}>
                            <Text style={{fontFamily:'Montserrat', fontSize:13,color:'white', alignSelf:'center'}}>Suivis</Text>
                            <Text style={{fontFamily:'Montserrat-SemiBold', fontSize:20, fontWeight:'bold',color:'white', alignSelf:'center'}}>45</Text>
                        </View>
                    </View>
                </LinearGradient>

                <View style={{backgroundColor:'#1C1C1C', width:'100%', height:'auto',flexDirection:'row', justifyContent:'space-around', paddingLeft:7,paddingRight:10, paddingVertical:10 }}>
                    <View style={{overflow:'visible', width:50, height:20}}>
                        <Image source={Sedra} style={{borderRadius:17, resizeMode:'cover', width:50, height:50 }}></Image>
                    </View>
                    <View style={{backgroundColor:'#2B2B2B', width:'70%', height:50,borderRadius:17,justifyContent:"center"}}>
                        <Pressable style={{paddingLeft:15}} onPress={()=>{navigation.navigate('NewPostScreen')}}>
                            <Text style={{color:'#fff9', fontSize:14, fontFamily: 'Montserrat',}}>Publier quelque chose...</Text>
                        </Pressable>
                    </View>
                </View>

                {/* Post the user have published */}
                    <View>
                    {data.map(({_id, username, postTime, postImg, likes, comments, shared, liked, post, profilePic})=> (
                        username === 'Sedra Rabemanantsoa' &&
                    <Post 
                    key={_id} 
                    Username={username} 
                    ProfileImg={profilePic}
                    Date={postTime} 
                    Like={likes} 
                    Comments={comments} 
                    Share={shared} 
                    PostImg={postImg}
                    Description={post}
                    isLiked={liked}>
                    </Post>
                    ))}
                    </View>

            </View>
        </ScrollView>
    );
}
