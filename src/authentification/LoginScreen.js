import React, {useState} from 'react';
import {View, StyleSheet, Alert} from "react-native";
import { Card, TextInput, Button, Appbar} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { loginStyle } from './LoginStyle';
import { ScrollView, Text } from 'react-native';
import { Formik } from 'formik';
import { loginForm } from './LoginForm';


export default function LoginScreen(props) { 

    const [email, setEmail]= useState("")
    const [password, setPassword] = useState("")

    


//    const{navigation}=props;
    const login = () => props.navigation.navigate("Home")
    const signup = () => props.navigation.navigate("SignUp")

    return (
        <SafeAreaView style={loginStyle.container}>
        <ScrollView>

        <View>
            <Card.Title title="Christmas Travel" titleStyle={loginStyle.cardtitle}></Card.Title>
            <Card.Content style={loginStyle.card}>
                <Formik
                    initialValues={{email:"", password:""}}
                    onSubmit={login}
                    validationSchema={loginForm}>
                    {({handleSubmit, handleChange, errors, setFieldTouched, touched, values}) => (
                        <>

                        <TextInput 
                        style={loginStyle.textinput} backgroundColor="#8EC278" textColor='#287D4D' 
                        label="Email" 
                        testID='email'
                        keyboardType='email-address'
                        onChangeText={(text)=> {handleChange('email'), setEmail(text)}}
                        onFocus={() => setFieldTouched('email')}/>

                        {
                            touched.email && errors.email ? 
                        <Text testID="error-email" style={{color:"white",backgroundColor:"red"}}>{errors.email}</Text>
                            : null
                        }
                        <TextInput 
                        style={loginStyle.textinput} backgroundColor="#8EC278" textColor='#287D4D' 
                        label="Password" 
                        testID='password'
                        secureTextEntry={true}
                        onChangeText={(text) => {handleChange('password'), setPassword(text)}}
                        onFocus={() => setFieldTouched('password')}/>

                        {
                            touched.password && errors.password ? 
                        <Text testID="error-password" style={{color:"white",backgroundColor:"red"}}>{errors.password}</Text>
                            : null
                        }
                        
                        <Button  
                        testID='forgotButton'
                        disabled={values.email =="" || errors.email ? true : false }
                        style={loginStyle.cardbutton} textColor='#F5D68F'>Forgot Password</Button>

                        <Button 
                        onPress={handleSubmit}
                        // onPress={() => navigation.navigate("Home")}
                        testID="loginButton"
                        style={loginStyle.cardbutton} buttonColor='#287D4D' textColor='#F5D68F' mode="contained">Login</Button>

                        <Button 
                        // onPress={() => navigation.navigate("SignUp")}
                        onPress={signup}
                        testID="signupButton"
                        style={loginStyle.cardbutton} buttonColor='#287D4D' textColor='#F5D68F' mode="contained">Sign Up</Button>

                        </>
                    )}
                </Formik>            
            </Card.Content>
        </View>
        </ScrollView>
        </SafeAreaView>


    );
};

