import { Text, View, StyleSheet, Image, TextInput, Pressable, ImageBackground } from 'react-native';
import image from '../../assets/fond.png';
import Logo from '../../assets/black.png';
import React, { useContext, useState } from 'react';
import axios from 'axios';

export default function LoginScreen({navigation}){
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');
    const [userInfo, setUserInfo] = useState({});

//     // axios.get('https://jsonplaceholder.typicode.com/posts')

    const login = async (email, password) => {
        setIsLoading(true);
        try {
            const {data} =  await axios.post(
                'http://192.168.43.125:3000/api/auth/login',
                {
                    email,
                    password
                },
                {
                    headers: {
                        'Content-Type': "application/json",
                        'Accept': "application/json",
                }
            }
        );
        
        if (data.success) {
            let userInfo = data;
            setUserInfo(userInfo);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            setIsLoading(false);
            console.log('hello')
            return true;
    }   else {
            setError(data.message);
            setIsLoading(false);
    }

    } catch (e) {
        console.log(e);
        console.log(`login error ${e}`);
        setIsLoading(false);
    }
    };

    return (
        <View style={loginStyle.container}>
            <ImageBackground source={image} style={loginStyle.image}>
                <View style={loginStyle.header}>
                    <Image source={Logo} style={loginStyle.logo}></Image>
                    <Text style={loginStyle.grandTitre}>Se connecter</Text>
                    <Text style={loginStyle.descri}>Accedez à votre compte</Text>
                </View>
                <View style={loginStyle.body}>
                    <TextInput style={loginStyle.input} placeholder="Email" keyboardType='email-address' onChangeText={setEmail} value={email}></TextInput>
                    <TextInput style={loginStyle.input} placeholder="Mot de passe" secureTextEntry={true} onChangeText={setPassword} value={password}></TextInput>
                    <Text style={loginStyle.secondaryText}>Mot de passe oublié ?</Text>

                    <View style={{ paddingVertical: 30 }}>
                        <Pressable style={loginStyle.boutonPrimary} onPress={() => {
                            login(email, password);
                            console.log(email, password);
                            }}>
                            <Text style={{ color: '#fff', fontSize: 14, fontFamily: 'Montserrat' }}>Se connecter</Text>
                        </Pressable>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={{ textDecorationLine: 'line-through', letterSpacing: 75.9 }}> </Text>
                            <Text style={loginStyle.secondarySepText}> ou </Text>
                            <Text style={{ textDecorationLine: 'line-through', letterSpacing: 75.9 }}> </Text>
                        </View>

                        <Pressable style={loginStyle.boutonSecondary} onPress={() => {navigation.navigate('RegisterScreen')}}>
                            <Text style={loginStyle.primaryText}>Créer un compte</Text>
                        </Pressable>
                    </View>
                </View>
            </ImageBackground>
        </View>

    )
}

const colors = {
    primary: '#242945',
    text: '#fff',
    secondary: '#0D90BB',
    light : '#F5F5F5',
    dark : '#585858',
}

const loginStyle = StyleSheet.create({
    container: {
        flex:1,
        paddingTop:50
    },
    header: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 40,
        height: 40,   
    },
    grandTitre : {
        fontSize:30,
        fontWeight: 'bold',
        paddingTop:15,
        color: colors.primary,
    },
    descri: {
        fontSize:15,
        marginTop:-5,
        color: colors.primary,
    },
    body: {
        flex:3,
        paddingHorizontal:40,
        paddingTop: 30,

    },
    input: {
        borderWidth:1.2,
        borderColor: colors.primary,
        borderRadius:5,
        height: 45,
        paddingHorizontal:10,
        marginVertical:6,
        fontSize: 14,
        color: colors.primary,
    },
    secondaryText: {
        fontSize: 14,
        color: colors.primary,
        paddingBottom: 15,
    },
    boutonPrimary:{
        backgroundColor: colors.primary,
        width: '100%',
        height: 45,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    boutonSecondary:{
        backgroundColor: '#fff',
        width: '100%',
        height: 45,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.primary,
    },
    primaryText: {
        fontSize: 14,
        color: colors.primary,
    },
    secondarySepText: {
        fontSize: 14,
        color: colors.primary,
        paddingBottom: 15,
    },
    image: {
        flex: 1,
        justifyContent: "center",
    },
    
    
});