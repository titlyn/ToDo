import React from 'react';
import { Text,  View, StyleSheet, Image, ScrollView,Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Header from '../components/header';
// import NewPost from './PostField';
// import TabBar from './TabBar';
// import Profile from '../assets/rakooot.png';
// import Post from './Post';
// import data from './data';
import NewPost from '../components/PostField';
import Post from '../components/Post';
import data from '../components/data';
import { userData } from '../data/userdata';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
// Post's....
import { useState, useEffect } from 'react';
// import { text } from 'express';


export default function HomeScreen({ navigation }) {
    const [userInfo, setUserInfo] = useState({});
    const [post, setPost] = useState([]);
    var donnees = {};
    var postdata = [];

const getData = async () => {
    try {
        const token = await AsyncStorage.getItem('token')
       if (token) {
        await axios.get('http://192.168.43.17:3000/api/user/',
        {
            'headers':
            {
              "Authorization" : 'bearer '+ token  
            }
        })
        .then((donnee)=>{
            donnees=donnee.data.user;    
            setUserInfo(donnees)
            // console.log(userInfo.personalInfo)
            return donnees;
        
        })
        .catch((error)=>console.log(error))
        }
    } catch (error) {
        console.log(error);
    }
}

const getAllPost = async () => {
    try {
        const token = await AsyncStorage.getItem('token')
       if (token) {
        await axios.get('http://192.168.43.17:3000/api/post/',
        {
            'headers':
            {
                "Authorization" : 'bearer '+ token
            }
        })
        .then((res)=>{
            console.log('tonga')
            postdata=res.data;
            setPost(postdata)
        })
        .catch((error)=>console.log(error))
       }
    } catch (error) {
        console.log(error);
    }
}

useEffect(() => {
    getData();
    getAllPost();

}, []);


const thename = userInfo.personalInfo?.firstName;
const imageP = userInfo.personalInfo?.profileImageUrl;

//
    return (
        <View style={{padding: 0, flex:1, flexDirection:'column', backgroundColor:'#1C1C1C'}}>
            <Header></Header>
            <View style={{backgroundColor:'#1C1C1C', flex:1}}>
                <ScrollView style={{flex:1}}>
                    <NewPost username={thename?thename:'e!'} imageProfile={imageP}> </NewPost>
                    { post.map((elt)=> (
                    <Post 
                    key={elt._id} 
                    Username={elt.posterInfo.userName} 
                    ProfileImg={elt.posterInfo.profileImageUrl}
                    Date={elt.postInfo.dateCreated} 
                    Like={10} 
                    Comments={16} 
                    Share={10} 
                    PostImg={elt.postInfo.photoImageUrl}
                    Description={elt.postInfo.description}
                    isLiked={true}>
                    </Post>
                    ))}
                    {
                        // post.forEach((elt) => {
                        //     // console.log(elt.postInfo.description);
                        //     console.log(elt.postInfo.description);
                        // })                        
                    }
                    {/* {
                        <Post 
                            key={post[0]._id} 
                            Username={post[0].posterInfo.userName} 
                            ProfileImg={post[0].posterInfo.profileImageUrl}
                            Date={post[0].postInfo.dateCreated} 
                            Like={10} 
                            Comments={16} 
                            Share={10} 
                            PostImg={post[0].postInfo.photoImageUrl}
                            Description={post[0].postInfo.description}
                            isLiked={true}>
                            </Post>
                    } */}
                    
                    
                    
                   
                </ScrollView>
            </View>
        </View>
    );
}