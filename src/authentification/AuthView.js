import React from 'react';
import {Provider as PaperProvider, TextInput} from "react-native-paper";
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';

export default function Auth(props) {
    return (
        <PaperProvider>
             <LoginScreen/>
             <SignUpScreen/>
        </PaperProvider>

    );
};

