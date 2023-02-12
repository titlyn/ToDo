import React from "react";
import { Text,  View, StyleSheet, Image, ScrollView,Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Profile from '../../assets/rakooot.png';
import { LinearGradient } from 'expo-linear-gradient';
import DoubleClick from "react-native-double-tap";
import loveReact from '../../assets/love.json'

export default class Post extends React.Component{
    state = {
        isliked: this.props.isLiked,
      };

    updateLike = () => {
        this.setState({isliked: !this.state.isliked});
    }

    render(){
    return(
        <LinearGradient colors={['#474747', '#1C1C1C']} start={{x: 0, y: 0}} end={{x:0.80, y: 1}} style={{borderWidth:1,borderColor:'#474747', width:'88%',height:'auto',borderRadius:20,marginHorizontal:22, marginVertical:10,}}>
         
        <View style= {{width:"100%",height:'auto',borderRadius:20,marginBottom:6, }}>
            <View style ={{width:"100%",height:"auto",flexDirection:"row",marginTop:10, marginBottom:3}}>
                <Image source={this.props.ProfileImg} style={{borderRadius:30, resizeMode:'cover', width:45, height:45,marginLeft:20}}></Image>
                <View style = {{justifyContent:'center', paddingHorizontal:12}}>
                    <Text style={{fontFamily:'Montserrat-SemiBold', color:'#fff'}}>{this.props.Username}</Text>
                    <Text style = {{fontFamily:'Montserrat',fontSize:10, color:'white'}}>{this.props.Date}</Text>
                </View>   
            </View>
            {this.props.PostImg&&<View style = {{overflow:'hidden', width:'100%', height:200, marginVertical:5}}>
            <DoubleClick singleTap={() => { console.log("single tap"); }} doubleTap={() => { console.log("double tap"); this.updateLike(); }} delay={200} >
                <Image source={this.props.PostImg} style={{resizeMode:'cover', width:'100%', height:200 }}></Image>
            </DoubleClick>
            </View>}
            {this.props.Description&&<View style = {{width:'90%',height:'auto',alignSelf:"center", marginVertical:6}}>
                <Text style = {{fontFamily:'Montserrat',fontSize:14, color:'white'}}>
                    {this.props.Description}
                </Text>
            </View>}
            <View style={{flexDirection:'row', justifyContent:'space-between',marginTop:5, marginBottom:10, marginHorizontal:15}}>
                <View style = {{flexDirection:'row'}}>
                    <Pressable onPress={this.updateLike}>
                    <View style={{flexDirection:'row', alignItems:'center', marginRight:20}}>
                        {this.state.isliked ? <Ionicons name="heart" size={25} color="cyan"/> : <Ionicons name="heart-outline" size={25} color="cyan"/>}
                        {this.props.Like && <Text style={{color:'white', fontFamily:'Montserrat', marginLeft:7}}>{this.props.Like}</Text>}
                    </View>
                    </Pressable>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Ionicons name="chatbox-outline" size={25} color="#fff"/>
                        <Text style={{color:'white', fontFamily:'Montserrat', marginLeft:7}}>{this.props.Comments}</Text>
                    </View>
                </View>
                <Ionicons name="md-send" size={25} color="#fff"/>
            </View>
        </View>
        </LinearGradient>
    )
}}