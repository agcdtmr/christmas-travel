import { alertTypes } from "./alert_types";
import { alertActionsMessages } from "./alert_action_messages";
import SignUp from "../auth_store/db_signup_store";
import LogIn from "../auth_store/db_login_store";
import LoginScreen from "../LoginScreen";

export const authActions = {
    login,
    logout,
    signup
};

//LOGIN

function login (email, password) {
    return dispatch => {
        dispatch(request({email}));

        LogIn.login(username,password)
        . then (
            user => {
                dispatch(success(user));
            },
            error => {
                dispatch(failure(error.toString()));
                displatch(alertActionsMessages.fail(error.toString()))
            }
        );
    };

    function request(user) {
        return {
            type: actionType.LOGIN_REQUEST, user} } 
        }
    function success(user) {
        return {
            type: alertActionsMessages.LOGIN_SUCCESS, user}
        }
    function failure(user) {
        return {
            type: alertActionsMessages.LOGIN_FAIL, user
        }
    }    

//LOGOUT

function logout() {
    logout.logout();
    return {
        type: alertActionsMessages.LOGOUT
    };
}

//SIGNUP - next time
