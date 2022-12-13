import { useState } from "react";

function SignUp() {
    const [signupData, setSignupData] = useState ({
        username: "", //required
        email: "", //required
        password: "", // required
        confrimpassword: "", //required
        phone: "" //optional
    })
 
    function handleSubmit(s) {
        s.preventDefault()
        fetch("http://192.168.43.202:19000", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(signupData)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    function handleChange(s) {
        setSignupData({...signupData, [e.target.name]: e.target.value})
    }
}

export default SignUp