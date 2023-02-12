import React from 'react';
import { Text,  View, StyleSheet, Image, ScrollView,Pressable } from 'react-native';

// Post's....

export default function Notification(props) {
    return (
        <View style={{padding: 0, flex:1, flexDirection:'column', backgroundColor:'#1C1C1C'}}>
            <View style={{backgroundColor:'#1C1C1C', flex:1}}>
                <ScrollView style={{flex:1}}>
                     <View style ={{width:"100%",height:'auto',marginVertical:15,flexDirection:"row", marginBottom:3,alignContent:'center'}}>
                        <Image source={props.image} style={{borderRadius:30, resizeMode:'cover', width:50, height:50,marginLeft:20}}></Image>
                         <View style = {{justifyContent:'center', paddingHorizontal:12,borderBottomWidth:1,width:"100%",}}>
                            <View style={{flexDirection:'row',alignItems:'center', }}>
                                <View style = {{width:"70%",height:'auto',}}>
                                    <Text style = {{fontFamily:'Montserrat',fontSize:12.5, color:'white',marginVertical:5}}>
                                        {props.notifmessage}
                                    </Text>       
                                 </View>
                                <Text style = {{fontFamily:'Montserrat',fontSize:8, color:'white',marginLeft:5, marginBottom:13}}>{props.time}</Text>
                            </View>
                        </View>   
                    </View>          
                </ScrollView>
            </View>
        </View>
    );
}
