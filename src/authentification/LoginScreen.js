import React from 'react';
import {View, StyleSheet, Alert} from "react-native";
import { Card, TextInput, Button, Appbar} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { loginStyle } from './LoginStyle';
import { ScrollView } from 'react-native';
import { Formik } from 'formik';


export default function LoginScreen(props) {
const{navigation}=props;

    const login = () => Alert.alert("Login soon")
    const register = () => Alert.alert("Register soon")
    return (
        <SafeAreaView style={loginStyle.container}>
        <ScrollView>

        {/* Replacing Appbar with the Headers from the StackNavigator - looks better  */}
        {/* <Appbar>
        <Appbar.BackAction/> 
        <Appbar.Content title="Log In" style={loginStyle.appbar}></Appbar.Content> 
        </Appbar>     */}

        <View>
            <Card.Title title="Christmas Travel" titleStyle={loginStyle.cardtitle}></Card.Title>
            <Card.Content style={loginStyle.card}>
                <Formik
                    initialValues={{email:"", password:""}}
                    onSubmit={login}>
                    {({handleSubmit}) => (
                        <>

                        <TextInput style={loginStyle.textinput} backgroundColor="#8EC278" textColor='#287D4D' label="Email" keyboardType='email-address'></TextInput>
                        <TextInput style={loginStyle.textinput} backgroundColor="#8EC278" textColor='#287D4D' label="Password" secureTextEntry={true}></TextInput>
                        
                        <Button  style={loginStyle.cardbutton} textColor='#F5D68F'>Forgot Password</Button>

                        <Button 
                        //onPress={handleSubmit}
                        onPress={() => navigation.navigate("Home")}
                        testID="loginButton"
                        style={loginStyle.cardbutton} buttonColor='#287D4D' textColor='#F5D68F' mode="contained">Login</Button>

                        <Button 
                        onPress={() => navigation.navigate("SignUp")}
                        // onPress={register}
                        testID="registerButton"
                        style={loginStyle.cardbutton} buttonColor='#287D4D' textColor='#F5D68F' mode="contained">Register</Button>

                        </>
                    )}
                </Formik>            
            </Card.Content>
        </View>
        </ScrollView>
        </SafeAreaView>


    );
};

