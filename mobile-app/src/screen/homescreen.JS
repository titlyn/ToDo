import React from 'react';
import { Text,  View, StyleSheet, Image, ScrollView,Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Header from '../components/header';
// import NewPost from './PostField';
// import TabBar from './TabBar';
// import Profile from '../assets/rakooot.png';
// import Post from './Post';
// import data from './data';

// Post's....

export default function HomeScreen({ navigation }) {
    return (
        <View style={{padding: 0, flex:1, flexDirection:'column', backgroundColor:'#1C1C1C'}}>
            <Header></Header>
            <View style={{backgroundColor:'#1C1C1C', flex:1}}>
                <ScrollView style={{flex:1}}>
                    {/* <NewPost></NewPost> */}
                    {data.map(({_id, username, postTime, postImg, likes, comments, shared, liked, post, profilePic})=> (
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
                </ScrollView>
            </View>
        </View>
    );
}
