import React, {useState} from "react";

export const SigupForm = () => {

    const [value, setValue] = useState({
        "name": "Sergey",
        "email": "kurilovsergey15@gmail.com",
        "password": "q92e01kl",
        "error": false,
        "loading": false,
        "showform": true
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Handle Submit")
        console.table({...value})
    }



    const onChangeHandler = name => e => {
        setValue({...value, error: false, [name]: e.target.value})
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={onChangeHandler("name")} placeholder={"your name"} value={value.name} type="text" className="form-control"/>
            <input onChange={onChangeHandler("email")} placeholder={"your email"} value={value.email} type="text" className="form-control"/>
            <input onChange={onChangeHandler("password")} placeholder={"your password"} value={value.password} type="password" className="form-control"/>
            <button className="btn btn-primary">Submit</button>
        </form>
    )
}