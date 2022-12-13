import React from 'react';
import { ScrollView, View, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Appbar, Button, TextInput } from 'react-native-paper';
import { signupStyle } from './SignUpStyle';
import SignUp from './auth_store/db_signup_store';
import { useState } from "react";

function SignUpScreen(props) {

    // const signup = () => Alert.alert ("Signup soon")
    const signup = () => props.navigation.navigate("Home")

    return (
        <SafeAreaView style={signupStyle.container}>
            <ScrollView>

                <View style={signupStyle.card}>
                <TextInput style={signupStyle.textinput} backgroundColor="#8EC278" textColor='#287D4D' value={signupData.username} label="Username" name= "username" onChange={s =>handleChange(s)}/>
                <TextInput style={signupStyle.textinput} backgroundColor="#8EC278" textColor='#287D4D' value={signupData.email} label="Email" name= "email" keyboardType='email-address' onChange={s =>handleChange(s)}/>
                <TextInput style={signupStyle.textinput} backgroundColor="#8EC278" textColor='#287D4D' value={signupData.password} label="Password" name= "password" secureTextEntry={true} onChange={s => handleChange(s)} />
                <TextInput style={signupStyle.textinput} backgroundColor="#8EC278" textColor='#287D4D' value={signupData.passowrdconfirmaiton} label="Confirm Password" name="passwordconfirmation" secureTextEntry={true} onChange={s =>handleChange(s)}/>
                <TextInput style={signupStyle.textinput} backgroundColor="#8EC278" textColor='#287D4D' value={signupData.phone} label="Phone" name="phone" keyboardType='phone-pad'onChange={s => handleChange(s)}/>
                <Button 
                onPress = {() => {submit}}
                // onPress={s=> handleSubmit(s)}
                testID="signupButton"
                style={signupStyle.cardbutton} buttonColor='#287D4D' textColor='#F5D68F' mode="contained">Sign Up</Button>
                </View>
            </ScrollView>
        </SafeAreaView>
        

    );
}

export default SignUpScreen;