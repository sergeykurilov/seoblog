import React, {useState, useEffect} from "react";
import {isAuth, signup, preSignup} from "../actions/auth";
import Router from "next/router"
import GoogleLoginComponent from "./GoogleLogin";
import Link from "next/link";

export const SigupForm = () => {

    const [value, setValue] = useState({
        "name": "",
        "email": "",
        "password": "",
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
        preSignup(user)
            .then(res => {
                if (res.error) {
                    setValue({...value, error: res.error})
                } else {
                    setValue({
                        ...value,
                        loading: false,
                        error: false,
                        name: "",
                        senderEmail: "",
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
                <div className="flex flex-col  bg-gray-100">
                    <div className="grid place-items-center mx-2 my-20 sm:my-auto">
                        <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12
            px-6 py-10 sm:px-10 sm:py-6
            bg-white rounded-lg shadow-md lg:shadow-lg">
                            <h2 className="text-center font-semibold pb-3 text-3xl lg:text-4xl text-gray-800">
                                Sign Up
                            </h2>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="name"
                                       className="block text-xs font-semibold text-gray-600 uppercase">Name</label>
                                <input id="email" type="email" name="email" placeholder="your name"
                                       autoComplete="email"
                                       value={value.name}
                                       onChange={onChangeHandler("name")}
                                       className="block w-full py-3 px-1 mt-2
                    text-gray-800 appearance-none
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                                />

                                <label htmlFor="email"
                                       className="block text-xs font-semibold text-gray-600 uppercase">E-mail</label>
                                <input id="email" type="email" name="email" placeholder="e-mail address"
                                       autoComplete="email"
                                       value={value.email}
                                       onChange={onChangeHandler("email")}
                                       className="block w-full py-3 px-1 mt-2
                    text-gray-800 appearance-none
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                                />


                                <label htmlFor="password"
                                       className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
                                <input id="password" type="password" name="password" placeholder="password"
                                       autoComplete="current-password"
                                       onChange={onChangeHandler("password")}
                                       value={value.password}
                                       className="block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                                       required/>


                                <button type="submit"
                                        className="w-full py-3 mt-10 bg-indigo-700 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-indigo-900 hover:shadow-none">
                                    Sign up
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </form>
        )
    }

    return (
        <>
            {showLoading()}
            {showMessage()}
            {showError()}
            {showform && Form()}
        </>
    )

}
