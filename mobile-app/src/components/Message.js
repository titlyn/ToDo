import React from 'react';
import { Text,  View, StyleSheet, Image, ScrollView,Pressable } from 'react-native';

// Post's....

export default function Message(props) {
    return (
        <View style ={{width:"100%",height:55,marginVertical:15,flexDirection:"row", marginBottom:3,alignContent:'center'}}>
            <Image source={props.image} style={{borderRadius:30, resizeMode:'cover', width:50, height:50,marginLeft:20}}></Image>
             <View style = {{justifyContent:'center', paddingHorizontal:12,borderBottomWidth:1,width:"100%"}}>
                <Text style={{fontFamily:'Montserrat-SemiBold', color:'#fff'}}>{props.Username}</Text>
                 <View style={{flexDirection:'row',alignItems:'center', }}>
                     
                     {props.isSeen ? <View style = {{width:"60%",height:20,}}>
                        <Text style = {{fontFamily:'Montserrat',fontSize:12, color:'#fff9',}} numberOfLines={1}>
                            {props.message}
                        </Text>       
                    </View> : <View style = {{width:"60%",height:20,}}>
                        <Text style = {{fontFamily:'Montserrat-SemiBold',fontSize:12, color:'white'}} numberOfLines={1}>
                            {props.message}
                        </Text>       
                    </View> }    
                    <Text style = {{fontFamily:'Montserrat',fontSize:8, color:'white',marginLeft:5}}>{props.time}</Text>
                </View>
            </View>   
         </View>              
        
    );
}
