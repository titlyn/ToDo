import React, {createContext, useState, useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const AuthContext = createContext();
import { Alert } from "react-native";

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [userToken, setUserToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const [error, setError] = useState(null);

    const login = async (email, password) => {
        setIsLoading(true);
        try {
            const data =  await axios.post(
                'http://192.168.43.17:3000/api/auth/login',
                {
                    "email": email,
                    "password": password
                },
                {
                    headers: {
                        'Content-Type': "application/json",
                        'Accept': "application/json",
                    }
                 }
             );
        if (data) {
           console.log(data.data.token)
              let token = data.data.token;
           await AsyncStorage.setItem('token', token);
            let token_stock;
            token_stock = await AsyncStorage.getItem('token');
            console.log('stocké :' + token_stock);
            navigation.replace('NavigationScreen')
    
            return true;
    }   else {
            setError(data.message);
            setIsLoading(false);
            Alert.alert('Erreur', data.message);}
    
    } catch (e) {
        console.log(e);
        console.log(`login error ${e}`);
        setIsLoading(false);
        Alert.alert('Verifier vos informations')
    }
    };

    const isLoggedIn = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            if (token) {
                setUserToken(token);
            }
        }
        catch (e) {
            console.log(e);
        }
        finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        isLoggedIn();
    }
    , []);

    return (
        <AuthContext.Provider value={{userToken, userInfo, login, error, isLoading}}>
            {children}
        </AuthContext.Provider>
    );
};
