import { alertTypes } from "./alert_types";

export const alertActionsMessages = {
    success,
    fail,
    clear
};

function success(message) {
    return {
        type: alertTypes.SUCCESS,
        payload: message
    };
}

function fail(message) {
    return {
        type: alertTypes.FAIL, 
        payload: message
    };
}

function clear() {
    return{
        type: alertTypes.CLEAR
    };
}

