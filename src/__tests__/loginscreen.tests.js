import React from "react";
import LoginScreen from "../authentification/LoginScreen";
import {fireEvent, render, waitFor} from "@testing-library/react-native"
import { loginForm } from "../authentification/LoginForm";


 describe("Login screen", ()=>{

    it ("should go on home page on pressing the login button",async () =>{
        const navigation = {navigate: ()=> {}}
        jest.spyOn(navigation, 'navigate');
        
        const page=render(<LoginScreen navigation={navigation} />);

        const email = page.getByTestId("email");
        const password = page.getByTestId("password");
        fireEvent.changeText(email,"valid@email.com");
        fireEvent.changeText(password, "12345678");


        const loginButton = page.getByTestId("loginButton");

        fireEvent.press(loginButton);

        await waitFor (() => expect(navigation.navigate).toHaveBeenCalledWith("Home"));
    })

    it("should go to signup page on pressing signup button", ()=>{
        const navigation = {navigate: () => {}}
        jest.spyOn(navigation, 'navigate');

        const page = render(<LoginScreen navigation={navigation} />)

        const signupButton = page. getByTestId("signupButton");
        
        fireEvent.press(signupButton);

        expect(navigation.navigate).toHaveBeenCalledWith("SignUp")

    })

    it("form invalid if email is empty", () => {
        const formValues = {email: ""};

        expect(loginForm.isValidSync(formValues)).toBeFalsy();

    })

    it("form invalid if email is invalid", () => {
        const formValues ={email:"invalid"};
        expect(loginForm.isValidSync(formValues)).toBeFalsy();

    })

    it ("form invalid if password is empty", () => {
        const formValues={password: "", email: "valid@email.com"}

        expect(loginForm.isValidSync(formValues)).toBeFalsy();

 })
    it("form should be valid", ()=> {
        const formValues = {password:"validPassword", email:"valid@email.com"}

        expect(loginForm.isValidSync(formValues)).toBeTruthy();
    })

    //EMAIL

    it("form should show error message if email field is touched and it is empty", async () => {
        const page = render(<LoginScreen/>)

        const email=page.getByTestId("email");
        fireEvent.changeText(email,"");

        const loginButton = page.getByTestId("loginButton");
        fireEvent.press(loginButton);

        await waitFor(()=> page.getByTestId("error-email"));
    })

    it ('form should hide error message if email field is not touched', async () => {
        const page = render (<LoginScreen/>);
        await waitFor(() => expect(page.queryAllByTestId("error-email").length).toEqual(0));

    })

    //PASSWORD

    it("form should show error message if password field is touched and it is empty", async () => {
        const page = render(<LoginScreen/>)

        const password=page.getByTestId("password");
        fireEvent.changeText(password,"");

        const loginButton = page.getByTestId("loginButton");
        fireEvent.press(loginButton);

        await waitFor(()=> page.getByTestId("error-password"));
    })

    it ('form should hide error message if password field is not touched', async () => {
        const page = render (<LoginScreen/>);
        await waitFor(() => expect(page.queryAllByTestId("error-password").length).toEqual(0));

    })

    // FORGOT PASSWORD

    it ("form should disable Forgot Password button if email is empty", async() => {
        const page = render(<LoginScreen/>);

        const forgotButton = page.getByTestId("forgotButton");

        await waitFor(() => expect(forgotButton.props.accessibilityState.disabled).toBeTruthy());
    })

    it ("form should disable forgot button if email has error", async () => {
        const page = render(<LoginScreen/>);

        const email = page.getByTestId("email");
        fireEvent.changeText(email, "invalid");

        const forgotButton = page.getByTestId("forgotButton");

        await waitFor(() => expect(forgotButton.props.accessibilityState.disabled).toBeTruthy());

        
    })






})