import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import logo from '../../assets/logo.png';
import { useEffect } from "react";

export default function SplashScreen({navigation}) {

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('')
        }, 5000)
    })

    return (
        <View style={styles.container}>
            <View style={styles.logocontainer}>
                <Image source={logo}/>    
            </View> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    logocontainer:{
        flex:1, 
        width:'10%',
        height:'10%'
    }
});