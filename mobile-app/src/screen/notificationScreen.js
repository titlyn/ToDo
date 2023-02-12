import React from 'react';
import { Text,  View, StyleSheet, Image, ScrollView,Pressable } from 'react-native';
import notificationdata from '../data/NotificationData'
import Notification from '../components/Notification';


export default function NotificationScreen({ navigation }) {
    return (
        <View style={{backgroundColor:'#1C1C1C', flex:1}}>
            <View style={{backgroundColor:'#1C1C1C',width:'90%', height:'auto',marginTop:30,marginHorizontal:10, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <Text style={{color:'#fff', fontSize:30, fontWeight:'bold', marginLeft:10}}>Notifications</Text>

            </View>
                <ScrollView style={{flex:1, paddingTop:20}}>
                     {notificationdata.map(({_id,notificationContent,profilePic,notifTime,seen})=>(
                        <Notification
                            key = {_id}
                            notifmessage = {notificationContent}
                            image = {profilePic}
                            time = {notifTime}
                            isSeen = {seen}
                        >

                        </Notification>
                     ))}
                </ScrollView>
        </View>
    );
}
