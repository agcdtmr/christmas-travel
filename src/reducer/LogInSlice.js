import { exportDefaultSpecifier } from "@babel/types";
import { createSlice } from "@reduxjs/toolkit";
import { isError } from "lodash";

const initialState =  {
   isloggedIn : false,

   users: [
    {email: "crina@email.com", password:"hello1"}, 
    {email: "ange@email.com", password:"hello2"}
    ],

   logInStatus: "",

   loggedInUser: { email: "", password: ""}

}

const emailAndPasswordValidation = (newEmail,newPassword,state) => {
    const currentUser = state.users.filter(user => user.email === newEmail)
    console.log("currentUser", currentUser)

    if (currentUser.length === 0){
        console.log("wrong email")

        state.logInStatus = "email doesn't exist"
        

    // } else if (typeof currentUser[0].password !="undefined" || currentUser[0].password != newPassword){
    //         console.log("wrong password")

    //         state.logInStatus = "wrong password"
            
    } else {
        console.log("else here")
        // state.user = [...state.user, {email : newEmail, password: newPassword}]
        state.isloggedIn = true
        state.loggedInUser = {email : newEmail, password: newPassword}
        
    }
} 

export const logInSlice = createSlice({
    name:"login",
    initialState, 
    reducers:{
        //first reducer & action
        onLogIn: (state, action) => {
            console.log("I got here")
            emailAndPasswordValidation (action.payload.email, action.payload.password, state)
        }
    }
})
export const {onLogIn} = logInSlice.actions

export default logInSlice.reducer