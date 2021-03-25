import React, {useState, useEffect} from "react";
import {authenticate, isAuth, signin, signup} from "../actions/auth";
import Router from "next/router"
export const SiginForm = () => {

    const [value, setValue] = useState({
        "email": "kurilovsergey15@gmail.com",
        "password": "q92e01kl",
        "error": false,
        "loading": false,
        "message": "",
        "showform": true
    })
    const {email,password,error,loading,showform,message} = value

    useEffect(() => {
        isAuth() && Router.push("/")
    })


    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log("Handle Submit")
        // console.table({...value})
        setValue({...value, loading: true, error: false})
        const user = {email, password}
        signin(user)
            .then(res => {
                if(res.error){
                    setValue({...value, error: res.error})
                }else{

                    authenticate(res, () => {
                        Router.push(`/`)
                    })

                    //save user token to cookie
                    //save user info to localstorage
                    //authenticate user
                }
            })


    }

    const showLoading = () => ( loading ? <div className="alert alert-info">Loading....</div> : "")
    const showError = () => ( error ? <div className="alert alert-danger">{error}</div> : "")
    const showMessage = () => ( message ? <div className="alert alert-info">{message}</div> : "")



    const onChangeHandler = name => e => {
        setValue({...value, error: false, [name]: e.target.value})
    }

    const Form = () => {
        return (
            <form onSubmit={handleSubmit}>
                <input onChange={onChangeHandler("email")} placeholder={"your email"} value={value.email} type="text"
                       className="form-control"/>
                <br/>
                <input onChange={onChangeHandler("password")} placeholder={"your password"} value={value.password} type="password" className="form-control"/>
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