import React, {useState} from "react";
import {signup} from "../actions/auth";

export const SigupForm = () => {

    const [value, setValue] = useState({
        "name": "Sergey",
        "email": "kurilovsergey15@gmail.com",
        "password": "q92e01kl",
        "error": false,
        "loading": false,
        "message": "",
        "showform": true
    })
    const {name, email, password, error, loading, showform, message} = value

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log("Handle Submit")
        // console.table({...value})
        setValue({...value, loading: true, error: false})
        const user = {name, email, password}
        signup(user)
            .then(res => {
                if (res.error) {
                    setValue({...value, error: res.error})
                } else {
                    setValue({
                        ...value,
                        loading: false,
                        error: false,
                        name: "",
                        email: "",
                        password: "",
                        showform: false,
                        message: res.message
                    })
                }
            })


    }

    const showLoading = () => (loading ? <div className="alert alert-info">Loading....</div> : "")
    const showError = () => (error ? <div className="alert alert-danger">{error}</div> : "")
    const showMessage = () => (message ? <div className="alert alert-info">{message}</div> : "")


    const onChangeHandler = name => e => {
        setValue({...value, error: false, [name]: e.target.value})
    }

    const Form = () => {
        return (
            <form onSubmit={handleSubmit}>
                <input onChange={onChangeHandler("name")} placeholder={"your name"} value={value.name} type="text"
                       className="form-control"/>
                <br/>
                <input onChange={onChangeHandler("email")} placeholder={"your email"} value={value.email} type="text"
                       className="form-control"/>
                <br/>
                <input onChange={onChangeHandler("password")} placeholder={"your password"} value={value.password}
                       type="password" className="form-control"/>
                <br/>
                <button className="btn btn-primary">Submit</button>
            </form>
        )
    }

    return (
        <>
            {showLoading()}
            {showMessage()}
            {showError()}
            {showform && <Form/>}
        </>
    )

}