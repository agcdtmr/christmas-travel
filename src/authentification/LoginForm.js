import * as yup from 'yup';

export const loginForm = yup.object().shape({
    email: yup.string().required("Email is required").email("Email not valid"),
    password: yup.string().required("Password is required")

})