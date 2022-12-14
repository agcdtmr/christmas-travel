import React from 'react'
import { ScrollView, View, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Appbar, Button, TextInput } from 'react-native-paper'
import { signupStyle } from './SignUpStyle'

function SignUpScreen(props) {
  // const{navigation}=props;
  // const signup = () => Alert.alert ("Signup soon")
  const signup = () => props.navigation.navigate('Home')

  return (
    <SafeAreaView style={signupStyle.container}>
      <ScrollView>
        {/* Replacing Appbar with the Headers from the StackNavigator - looks better  */}
        {/* <Appbar>
            <Appbar.BackAction/>
            <Appbar.Content title="SignUp"  ></Appbar.Content>
            </Appbar> */}

        <View style={signupStyle.card}>
          <TextInput style={signupStyle.textinput} textColor="#287D4D" label="Name" />
          <TextInput style={signupStyle.textinput} textColor="#287D4D" label="Email" keyboardType="email-address" />
          <TextInput
            style={signupStyle.textinput}
            textColor="#287D4D"
            label="Password"
            secureTextEntry={true}
            right={<TextInput.Icon name="eye-off" />}
          />
          <TextInput
            style={signupStyle.textinput}
            textColor="#287D4D"
            label="Confirm Password"
            secureTextEntry={true}
            right={<TextInput.Icon name="eye-off" />}
          />
          <TextInput style={signupStyle.textinput} textColor="#287D4D" label="Phone" keyboardType="phone-pad" />
          <Button
            //onPress={signup}
            onPress={signup}
            testID="signupButton"
            style={signupStyle.cardbutton}
            buttonColor="#287D4D"
            textColor="#F5D68F"
            mode="contained"
          >
            Sign Up
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUpScreen
