import { useState } from "react"

function LogIn() {

    const [loginData, setLoginData] = useState({
        email: "", // required
        password: "" // required
    })

    function handleSubmit(s) {
        s.preventDefault()
        fetch("http://192.168.43.202:19000", {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(loginData)
        })
        .then(res => res.json())
        .then(data => console.log(data.user))
    }

    function handleChange(e) {
        setLoginData({...loginData, [s.target.name] : s.target.value})
    }

}

export default LogIn;