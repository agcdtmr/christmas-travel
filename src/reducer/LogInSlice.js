import { createSlice } from "@reduxjs/toolkit";

const initialState =  {
   isloggedIn : false,
   email:"",
   password:""

}

export const logInSlice = createSlice({
    name:"login",
    initialState, 
    reducers:{
        //first reducer & action
        onLogIn: (state, action) => {
            console.log("I got here")
            state.email = action.payload.email
            state.password = action.payload.password
        }
    }
})
export const {onLogIn} = logInSlice.actions

export default logInSlice.reducer